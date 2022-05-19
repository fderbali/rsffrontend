<template>
    <div class="container d-flex align-items-center justify-content-center ">
        <div class="row w-60">
            <div class="col align-self-center">
                <table class="table">
                    <thead>
                        <h4>Liste des demandes reçues</h4>
                        <tr>
                            <th scope="col">Titre de la formation</th>
                            <th scope="col">Participant</th>
                            <th scope="col">Satut</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="received_demand, index in received_demands" :key="index">
                            <td>{{received_demand.user_id}}</td>
                            <td>{{received_demand.training_id}}</td>
                            <td>{{received_demand.status}}</td>
                            
                            <td v-if="received_demand.status == 'initiated'">
                                <button class="btn btn-sm btn-outline-success fw-bolder" @click.prevent="updateDemandStatus(received_demand, true, )">Accepter</button>
                                &nbsp;&nbsp;
                                <button class="btn btn-sm btn-outline-danger fw-bolder" @click.prevent="updateDemandStatus(received_demand, false)">Refuser</button>
                            </td>
                            <td v-else>
                                &nbsp;--------
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
