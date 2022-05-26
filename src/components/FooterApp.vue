<template>
  <footer class="footer text-center text-lg-start text-warning">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: CTA -->
        <section class="" v-if="!user">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">{{ $i18n.t('free-register') }}</span>
              <router-link to="inscription" class="btn btn-outline-light btn-rounded">{{ $i18n.t('register') }}</router-link>
            </p>
         <!-- <section class="" v-else>
           <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">Nous assurons le paiement sécurisé PayPal</span>
            </p> -->

              
        </section>
      <!-- Section: CTA -->

      <hr class="mb-4"/>

      <!-- Section: Social media -->
      <section class="mb-4 text-center">
        <!-- Facebook -->
        <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
        >
          <font-awesome-icon :icon="['fab','facebook']" class="icon alt"/>
        </a>

        <!-- Twitter -->
        <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
        >
          <font-awesome-icon :icon="['fab','twitter']" class="icon alt"/>
        </a>

        <!-- Instagram -->
        <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
        >
          <font-awesome-icon :icon="['fab','instagram']" class="icon alt"/>
        </a>

        <!-- Linkedin -->
        <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
        >
          <font-awesome-icon :icon="['fab','linkedin']" class="icon alt"/>
        </a>

        <!-- Github -->
        <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
        >
          <font-awesome-icon :icon="['fab','github']" class="icon alt"/>
        </a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
    >
      {{ $i18n.t('copyright') }}
      <a class="text-white" href="#">ReseauSavoirFaire@gmail.com</a>
    </div>
    <!-- Copyright -->
  </footer>

</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState('core/auth', [
                'user'
            ]),
        },
    }
</script>
