<template>
    <div class="container">
        <div class="container d-flex align-items-center justify-content-center fs-5">
            <div class="row w-30">
                <div class="col align-self-center">
                    <table class="table mt-5">
                        <thead>
                            <h2 class="mb-5 titre-principal item-align-center">{{ $i18n.t('title-4') }}</h2>
                            <tr>
                                <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                                <th scope="col">{{ $i18n.t('ss-title-2') }}</th>
                                <th scope="col">{{ $i18n.t('price') }}</th>
                                <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                                <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                            </tr>
                        </thead>
                        <tbody class="border-bottom border-success">
                            <tr v-for="received_estimate, index in received_estimates" :key="index">
                                <!-- {{sent_estimate}} -->
                                <td>{{received_estimate.training.title}}</td>
                                <td>{{received_estimate.training.user.first_name}} {{received_estimate.training.user.last_name}}</td>
                                <td>{{received_estimate.estimate.price}}$</td>
                                <td>xxxxxx</td>
                                <td><a href="" class="btn btn-outline-success" @click.prevent="payEstimate(received_estimate)">{{ $i18n.t('pay') }}</a></td>
                                <td><a href="" class="btn btn-outline-danger">{{ $i18n.t('cancel') }}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "listReceivedEstimates",
    computed:{
        ...mapState('core/estimate', [
            'received_estimates'
        ]),
    },
    methods:{
        payEstimate(received_estimate){
            console.log(received_estimate);
        }
    }
}
</script>