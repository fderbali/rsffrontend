<template>
    <div class="container">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-4') }}</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-2') }}</th>
                        <th scope="col">{{ $i18n.t('price') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="border-bottom border-success">
                    <tr v-for="received_estimate, index in received_estimates" :key="index">
                        <td>{{received_estimate.training.title}}</td>
                        <td>{{received_estimate.training.user.first_name}} {{received_estimate.training.user.last_name}}</td>
                        <td>${{received_estimate.estimate.price}}</td>
                        <td>{{ $i18n.t(received_estimate.estimate.status) }}</td>
                        <template v-if="received_estimate.estimate.status == 'pending'">
                            <td><a href="" class="btn btn-outline-success" @click.prevent="payEstimate(received_estimate)">{{ $i18n.t('pay') }}</a></td>
                            <td><a href="" class="btn btn-outline-danger" @click.prevent="cancelTheEstimate(received_estimate)">{{ $i18n.t('cancel') }}</a></td>
                        </template>
                        <template v-else>
                            <td>-----</td>
                            <td>-----</td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from "@/libraries/VueRouter";
import Alert from "@/libraries/Alert";
export default {
    name: "listReceivedEstimates",
    computed:{
        ...mapState('core/estimate', [
            'received_estimates'
        ]),
        ...mapState('core/auth', [
            'user'
        ])
    },
    methods:{
        ...mapActions('core/estimate', [
            'getEstimate','cancelEstimate','getListEstimatesByUser'
        ]),
        payEstimate(received_estimate){
            this.getEstimate(received_estimate.estimate.id).then(()=>{
                router.push({
                    name: 'checkout'
                });
            });
        },
        cancelTheEstimate(received_estimate){
            Alert.confirmation("Etes vous sûr !", "Vous allez annuler le devis" ,"Oui")
                .then((response) => {
                    if(response.isConfirmed) {
                        this.cancelEstimate(received_estimate.estimate.id).then(() => {
                            Alert.success("Devis annulé avec succès");
                            this.getListEstimatesByUser(this.user.id);
                        })
                        .catch(()=>{
                            Alert.fail("Une erreur s'est produite lors de l'annulation du devis");
                        })
                    }
                });
        }
    }
}
</script>