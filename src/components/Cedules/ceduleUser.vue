
<template>
    <div class="container">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-6') }}</div>
            <div class="list-group">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>{{ $i18n.t('title') }}</th>
                            <th>{{ $i18n.t('date') }}</th>
                            <th>{{ $i18n.t('start-hh') }}</th>
                            <th>{{ $i18n.t('end-hh') }}</th>
                            <th>{{ $i18n.t('name') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="session, index in sessionsByUser" :key="index">
                            <td>{{session.training.title}}</td>
                            <td>{{ moment(session.start).format('YYYY-MM-DD') }}</td>
                            <td>{{ moment(session.start).format('HH:mm')}}</td>
                            <td>{{ moment(session.end).format('HH:mm') }}</td>
                            <td>{{session.user.first_name}} {{session.user.last_name}} </td>
                        </tr>
                    </tbody>
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