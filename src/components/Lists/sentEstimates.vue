<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-30">
            <div class="col align-self-center">
                <table class="table">
                    <thead>
                        <h4> {{ $i18n.t('title-3') }}</h4>
                        <tr>
                            <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-2') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="sent_estimate, index in sent_estimates" :key="index">
                            <!-- {{sent_estimate}} -->
                            <!-- <td>{{sent_estimate.training.title}}</td> -->
                            <!-- <td>{{demand.user.first_name}}</td> -->
                            <td></td>
                            <!-- <td>{{training.user_id}}</td> -->
                            <!-- <td>{{demand.status}}</td> -->
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
