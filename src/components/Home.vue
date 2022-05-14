<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="training, index in trainings" :key="index">
                    <div class="card" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ training.title }}</h5>
                            <p class="card-text">{{ training.description }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Home',
    computed: {
        ...mapState('core/training', [
            'trainings'
        ]),
    },
    methods: {
        ...mapActions('core/training', {
            getTrainings: 'getTrainings'
        }),
    },
    mounted(){
        this.getTrainings().then(()=>{
            console.log("appel ajax terminé ");
        })
    }
}
</script>