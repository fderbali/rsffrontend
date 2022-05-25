<template>
    <div class="container d-flex align-items-center justify-content-center fs-5">
        <div class="row w-30">
            <div class="col align-self-center">
                <table class="table mt-5">
                    <thead>
                        <h2 class="titre-principal mb-5">{{ $i18n.t('title-2') }}</h2>
                        <tr>
                            <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-4') }} </th>
                            <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="received_demand, index in received_demands" :key="index">
                        <!-- {{received_demand}} -->
                            <td>{{received_demand.title}}</td>
                            <td>{{received_demand.demands[0].user.first_name}} {{received_demand.demands[0].user.last_name}}</td>
                            <td>{{received_demand.demands[0].status}}</td>
                            <td v-if="received_demand.demands[0].status == 'initiated'">
                                <button class="btn btn-sm btn-outline-success fw-bolder" @click.prevent="updateDemandStatus(received_demand, true, )">
                                {{ $i18n.t('msg-con2') }}</button>
                                &nbsp;&nbsp;
                                <button class="btn btn-sm btn-outline-danger fw-bolder" @click.prevent="updateDemandStatus(received_demand, false)">
                                {{ $i18n.t('msg-con3') }}</button>
                            </td>
                            <td v-else>
                                &nbsp;--------
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <loader v-if="loading"></loader>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Alert from "@/libraries/Alert.js";
import loader from "@/components/loader"
export default {
    data() {
        return {
            loading: false,
        }
    },
    components: {
        loader
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
            this.loading = true;
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
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    }
}
</script>
