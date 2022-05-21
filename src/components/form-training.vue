<template>
    <div class="container d-flex align-items-center justify-content-center">
        <form class="p-4 w-4 fs-5 fw-bold border border-danger rounded bg-warning bg-opacity-50">
            <h1 class="pb-3 fw-bold text-center titre-principal">{{ $i18n.t('publish-t') }}</h1>
            <div class="row">
                <div class="col-sm-6">
                    <label class="col-sm-2 col-form-label">{{ $i18n.t('category') }}</label>
                    <select class="form-select border-danger" name="categorie" v-model="categorie">
                        <option v-for="category, index in categories" :key="index" :value="category.id">
                            {{category.title}}
                        </option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label class="col-sm-2 col-form-label">{{ $i18n.t('title') }}</label>
                    <input type="text" class="form-control border-danger" name="titre" v-model="titre">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-sm-2 col-form-label">{{ $i18n.t('description') }}</label>
                    <textarea class="form-control border-danger" v-model="description" name="description"></textarea>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-12">
                    <label class="col-form-label" name="thumbnail">{{ $i18n.t('thumbnail') }}</label>
                    <input type="file" name="tumbnail" accept="image/*" ref="file">
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-sm-4">
                    <label class="col-sm-2 col-form-label">{{ $i18n.t('level') }}</label>
                    <select class="form-select border-danger" v-model="niveau" name="niveau">
                        <option value="junior">{{ $i18n.t('junior') }}</option>
                        <option value="middle">{{ $i18n.t('middle') }}</option>
                        <option value="senior">{{ $i18n.t('senior') }}</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label">{{ $i18n.t('duration') }}</label>
                    <input type="number" name="duree" class="form-control border-danger" v-model="duree">
                </div>
                <div class="col-sm-2">
                    <label class="col-form-label">{{ $i18n.t('price') }}</label>
                    <input type="number" name="price" class="form-control border-danger" v-model="price">
                </div>
            </div>
            <div class="row mt-1">
                <div>
                <label class="mt-1 col-2 col-form-label">{{ $i18n.t('location') }}</label>
                    <input class="col-sm-3 mt-3 form-check-input border-danger" type="radio" name="location" value="true" v-model="domicile">
                    <label class="col-sm-3 form-check-label border-danger" for="domicile">{{ $i18n.t('loc-1') }}
                        &nbsp;&nbsp;&nbsp;
                    </label>
                    <input class="col-sm-2 mt-3 form-check-input border-danger" type="radio" value="false" name="location" v-model="domicile">
                    <label class="col-sm-3 form-check-label border-danger" for="autre">{{ $i18n.t('loc-2') }}
                    </label>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-sm-12">
                    <label class="col-sm-2 col-form-label">{{ $i18n.t('address') }}</label>
                    <input type="text" name="location" class="form-control border-danger" v-model="adresse">
                </div>
            </div>
            <br>
            <button type="submit" class="btn btn-success border-danger w-100 btn-lg opacity-75" @click.prevent="enregistrerTraining()">{{ $i18n.t('submit') }}</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import router from "@/libraries/VueRouter";
import Alert from "@/libraries/Alert";
export default {
    name: "form-training",
    data(){
        return{
            categorie: 1,
            titre: '',
            description: '',
            niveau: '',
            domicile: false,
            adresse: '',
            duree: 5,
            price: null
        }
    },
    computed:{
        ...mapState('core/auth', [
            'user'
        ]),
        ...mapState('core/category', [
            'categories'
        ]),
    },
    methods:{
        ...mapActions('core/training', {
            saveTraining: 'saveTraining'
        }),
        ...mapActions('core/category', {
            getCategories: 'getCategories'
        }),
        enregistrerTraining(){
            let formTraining = {
                'categorie': this.categorie,
                'titre': this.titre,
                'description': this.description,
                'niveau': this.niveau,
                'domicile': this.domicile,
                'adresse':this.adresse,
                'duree':this.duree,
                'user_id': this.user.id,
                'thumbnail': this.$refs.file.files[0],
                'price': this.price,
            };
            this.saveTraining(formTraining).then(()=>{
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
    mounted(){
        this.getCategories().catch(()=>{
            Alert.fail(this.$i18n.t('msg-err1'));//"Une erreur s'est produite, veuillez actualiser la page SVP!"
        });
    }
}
</script>