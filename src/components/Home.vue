<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="training, index in trainings" :key="index">
                    <div class="card bg-warning border-danger" style="width: 18rem;">
                        <img :src="`http://rsfbackend.test/images/${training.thumbnail}`" class="card-img-top" width="60" height="175" alt="">
                        <div class="card-body ">
                            <h5 class="card-title text-danger text-center">{{ training.category_id }}</h5>
                            <h5 class="card-title text-danger">{{ training.title }}</h5>
                            <p class="card-text">{{ training.description }}</p>
                            <p class="card-text">{{ $i18n.t('duration') }} {{ training.total_duration }} Heures</p>
                            <!-- ici on doit aller chercher le nom du formateur dans la table users à partir de training.user_id -->
                            <p class="card-text">{{ $i18n.t('by') }} {{ training.user_id }}</p>
                            <a href="#" class="btn btn-success border-danger " @click.prevent="sendDemand(training.id)">{{ $i18n.t('do-demand') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex align-items-center justify-content-center p-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <!--li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li-->
                    <li class="page-item" v-for="trainingsLink, index in trainingsLinks" :key="index">
                        <a class="page-link" href="#">
                            {{ trainingsLink.label }}
                        </a>
                    </li>
                    <!--li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li-->
                </ul>
            </nav>
        </div>
    </div>
</template>

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
            getTrainings: 'getTrainings'
        }),
        ...mapActions('core/demand', {
            envoyerDemand: 'envoyerDemand'
        }),
        sendDemand(trainingId){
            Alert.confirmation(this.$i18n.t('msg-con1'))//"Confirmez l'envoi de cette demande SVP!"
                .then((response) => {
                    if (response.isConfirmed) {
                        // Envoie de requête Ajax pour créer demande :
                        let dataToSend = {
                            "status":"initiated",
                            "training_id":trainingId,
                            "user_id":this.user.id
                        }
                        this.envoyerDemand(dataToSend).then(()=>{
                            Alert.success(this.$i18n.t('msg-suc2'));//"Enregistrement effectué avec succès!"
                        })
                        .catch((e)=>{
                            let errorMessage = (Object.values(e.response.data.errors)).join('<br/>');
                            Alert.fail(errorMessage);
                        })
                    }
                });
        }
    },
    mounted(){
        this.getTrainings();
    }
}
</script>