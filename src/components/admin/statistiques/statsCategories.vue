<template>
    <div class="container">
        <loader v-if="loading"></loader>
        <div class="w-50">

        </div>
    </div>
</template>

<script>
import Api from "@/libraries/Api";
import Alert from "@/libraries/Alert";
import loader from "@/components/loader";
export default {
    name: "statsCategories",
    components: {
        loader
    },
    data(){
        return{
            loading: true
        }
    },
    mounted(){
        Api.get('/api/stats-categories').then((response) => {
            console.log(response.data)
        })
            .catch(() => {
                Alert.fail("Une erreur s'est produite, veuillez re-essayer plus tard !");
            })
            .finally(()=>{
                this.loading = false;
            })
    }
}
</script>
