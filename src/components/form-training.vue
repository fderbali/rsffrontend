<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-50">
            <div class="col align-self-center">
                <form class="p-5">
                    <h2 class="pb-3 text-center titre-principal">Publier formation</h2>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Catégorie</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="categorie" v-model="categorie">
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
                            <input type="file" name="tumbnail">
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
                    <button type="submit" class="btn btn-primary mb-5" @click.prevent="enregistrerCategorie()">Soumettre</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "form-training",
    data(){
        return{
            categorie: 1,
            titre: 'jardinage',
            description: 'desc',
            niveau: 'middle',
            domicile: true,
            adresse: '',
            duree: 5
        }
    },
    computed:{
        ...mapState('core/auth', [
            'user'
        ]),
    },
    methods:{
        ...mapActions('core/training', {
            saveTraining: 'saveTraining'
        }),
        enregistrerCategorie(){
            let formTraining = {
                'categorie': this.categorie,
                'titre': this.titre,
                'description': this.description,
                'niveau': this.niveau,
                'domicile': this.domicile,
                'adresse':this.adresse,
                'duree':this.duree,
                'user_id': this.user.id
            };
            this.saveTraining(formTraining).then(()=>{
                console.log('je passe apres le call ajax');
            });
        }
    }
}
</script>