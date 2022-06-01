<template>
    <div>

        <div class="text-center d-flex justify-content-center loader">
            <div class="spinner-border align-self-center text-light" style="width: 6rem; height: 6rem;" role="status">
                <span class="visually-hidden">{{ $i18n.t('loading') }}</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "loader.vue"
}
</script>

<style scoped>
    .loader {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
    }
</style>