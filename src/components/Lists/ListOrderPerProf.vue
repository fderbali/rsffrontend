<template>
    <div class="container">
        <div class="w-50">
            <table class="table table-success table-striped">
                <tr>
                    <th>Formation</th>
                    <th>Prix</th>
                    <th>Élève</th>
                    <th>&nbsp;</th>
                </tr>
                <template v-for="orders_by_training in orders">
                    <tr v-for="order in orders_by_training" :key="order.id">
                        <td>{{orders_by_training.title}}</td>
                        <td>{{orders_by_training.price}}</td>
                        <td>{{order.estimate.demand.user.first_name}} {{order.estimate.demand.user.last_name}} </td>
                        <td><a :href="`/form-session?order=${order.id}`" class="btn btn-success border-danger">Céduler les sessions</a></td>
                    </tr>
                </template>
            </table>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "ListOrderPerProf",
    computed: {
        ...mapState('core/order', [
            'orders'
        ])
    }
}
</script>
