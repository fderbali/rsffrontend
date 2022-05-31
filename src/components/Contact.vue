<template>
    <body>

        <h1>Contact</h1>
        <h3>{{ $i18n.t('msg-info') }}</h3>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="@/assets/images/logo.png" id="logo" alt="logo" style="width:300px;height:300px;">
                </div>
                <div class="flip-card-back">
                    <h4>{{ $i18n.t('us') }}</h4> 
                    <p>{{ $i18n.t('concept') }}</p>
                    <p>{{ $i18n.t('cell') }}</p>
                    <p>{{ $i18n.t('email-us') }}</p> 
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

