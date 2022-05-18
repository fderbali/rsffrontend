<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-50">
            <div class="col align-self-center">
                <table class="table">
                    <thead>
                        <h2>Liste des demandes reçues</h2>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Satut</th>
                            <th scope="col">Formation id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="received_demand, index in received_demands" :key="index">
                            <th scope="row">{{ index }}</th>
                            <td>{{received_demand.status}}</td>
                            <td>{{received_demand.training_id}}</td>
                            <td>
                                <button class="btn btn-success" @click.prevent="acceptDemand()">Accepter</button>
                                &nbsp;&nbsp;
                                <button class="btn btn-danger">Refuser</button>
                            </td>
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
    data(){
        return{

        }
    },
    computed: {
        ...mapState('core/demand', [
            'received_demands'
        ]),
    },
    name: "listReceivedDemands",
    methods:{
        acceptDemand(){
            
        }
    }
}
</script>
