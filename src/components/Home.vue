
<template>
    <body>
        <div class="container">
            <div class="row">
                <div class="col" v-for="training, index in trainings" :key="index">
                    <div class="card mb-3 bg-warning border-danger bg-opacity-50 h-90" style="width: 18rem;">
                        <img :src="`http://rsfbackend.test/images/${training.thumbnail}`" class="card-img-top" width="60" height="175" alt="">
                        <div class="card-header text-center text-bolder">
                            <h5 class="card-title text-danger">{{ training.title }}</h5>
                        </div>
                        <div class="card-body text-bolder text-center">
                            <a class="btn text-danger text-bolder" data-bs-toggle="collapse" :href="'#collapseOne'+index"><h5>Informations </h5></a>
                            <div :id="'collapseOne'+index" class="collapse text-left" data-bs-parent="#accordion" aria-haspopup="true">
                                <p class="card-text text-bolder">{{ training.description }}</p>
                                <div class="card-text">{{ $i18n.t('duration') }} : {{ training.total_duration }} Heures</div>
                                <div class="card-text">{{ $i18n.t('price') }} : {{ training.price }}$</div>
                            </div>
                            <div class="card-footer text-center pt-4" v-if="user">
                            <a href="#" class="btn btn-success border-danger" @click.prevent="sendDemand(training.id)">{{ $i18n.t('do-demand') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex align-items-center justify-content-center p-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination" v-if="trainingsLinks.length > 1">
                    <li class="page-item" v-for="trainingsLink, index in trainingsLinks" :key="index" :class="{'active':trainingsLink.active}">
                        <a class="page-link" href="#" @click.prevent="goToPage(trainingsLink.label)">
                            {{ trainingsLink.label }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </body>
</template>
<style>
/* body  {
  background-image: url("texture2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>

<script>
import { mapState, mapActions } from 'vuex';
import Alert from "@/libraries/Alert.js";
export default {
    name: 'Home',
    computed: {
        ...mapState('core/training', [
            'trainings', 'trainingsLinks'
        ]),
        ...mapState('core/auth', [
            'user'
        ])
    },
    methods: {
        ...mapActions('core/training', {
            getTrainings: 'getTrainings',
            getTrainingByPage: 'getTrainingByPage'
        }),
        ...mapActions('core/demand', {
            envoyerDemand: 'envoyerDemand'
        }),
        sendDemand(trainingId){
            //Alert.confirmation("Etes vous sûr !", "Vous allez envoyer une demande pour cette formation" ,"Oui")
            Alert.confirmation(this.$i18n.t('msg-con1'),'', this.$i18n.t('msg-yes'))//il manque le Oui ici  "Confirmez l'envoi de cette demande SVP!Oui"
                .then((response) => {
                    if (response.isConfirmed) {
                        // Envoie de requête Ajax pour créer demande :
                        let dataToSend = {
                            "status":"initiated",
                            "training_id":trainingId,
                            "user_id":this.user.id
                        }
                        this.envoyerDemand(dataToSend).then(()=>{
                            Alert.success(this.$i18n.t('msg-suc2'))//"Enregistrement effectué avec succès!"
                        })
                        .catch((e)=>{
                            let errorMessage = (Object.values(e.response.data.errors)).join('<br/>');
                            Alert.fail(errorMessage);
                        })
                    }
                });
        },
        goToPage(page){
            this.getTrainingByPage(page);
        }
    },
    mounted(){
        this.getTrainings();
    }
}
</script>