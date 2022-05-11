<template>
    <div>
        <h1 class="text-center">trainings</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "Trainings",
    methods:{
        ...mapActions('core/training', {
            getTrainings: 'getTrainings',
        })
    },
    mounted(){
        this.getTrainings();
    }
}
</script>
