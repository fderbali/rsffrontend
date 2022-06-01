<template>
    <div class="container w-50">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-2') }}</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-4') }} </th>
                        <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                    </tr>
                </thead>
                <tbody class="border-bottom border-success">
                    <template v-for="received_demand in received_demands">
                        <tr v-for="demand in received_demand.demands" :key="demand.id">
                            <td>{{received_demand.title}}</td>
                            <td>{{demand.user.first_name}} {{demand.user.last_name}}</td>
                            <td>{{demand.status}}</td>
                            <td v-if="demand.status == 'initiated'">
                                <button class="btn btn-sm btn-outline-success" @click.prevent="updateDemandStatus(received_demand, demand, true, )">
                                {{ $i18n.t('msg-con2') }}</button>
                                &nbsp;&nbsp;
                                <button class="btn btn-sm btn-outline-danger" @click.prevent="updateDemandStatus(received_demand, demand, false)">
                                {{ $i18n.t('msg-con3') }}</button>
                            </td>
                            <td v-else>
                                &nbsp;--------
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
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
        ...mapState('core/auth', [
            'user'
        ])
    },
    name: "listReceivedDemands",
    methods: {
        ...mapActions('core/demand', [
            'updateDemand','getDemandsByTeacher'
        ]),
        updateDemandStatus(received_demand, demand, decision) {
            this.loading = true;
            this.updateDemand({
                id: demand.id,
                training_id: received_demand.training_id,
                user_id: received_demand.user_id,
                decision: decision,
            })
                .then(() => {
                    Alert.success('status de la demande mis à jour');
                    this.getDemandsByTeacher(this.user.id);
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
