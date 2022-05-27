<template>
    <div class="container">
        <form>
            <div class="titre-principal">{{ $i18n.t('title-7') }}</div>
            <ul>
                <li>{{ $i18n.t('training') }}:{{ order.training.title }}</li>
                <li>{{ $i18n.t('ss-title-4') }}:{{ order.estimate.demand.user.first_name }} {{ order.estimate.demand.user.last_name }}</li>
                <li>{{ $i18n.t('email') }}:{{ order.estimate.demand.user.email }}</li>
                <img :src="`http://rsfbackend.test/images/${order.training.thumbnail}`" class="card-img-top img-thumbnail w-50" alt="">
            </ul>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-form-label">{{ $i18n.t('date') }}</label>
                    <input type="date" class="form-control" v-model="date">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-form-label">{{ $i18n.t('start-hh') }}</label>
                    <input type="time" class="form-control" v-model="heureDebut">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-form-label">{{ $i18n.t('end-hh') }}</label>
                    <input type="time" class="form-control" v-model="heureFin">
                </div>
            </div>

            <button class="btn" type="submit" @click.prevent="saveSession()">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                {{ $i18n.t('submit') }}
            </button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Alert from "@/libraries/Alert";
export default {
    name: "form-session",
    data(){
        return{
            heureDebut: null,
            heureFin: null,
            date: null,
            loading: false
        }
    },
    computed: {
        ...mapState('core/order', [
            'order'
        ])
    },
    methods:{
        ...mapActions('core/order', {
            getOrder:'getOrder'
        }),
        ...mapActions('core/session', {
            saveSeance: 'saveSeance'
        }),
        saveSession(){
            this.loading = true;
            let dataToSend = {
                training_id: this.order.training.id,
                start: this.date+' '+this.heureDebut,
                end: this.date+' '+this.heureFin,
                user_id: this.order.estimate.demand.user.id,
            };
            this.saveSeance(dataToSend).then(()=>{
                Alert.success(this.$i18n.t('msg-suc3'));//Session enregistrée avec succès ! Vous pouvez enregistrer une autre séance.
                this.heureDebut = null,
                this.heureFin = null,
                this.date = null
            })
            .catch(()=>{
                Alert.fail(this.$i18n.t('msg-err4'));//Une erreur s'est produite! veuillez re-essayer plus tard!
            })
            .finally(()=>{
                this.loading = false;
            })
        }
    },
    mounted(){
        let order_id = this.$route.query.order;
        this.getOrder({order_id})
            .then(()=>{})
            .catch(()=>{
                Alert.fail(this.$i18n.t('msg-err5'));//Erreur de récupération de la commande, veuillez essayer plus tard
            });
    }
}
</script>
