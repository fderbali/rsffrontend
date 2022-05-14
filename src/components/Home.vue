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
        <div class="container d-flex align-items-center justify-content-center p-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <!--li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li-->
                    <li class="page-item" v-for="trainingsLink, index in trainingsLinks" :key="index">
                        <a class="page-link" href="#">
                            {{ trainingsLink.label }}
                        </a>
                    </li>
                    <!--li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li-->
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Home',
    computed: {
        ...mapState('core/training', [
            'trainings', 'trainingsLinks'
        ]),
    },
    methods: {
        ...mapActions('core/training', {
            getTrainings: 'getTrainings'
        }),
    },
    mounted(){
        this.getTrainings();
    }
}
</script>