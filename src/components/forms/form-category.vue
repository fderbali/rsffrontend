<template>
    <div class="container">
        <form >
            <div class="titre-principal">{{ $i18n.t('title-9') }}</div>
            <div class="row">
                <div class="">
                    <label class="">{{ $i18n.t('category') }}</label>
                    <input type="text" class="form-control" name="category" v-model="category">
                </div>
            </div>
            <button type="submit" class="btn" @click.prevent="enregistrerCategory()">{{ $i18n.t('submit') }}</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import router from "@/libraries/VueRouter";
import Alert from "@/libraries/Alert";
export default {
    name: "form-category",
    data(){
        return{
            category: null,
        }
    },
    computed:{
        ...mapState('core/category', [
            'categories'
        ]),
    },
    methods:{
        ...mapActions('core/category', {
            saveCategory: 'saveCategory'
        }),
        
        enregistrerCategory(){
            let formCategory = {
                category: this.category,
            };
            this.saveCategory(formCategory).then(()=>{
                Alert.success(this.$i18n.t('msg-suc2')) //"Enregistrement effectué avec succès!",
                router.push({
                    name: 'home'
                });
            })
            .catch((e)=>{
                let errorMessage = '';
                (Object.values(e.response.data.errors)).forEach((element)=>{
                    errorMessage = element + '<br>';
                });
                Alert.fail(errorMessage);
            })
        }
    },
    // mounted(){
    //     this.getCategories().catch(()=>{
    //         Alert.fail(this.$i18n.t('msg-err1'));//"Une erreur s'est produite, veuillez actualiser la page SVP!"
    //     });
    // }
}
</script>