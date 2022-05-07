<template>
  <div class="text-center">
    <h1>Home page

      <font-awesome-icon :icon="['fas', 'pen']" class="icon alt"/>

      <font-awesome-icon :icon="['fas','plus']" class="icon alt"/>
    </h1>
    <h2>{{ $i18n.t('home') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
