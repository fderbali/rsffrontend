<template>
    <div class="container w-50">
        <div class="row">
            <div class="titre-principal">{{ $i18n.t('title-1') }}</div>
            <div class="list-group">
                <table class="table table-strip">
                    <thead>
                        <tr>
                            <th scope="col">{{ $i18n.t('ss-title-1') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-2') }}</th>
                            <th scope="col">{{ $i18n.t('ss-title-3') }}</th>
                        </tr>
                    </thead>
                    <tbody class="border-bottom border-success">
                        <tr v-for="demand, index in demands" :key="index">
                            <td>{{demand.training.title}}</td>
                            <td>{{demand.training.user.first_name}} {{demand.training.user.last_name}}</td>
                            <td>{{demand.status}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> 
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState('core/demand', [
            'demands'
        ]),
    },
    name: "listDemands"
}
</script>