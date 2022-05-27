
<template>
    <div class="container">
        <div class="titre-principal">{{ $i18n.t('title-5') }}</div>
        <div class="row">
            <div class="col-md">
                <h5 class="">{{ $i18n.t('title') }}:</h5>
                <h5 class="">{{ $i18n.t('name') }}:</h5>   
            </div>
            <div>
                <h5 class="">{{ $i18n.t('date') }}:Date:</h5>
                <h5 class="">{{ $i18n.t('start-hh') }}Heure début:</h5>
                <h5 class="">{{ $i18n.t('end-hh') }}Heure fin:</h5>
            </div>
        </div>
        <div class="row">
            <div class="list-group">
                <a v-for="training, index in sessionsByProf" :key="index" href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h2 class="mb-1 text-center">{{training.title}}</h2>
                    </div>
                    <div>
                        <table class="table table-striped">
                            <tr>
                                <th>Début</th>
                                <th>Fin</th>
                                <th>Elève</th>
                            </tr>
                            <tr v-for="session, indice in training.sessions" :key="index + indice">
                                <td>{{session.start}}</td>
                                <td>{{session.end}}</td>
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

export default {
    computed: {
        ...mapState('core/cedule', [
            'sessionsByProf'
        ])
    },
    name: "ceduleProf"
}

</script>