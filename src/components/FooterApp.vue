<template>
  <footer class="footer text-center text-lg-start text-warning">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
         <section class="fs-5 text-white bold">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3 mb-3">{{ $i18n.t('msg-follow-us') }}</span></p>
         </section>
          <!-- Section: CTA -->
          <hr class="mb-4"/>

      <!-- Section: Social media -->
        <section class="mb-4 text-center">
          <!-- Facebook -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">
            <font-awesome-icon :icon="['fab','facebook']" class="icon alt"/>
          </a>

          <!-- Twitter -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">
            <font-awesome-icon :icon="['fab','twitter']" class="icon alt"/>
          </a>

          <!-- Instagram -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">
            <font-awesome-icon :icon="['fab','instagram']" class="icon alt"/>
          </a>

          <!-- Linkedin -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">
            <font-awesome-icon :icon="['fab','linkedin']" class="icon alt"/>
          </a>

          <!-- Github -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">
            <font-awesome-icon :icon="['fab','github']" class="icon alt"/>
          </a>
          <!-- PayPal -->
          <a href="#!" class="btn btn-outline-light btn-floating m-1" role="button">{{ $i18n.t('msg-paypal') }}
            <font-awesome-icon :icon="['fab','paypal']" class="icon alt"/>
          </a>
        
        </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">{{ $i18n.t('copyright') }}
        <a class="text-white" href="#">{{ $i18n.t('email-rsf') }}</a>
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
