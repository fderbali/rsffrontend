
<template>
    <div class="container">
        <div class="titre-principal">{{ $i18n.t('title-6') }}</div>
        <div class="row">
            <div class="list-group">
                <table class="table table-striped">
                    <tr>
                        <th>{{ $i18n.t('title') }}</th>
                        <th>{{ $i18n.t('start-hh') }}</th>
                        <th>{{ $i18n.t('end-hh') }}</th>
                        <th>{{ $i18n.t('name') }}</th>
                    </tr>
                    <tr v-for="session, index in sessionsByUser" :key="index">
                        <td>{{session.training.title}}</td>
                        <td>{{session.start}}</td>
                        <td>{{session.end}}</td>
                        <td>{{session.training.user.first_name}} {{session.training.user.last_name}} </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex";
// Ajouter moment !
export default {
    computed: {
        ...mapState('core/cedule', [
            'sessionsByUser'
        ])
    },
    name: "ceduleUser"
}

</script>