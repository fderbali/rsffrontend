<template>
    <body>
        <div class="col d-flex justify-content-center pt-5">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="@/assets/images/logo.png" id="logo" alt="logo" style="width:400px;height:200px;">
                    </div>
                    <div class="flip-card-back">
                        <h4>{{ $i18n.t('us') }}</h4><br> 
                        <h6>{{ $i18n.t('concept') }}</h6>
                        <h6>{{ $i18n.t('cell') }}</h6>
                        <h6>{{ $i18n.t('email-us') }}</h6> 
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: "Contact"
}
</script>

