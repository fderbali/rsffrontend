<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="training, index in trainings" :key="index">
                    <div class="card" style="width: 18rem;">
                        <img :src="`http://rsfbackend.test/images/${training.thumbnail}`" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ training.title }}</h5>
                            <p class="card-text">{{ training.description }}</p>
                            <a href="#" class="btn btn-success" @click.prevent="sendDemand(training.id)">{{ $i18n.t('do-demand') }}</a>
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
            getTrainings: 'getTrainings',
            getTrainingByPage: 'getTrainingByPage'
        }),
        ...mapActions('core/demand', {
            envoyerDemand: 'envoyerDemand'
        }),
        sendDemand(trainingId){
            Alert.confirmation("Etes vous sûr !", "Vous allez envoyer une demande pour cette formation" ,"Oui")
                .then((response) => {
                    if (response.isConfirmed) {
                        // Envoie de requête Ajax pour créer demande :
                        let dataToSend = {
                            "status":"initiated",
                            "training_id":trainingId,
                            "user_id":this.user.id
                        }
                        this.envoyerDemand(dataToSend).then(()=>{
                            Alert.success("Demande bien envoyé");
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