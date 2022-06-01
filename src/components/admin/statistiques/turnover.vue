<template>
    <div class="container">
        <loader v-if="loading"></loader>
        <div class="w-50">
            <div class="text-center my-5 alert alert-info">
                <h3 class="text-success">
                    {{ $i18n.t('tot-orders') }} : {{total.toFixed(2)}} CAD
                </h3>
            </div>
            <table class="table table-striped">
                <tr>
                    <th>{{ $i18n.t('title') }}</th>
                    <th>{{ $i18n.t('price-ttc') }}</th>
                </tr>
                <template v-for="order in orders">
                    <tr :key="order.id" class="table-primary">
                        <td>{{order.training.title}}</td>
                        <td>{{order.estimate.price.toFixed(2)}}</td>
                    </tr>
                </template>
            </table>
        </div>
    </div>
</template>

<script>
import Api from "@/libraries/Api";
import Alert from "@/libraries/Alert";
import loader from "@/components/loader";
export default {
    name: "turnover",
    components: {
        loader
    },
    data(){
        return{
            orders:[],
            total:0,
            loading: true
        }
    },
    mounted(){
        Api.get('/api/order').then((response) => {
            this.orders = response.data;
            this.orders.forEach(order=>{
                this.total += order.estimate.price;
            })
        })
            .catch(() => {
                Alert.fail(this.$i18n.t('msg-err4'));//"Une erreur s'est produite, veuillez re-essayer plus tard !"
            })
            .finally(()=>{
                this.loading = false;
            })
    }
}
</script>
