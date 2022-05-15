<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-50">
            <div class="col align-self-center">
                <form class="p-5">
                    <h2 class="pb-3 text-center titre-principal">Publier formation</h2>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Catégorie</label>
                        <div class="col-sm-10">
                            <select class="form-select" name="categorie" v-model="categorie">
                                <option v-for="category, index in categories" :key="index" :value="category.id">
                                    {{category.title}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Titre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="titre" v-model="titre">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" v-model="description" name="description"></textarea>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" name="thumbnail">Thumbnail</label>
                        <div class="col-sm-10">
                            <input type="file" name="tumbnail" accept="image/*" ref="file">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Niveau</label>
                        <div class="col-sm-10">
                            <select class="form-select" v-model="niveau" name="niveau">
                                <option value="junior">Débutant</option>
                                <option value="middle">Intermédiaire</option>
                                <option value="senior">Avancé</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Lieu</label>
                        <div class="col-sm-10">
                            <div>
                                <input class="form-check-input" type="radio" name="location" value="true" v-model="domicile">
                                <label class="form-check-label" for="domicile">
                                    &nbsp;Domicile
                                </label>
                            </div>
                            <div>
                                <input class="form-check-input" type="radio" value="false" name="location" v-model="domicile">
                                <label class="form-check-label" for="autre">
                                    &nbsp;Autre
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Adresse</label>
                        <div class="col-sm-10">
                            <input type="text" name="location" class="form-control" v-model="adresse">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Durée totale</label>
                        <div class="col-sm-10">
                            <input type="text" name="duree" class="form-control" v-model="duree">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-5" @click.prevent="enregistrerTraining()">Soumettre</button>
                </form>
            </div>
        </div>
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
            domicile: true,
            adresse: '',
            duree: 5,
            tumbnail: null
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
                'thumbnail': this.$refs.file.files[0]
            };
            this.saveTraining(formTraining).then(()=>{
                router.push({
                    name: 'home'
                });
            });
        }
    },
    mounted(){
        this.getCategories().catch(()=>{
            Alert.fail("Une erreur s'est produite sur la page, veuillez actualiser la page SVP !");
        });
    }
}
</script>