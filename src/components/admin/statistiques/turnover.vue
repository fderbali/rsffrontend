<template>
    <div class="container">
        <loader v-if="loading"></loader>
        <div class="w-40">
            <div class="text-center my-5 alert alert-info border border-success">
                <h3 class="text-success">
                    {{ $i18n.t('tot-orders') }} : ${{total.toFixed(2)}} CAD
                </h3>
            </div>
            <div class="titre-principal text-success mt-5">{{ $i18n.t('title-12') }}</div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>{{ $i18n.t('title') }}</th>
                        <th>{{ $i18n.t('price') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="order in orders">
                        <tr :key="order.id" class="table-primary border-bottom border-success">
                            <td>{{order.training.title}}</td>
                            <td>${{order.estimate.price.toFixed(2)}}</td>
                        </tr>
                    </template>
                </tbody>
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
