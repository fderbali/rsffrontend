<template>
    <div class="container d-flex align-items-center justify-content-center ">
        <div class="row w-60">
            <div class="col align-self-center">
                <table class="table">
                    <thead>
                        <h4> {{ $i18n.t('title-2') }}</h4>
                        <tr>
                            <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-4') }} </th>
                            <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="received_demand, index in received_demands" :key="index">
                            <td>{{received_demand.training_id}}</td>
                            <td>{{received_demand.user_id}}</td>
                            <td>{{received_demand.status}}</td>
                            <td v-if="received_demand.status == 'initiated'">
                                <button class="btn btn-sm btn-outline-success fw-bolder" @click.prevent="updateDemandStatus(received_demand, true, )">
                                {{ $i18n.t('msg-con2') }}</button>
                                &nbsp;&nbsp;
                                <button class="btn btn-sm btn-outline-danger fw-bolder" @click.prevent="updateDemandStatus(received_demand, false)">
                                {{ $i18n.t('msg-con3') }}</button>
                            </td>
                            <td v-else>
                                &nbsp;-------- --------
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Alert from "@/libraries/Alert.js";
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('core/demand', [
            'received_demands'
        ]),
    },
    name: "listReceivedDemands",
    methods: {
        ...mapActions('core/demand', [
            'updateDemand'
        ]),
        updateDemandStatus(received_demand, decision) {
            this.updateDemand({
                id: received_demand.id,
                training_id: received_demand.training_id,
                user_id: received_demand.user_id,
                decision: decision,
            })
                .then(() => {
                    Alert.success('status de la demande mis à jour');
                })
                .catch(() => {
                    Alert.fail('Problème avec la mise à jour');
                });
        }
    }
}
</script>
