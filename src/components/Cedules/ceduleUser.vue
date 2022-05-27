
<template>
    <div class="container">
        <div class="titre-principal">{{ $i18n.t('title-6') }}</div>
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
    </div>
</template>

<script>
export default {
    name: "ceduleUser"
}

</script>