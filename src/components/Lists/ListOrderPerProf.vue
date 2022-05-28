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
                <tr v-for="order, index in orders" :key="index">
                    <td>{{order.title}}</td>
                    <td>{{order.price}}</td>
                    <td>{{order.orders[0].estimate.demand.user.first_name}} {{order.orders[0].estimate.demand.user.last_name}} </td>
                    <td><a :href="`/form-session?order=${order.orders[0].id}`" class="btn btn-success border-danger">Céduler les sessions</a></td>
                </tr>
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
