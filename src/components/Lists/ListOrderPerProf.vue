<template>
    <div class="container">
        <div class="w-50">
            <div class="titre-principal">{{ $i18n.t('title-8') }}</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                        <th scope="col">{{ $i18n.t('price') }} </th>
                        <th scope="col">{{ $i18n.t('ss-title-4') }}</th>
                        <th scope="col">{{ $i18n.t('ss-title-5') }}</th>
                    </tr>
                </thead>
                <tbody class="border-bottom border-success">
                    <template v-for="orders_by_training in orders">
                        <tr v-for="order in orders_by_training.orders" :key="order.id">
                            <td>{{orders_by_training.title}}</td>
                            <td>{{orders_by_training.price}}</td>
                            <td>{{order.estimate.demand.user.first_name}} {{order.estimate.demand.user.last_name}} </td>
                            <td><a :href="`/form-session?order=${order.id}`" class="btn btn-outline-success b-2 fw-bold">Céduler les sessions</a></td>
                        </tr>
                    </template>
                </tbody>
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
