
<template>
    <body>
        <div class="container">
            <div class="row">
                <div class="col" v-for="training, index in trainings" :key="index+currentPage">
                    <div class="card">
                        <img :src="`http://rsfbackend.test/images/${training.thumbnail}`" class="card-img-top" alt="image">
                        <div class="card-header">
                            <h5>{{ training.title }}</h5>
                        </div>
                        <div class="card-title">
                            <a class="btn" data-bs-toggle="collapse" :href="'#collapseOne'+index+currentPage">
                            <h5>{{ $i18n.t('informations') }}</h5></a>
                            <div :id="'collapseOne'+index+currentPage" class="collapse card-body" data-bs-parent="#accordion" aria-haspopup="true">
            
                                <div>{{ training.description }}</div>
                                <div>{{ $i18n.t('by') }} : {{ training.user.first_name }} {{ training.user.last_name }}</div>
                                <div>{{ $i18n.t('language') }} : {{ $i18n.t('french') }}</div>
                                <div>{{ $i18n.t('duration') }} : {{ training.total_duration }} Heures</div>
                                <div>{{ $i18n.t('price') }} : {{ training.price }}$</div>
                                <div>{{ $i18n.t('location') }} :
                                    <span v-if="training.location=='domicile'">{{ $i18n.t('loc-1') }}</span>
                                    <span v-else-if="training.location=='distance'">{{ $i18n.t('loc-3') }}</span>
                                    <a v-else target="_blank" :href="`https://www.google.ca/maps/place/${training.location}`">
                                        <font-awesome-icon :icon="['fas', 'map-marker']" class="icon alt"/>
                                    </a>
                                </div>
                            </div>
                            <div class="card-footer" v-if="user && !training.demands.length">
                                <a class="btn-rsf" @click.prevent="sendDemand(training.id)">{{ $i18n.t('do-demand') }}</a>
                            </div>
                            <div class="card-footer" v-else-if="user && training.demands[0].status === 'initiated'">
                                <a class="btn-rsf">{{ $i18n.t('en-cours') }}</a>
                            </div>
                            <div class="card-footer" v-else-if="user && training.demands[0].status === 'confirmed'">
                                <a class="btn-rsf">{{ $i18n.t('confirmed') }}</a>
                            </div>
                            <div class="card-footer" v-else-if="user && training.demands[0].status === 'cancelled'">
                                <a class="btn-rsf">{{ $i18n.t('cancelled') }}</a>
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
        <loader v-if="loading"></loader>
    </body>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Alert from "@/libraries/Alert.js";
import loader from "@/components/loader";
import { EventBus } from "@/libraries/EventBus.js";
export default {
    name: 'Home',
    components:{
        loader,
    },
    computed: {
        ...mapState('core/training', [
            'trainings', 'trainingsLinks'
        ]),
        ...mapState('core/auth', [
            'user'
        ])
    },
    data() {
        return {
            loading: false,
            currentPage : 1,
            searchString: ''
        }
    },
    methods: {
        ...mapActions('core/training', {
            getTrainings: 'getTrainings',
            getTrainingByPage: 'getTrainingByPage',
            searchTrainings: 'searchTrainings'
        }),
        ...mapActions('core/demand', {
            envoyerDemand: 'envoyerDemand'
        }),
        sendDemand(trainingId){
            Alert.confirmation(this.$i18n.t('msg-con1'),'', this.$i18n.t('msg-yes'))    //"Confirmez l'envoi de cette demande SVP! Oui"
                .then((response) => {
                    if (response.isConfirmed) {
                        this.loading = true;
                        // Envoie de requête Ajax pour créer demande :
                        let dataToSend = {
                            "status":"initiated",
                            "training_id":trainingId,
                            "user_id":this.user.id
                        }
                        this.envoyerDemand(dataToSend).then(()=>{
                            Alert.success(this.$i18n.t('msg-suc2')) //"Enregistrement effectué avec succès!"
                            this.goToPage(this.currentPage);
                        })
                        .catch((e)=>{
                            let errorMessage = (Object.values(e.response.data.errors)).join('<br/>');
                            Alert.fail(errorMessage);
                        })
                        .finally(()=>{
                            this.loading = false;
                        })
                    }
                });
        },
        goToPage(page){
            this.currentPage = page;
            this.getTrainingByPage({page});
        },
        serach(){
            if(this.searchString.length) {
                this.loading = true;
                this.searchTrainings(this.searchString).then(() => {

                })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                Alert.fail('Veuillez saisir au moins un mot pour la recherche !');
            }
        }
    },
    mounted(){
        this.getTrainings();
    },
    created(){
        EventBus.$on('recherche', (payload) => {
            this.searchString = payload;
            this.serach();
        });
    }
}
</script>