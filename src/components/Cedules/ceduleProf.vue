
<template>
    <div class="container">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-5') }}</div>
            <div class="list-group">
                <a v-for="training, index in sessionsByProf" :key="index" href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h3 class="mb-1 text-center">{{training.title}}</h3>
                    </div>
                    <div>
                        <table class="table">
                            <tr>
                                <th>{{ $i18n.t('date') }}</th>
                                <th>{{ $i18n.t('start-hh') }}</th>
                                <th>{{ $i18n.t('end-hh') }}</th>
                                <th>{{ $i18n.t('name') }}</th>
                            </tr>
                            <tr v-for="session, indice in training.sessions" :key="index + indice">
                                <td>{{ moment(session.start).format('YYYY-MM-DD') }}</td>
                                <td>{{ moment(session.start).format('HH:mm')}}</td>
                                <td>{{ moment(session.end).format('HH:mm') }}</td>
                                <td>{{session.user.first_name}} {{session.user.last_name}} </td>
                            </tr>
                        </table>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";
import moment     from 'moment';
export default {
    computed: {
        ...mapState('core/cedule', [
            'sessionsByProf'
        ])
    },
    name: "ceduleProf",
    methods:{
        /**
         * Define moment to use it in template
         */
        moment,
    }
}

</script>