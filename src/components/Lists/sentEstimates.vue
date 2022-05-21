<template>
    <h1 class="text-center">
        Sent estimates
    </h1>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "sentEstimates",
    computed: {
        ...mapState('core/estimate', [
            'sent_estimates'
        ]),
    }
}
</script>
