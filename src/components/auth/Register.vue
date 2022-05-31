<template>
    <div class="container">
        <form>
            <div class="titre-principal">{{ $i18n.t('register') }}</div>
            <div class="row">
                <div class="col-6">
                    <label>{{ $i18n.t('first-name') }}</label>
                    <input type="text" class="form-control"  name="first_name" v-model="first_name">
                </div>
                <div class="col-6">
                    <label>{{ $i18n.t('last-name') }}</label>
                    <input type="text" class="form-control" name="last_name" v-model="last_name"> 
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-6">
                    <label>{{ $i18n.t('birth-date') }}</label>
                    <input type="date" class="form-control" name="birth_date" v-model="birth_date">
                </div>
                <div class="col-6">
                    <label>{{ $i18n.t('communication') }}</label>
                    <div>
                        <input class="col-4 form-check-input" type="radio" name="communication" value="french" v-model="communication">
                        <label class="col-4 form-check-label mt-0">{{ $i18n.t('french') }}</label>
                    </div>
                    <div>
                        <input class="col-4 form-check-input" type="radio" name="communication" value="english" v-model="communication">
                        <label class="col-4 form-check-label mt-0">{{ $i18n.t('english') }}</label>
                    </div>
                </div>
            </div>
            <div>
                <label>{{ $i18n.t('email') }}</label>
                <input type="email" class="form-control" name="email" v-model="email">
            </div>
            <div class="row mt-2">
                <div class="col-6">
                    <label>{{ $i18n.t('pw') }}</label>
                    <input type="password" class="form-control" name="password" v-model="password">
                </div>
                <div class="col-6">
                    <label>{{ $i18n.t('pw-again') }}</label>
                    <input type="password" class="form-control" name="password">
                </div>
            </div>    
            <div class="mt-2">
                <label>{{ $i18n.t('address') }}</label>
                <input type="text" name="location" class="form-control" v-model="address">
            </div>
            <div class="mt-2">
                <label>{{ $i18n.t('city') }}</label>
                <input type="text" name="city" class="form-control" v-model="city"> 
            </div>
            <div class="row mt-2">
                <div class="col-6">
                    <label>{{ $i18n.t('country') }}</label>
                    <input type="text" name="country" class="form-control" v-model="country">
                </div>  
                <div class="col-6">
                    <label>{{ $i18n.t('zip-code') }}</label>
                    <input type="text" name="zip_code" class="form-control" v-model="zip_code">
                </div>
            </div>
            <div>
                <button type="submit" class="btn" @click.prevent="enregistrerUser()">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                    {{ $i18n.t('submit') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Alert from '@/libraries/Alert.js';
import router from "@/libraries/VueRouter";

export default {
    name: "Register",
    data(){
        return {
            first_name:null,
            last_name:null,
            email:null,
            birth_date:null,
            langue:null,
            address:null,
            city:null,
            zip_code:null,
            country:null,
            password:null,
            loading: false,
            communication: 'french'
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
                langue:this.langue,
                address:this.address,
                city:this.city,
                zip_code:this.zip_code,
                country:this.country,
                password:this.password,
                communication:this.communication
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
