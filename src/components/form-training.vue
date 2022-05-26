<template>
    <div class="container">
        <form >
            <div class="titre-principal">{{ $i18n.t('publish-t') }}</div>
            <div class="row">
                <div class="col-sm-6">
                    <label class="col-sm-2">{{ $i18n.t('category') }}</label>
                    <select class="form-select form-select-rsf" name="categorie" v-model="categorie">
                        <option v-for="category, index in categories" :key="index" :value="category.id">
                            {{category.title}}
                        </option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label class="col-sm-2">{{ $i18n.t('title') }}</label>
                    <input type="text" class="form-control" name="titre" v-model="titre">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-sm-2">{{ $i18n.t('description') }}</label>
                    <textarea class="form-control" v-model="description" name="description"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="me-2" name="thumbnail">{{ $i18n.t('thumbnail') }}</label>
                    <input type="file" name="tumbnail" accept="image/*" ref="file">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">
                    <label class="col-sm-2">{{ $i18n.t('level') }}</label>
                    <select class="form-select form-select-rsf" v-model="niveau" name="niveau">
                        <option value="junior">{{ $i18n.t('junior') }}</option>
                        <option value="middle">{{ $i18n.t('middle') }}</option>
                        <option value="senior">{{ $i18n.t('senior') }}</option>
                    </select>
                </div>
                <div class="col-sm-4">
                    <label class="">{{ $i18n.t('duration') }}</label>
                    <input type="number" name="duree" class="form-control" v-model="duree">
                </div>
                <div class="col-sm-3">
                    <label class="">{{ $i18n.t('price') }}</label>
                    <input type="number" name="price" class="form-control" v-model="price">
                </div>
            </div>
            <div class="row form-floating">
                <div>
                    <label class="col-3">{{ $i18n.t('language') }}</label>
                    <div>
                        <input class="col-3 form-check-input" type="radio" name="language" value="french" v-model="language">
                        <label class="col-3 form-check-label" for="french">{{ $i18n.t('french') }}</label>

                        <input class="col-3 form-check-input" type="radio" name="language" value="english" v-model="language">
                        <label class="col-3 form-check-label" for="english">{{ $i18n.t('english') }}</label>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div>
                    <input class="col-sm-2 form-check-input" type="radio" name="location" value="domicile" v-model="domicile">
                    <label class="col-sm-3 form-check-label" for="domicile">{{ $i18n.t('loc-1') }}</label>
                    
                    <input class="col-sm-2 form-check-input" type="radio" name="location" value="autre" v-model="domicile">
                    <label class="col-sm-3 form-check-label" for="autre">{{ $i18n.t('loc-2') }}</label>

                    <input class="col-sm-2 form-check-input" type="radio" name="location" value="distance" v-model="domicile">
                    <label class="col-sm-4 form-check-label" for="distance">{{ $i18n.t('loc-3') }}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <label class="col-sm-2">{{ $i18n.t('address') }}</label>
                    <input type="text" :placeholder="$i18n.t('address')+'Pour option Autre - For option Other'" name="location" class="form-control" v-model="adresse">
                </div>
            </div>
            <button type="submit" class="btn" @click.prevent="enregistrerTraining()">{{ $i18n.t('submit') }}</button>
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
            categorie: null,
            titre: '',
            description: '',
            niveau: '',
            domicile: '',
            adresse: '',
            duree: null,
            price: null,
            language: 'french'
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
                'language': this.language,
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