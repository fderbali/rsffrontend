<template>
    <div>
        <h1>List des demandes</h1>
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