<template>
    <div class="container">
        <h1>
            Received estimates
        </h1>
        <ul class="list-group">
            <li v-for="received_estimate, index in received_estimates" :key="index" class="list-group-item">
                <p>Prix : {{received_estimate.estimate.price}}</p>
                <p>Formation : {{received_estimate.training.title}}</p>
                <p><a href="" class="btn btn-success" @click.prevent="payEstimate(received_estimate)">Payer</a></p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from "@/libraries/VueRouter";
export default {
    name: "listReceivedEstimates",
    computed:{
        ...mapState('core/estimate', [
            'received_estimates'
        ]),
    },
    methods:{
        ...mapActions('core/estimate', [
            'getEstimate']
        ),
        payEstimate(received_estimate){
            this.getEstimate(received_estimate.id).then(()=>{
                router.push({
                    name: 'checkout'
                });
            });
        }
    }
}
</script>