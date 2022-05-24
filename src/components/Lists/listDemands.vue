<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-30">
            <div class="col align-self-center">
                <table class="table mt-5">
                    <thead>
                        <h2 classe="titre-principale">{{ $i18n.t('title-1') }}</h2>
                        <tr>
                            <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-2') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="demand, index in demands" :key="index">
                            <td>{{demand.training_id}}</td>
                            <td></td>
                            <!-- <td>{{training.user_id}}</td> -->
                            <td>{{demand.status}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState('core/demand', [
            'demands'
        ]),
    },
    name: "listDemands"
}
</script>