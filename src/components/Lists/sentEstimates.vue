<template>
    <div class="container w-50">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-3') }}</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-4') }}</th>
                        <th scope="col">{{ $i18n.t('price') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                    </tr>
                </thead>
                <tbody class="border-bottom border-success">
                    <tr v-for="sent_estimate, index in sent_estimates" :key="index">
                        <td>{{sent_estimate.demands[0].training.title}}</td>
                        <td>{{sent_estimate.demands[0].user.first_name}} {{sent_estimate.demands[0].user.last_name}}</td>
                        <td>${{sent_estimate.price}}</td>
                        <td>{{ $i18n.t(sent_estimate.demands[0].estimate.status) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "sentEstimates",
    computed: {
        ...mapState('core/estimate', [
            'sent_estimates'
        ]),
    }
}
</script>
