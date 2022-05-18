<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-50">
            <div class="col align-self-center">
                <table class="table bg-warning bg-opacity-50">
                    <thead>
                        <h2>Liste des demandes envoyées</h2>
                        <tr>
                            <th scope="col">Titre</th>
                            <th scope="col">Satut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="demand, index in demands" :key="index">
                            <td>{{demand.training_id}}</td>
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