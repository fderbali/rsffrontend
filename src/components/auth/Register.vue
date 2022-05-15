<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row w-50">
            <div class="col align-self-center">
                <form class="p-5">
                    <h2 class="pb-3 text-center titre-principal">Inscription</h2>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Nom</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="first_name" v-model="first_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Prénom</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="last_name" v-model="last_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Date de naissance</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" name="birth_date" v-model="birth_date">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Courriel</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" name="email" v-model="email">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Mot de passe</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" name="password" v-model="password">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Confirmation mot de passe</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" name="password">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Adresse</label>
                        <div class="col-sm-10">
                            <input type="text" name="location" class="form-control" v-model="address">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">City</label>
                        <div class="col-sm-10">
                            <input type="text" name="city" class="form-control" v-model="city">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Country</label>
                        <div class="col-sm-10">
                            <input type="text" name="country" class="form-control" v-model="country">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label">Code postal</label>
                        <div class="col-sm-10">
                            <input type="text" name="zip_code" class="form-control" v-model="zip_code">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-5" @click.prevent="enregistrerUser()">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Alert                    from '@/libraries/Alert.js';
import router from "@/libraries/VueRouter";
//import router from "@/libraries/VueRouter";
export default {
    name: "Register",
    data(){
        return {
            first_name:null,
            last_name:null,
            email:null,
            birth_date:null,
            address:null,
            city:null,
            zip_code:null,
            country:null,
            password:null,
            loading: false
        }
    },
    methods:{
        ...mapActions('core/auth', {
            register: 'register'
        }),
        enregistrerUser(){
            this.loading = true;
            let user = {
                first_name:this.first_name,
                last_name:this.last_name,
                email:this.email,
                birth_date:this.birth_date,
                address:this.address,
                city:this.city,
                zip_code:this.zip_code,
                country:this.country,
                password:this.password
            };
            this.register(user).then(()=>{
                Alert.success("Enregistrement effectué avec succès !");
                router.push({
                    name: 'login'
                });
            })
            .catch((e)=>{
                let errorMessage = (Object.values(e.response.data.errors)).join('<br/>');
                Alert.fail(errorMessage);
            })
            .finally(()=>{
                this.loading = false;
            });
        }
    }
}
</script>
