<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-30">
            <div class="col align-self-center">
                <table class="table">
                    <thead>
                        <h4>Liste des demandes envoyées</h4>
                        <tr>
                            <th scope="col">Titre de la formation</th>
                            <th scope="col">Enseignant</th>
                            <th scope="col">Satut</th>
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