<template>
    <div class="container d-flex align-items-center justify-content-center">
        <main class="fs-5 fw-bold p-4 mb-3 border border-danger rounded bg-warning bg-opacity-50">
            <form>
                <h2 class="pb-3 text-center titre-principal fw-bold">{{ $i18n.t('register') }}</h2>
                <div class="row">
                    <div class="col-6 form-floating pt-3">
                        <div>
                            <label for="floatingInput">{{ $i18n.t('first-name') }}</label>
                            <input type="text" class="form-control border-danger rounded fs-5"  name="first_name" v-model="first_name">
                        </div>
                    </div>
                    <div class="col-6 form-floating pt-3">
                        <div>
                            <label for="floatingInput">{{ $i18n.t('last-name') }}</label>
                            <input type="text" class="form-control border-danger rounded fs-5" name="last_name" v-model="last_name"> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-floating pt-3">
                        <div>
                            <label for="floatingDate">{{ $i18n.t('birth-date') }}</label>
                            <input type="date" class="form-control border-danger rounded fs-5" name="birth_date" v-model="birth_date">
                        </div>
                    </div>
                    <div class="col-7 form-floating pt-3">
                        <div>
                            <label class="col-10 pb-2">{{ $i18n.t('language') }}</label>
                            <div>
                                <input class="col-4 form-check-input border-danger" type="radio" name="langue" value="french" v-model="langue">
                                <label class="col-4 form-check-label border-danger" for="french">{{ $i18n.t('french') }}</label>
                        
                                <input class="col-4 form-check-input border-danger" type="radio" name="langue" value="anglais" v-model="langue">
                                <label class="col-4 form-check-label border-danger" for="english">{{ $i18n.t('english') }}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-floating pt-3">
                    <div>
                        <label for="floatingInput">{{ $i18n.t('email') }}</label>
                        <input type="email" class="form-control border-danger rounded fs-5" name="email" v-model="email">
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-6 form-floating">
                        <div>
                            <label for="floatingPassword">{{ $i18n.t('pw') }}</label>
                            <input type="password" class="form-control border-danger rounded fs-5" name="password" v-model="password">
                        </div>
                    </div>
                    <div class="col-6 form-floating">
                        <div>
                            <label for="floatingPassword">{{ $i18n.t('pw-again') }}</label>
                            <input type="password" class="form-control border-danger rounded fs-5" name="password">
                        </div>
                    </div>
                </div>    
                <div class="form-floating pt-3">
                    <div>
                        <label for="floatingInput">{{ $i18n.t('address') }}</label>
                        <input type="text" name="location" class="form-control border-danger rounded fs-5" v-model="address">
                    </div>
                </div>
                <div class="form-floating pt-3">
                    <div>
                        <label for="floatingInput">{{ $i18n.t('city') }}</label>
                        <input type="text" name="city" class="form-control border-danger rounded fs-5" v-model="city">  
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-6 form-floating">
                        <div>
                            <label for="floatingInput">{{ $i18n.t('country') }}</label>
                            <input type="text" name="country" class="form-control border-danger rounded fs-5" v-model="country">
                        </div>
                    </div>
                    <div class="col-6 form-floating">
                        <div>
                            <label for="floatingInput">{{ $i18n.t('zip-code') }}</label>
                            <input type="text" name="zip_code" class="form-control border-danger rounded fs-5" v-model="zip_code">
                        </div>
                    </div>
                </div>

                <div>
                    <br>
                    <button type="submit" class="btn btn-success border-danger w-100 btn-lg opacity-75 pt-3" @click.prevent="enregistrerUser()">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                        {{ $i18n.t('submit') }}
                    </button>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Alert from '@/libraries/Alert.js';
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
                Alert.success(this.$i18n.t('msg-suc2')) //"Enregistrement effectué avec succès!"
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
