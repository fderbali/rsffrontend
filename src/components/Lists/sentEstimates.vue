<template>
    <div class="container d-flex align-items-center justify-content-center fs-5">
        <div class="row w-30">
            <div class="col align-self-center">
                <table class="table mt-5">
                    <thead>
                        <h2 class="mb-5 titre-principal">{{ $i18n.t('title-3') }}</h2>
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
                            <td>{{sent_estimate.price}}$</td>
                            <td>xxxxx</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
