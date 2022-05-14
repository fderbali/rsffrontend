<template>

  <body>
    <div class="d-flex align-items-center justify-content-center vh-99">
        <div class="text-center row">
            <div class=" col-md-6">
                <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                    class="img-fluid">
            </div>
            <div class=" col-md-6 mt-5">
                <p class="fs-3"> <span class="text-danger">{{ $i18n.t('msg404-1') }}</span>
                 {{ $i18n.t('msg404-2') }}</p>
                <p class="lead">{{ $i18n.t('msg404-3') }}</p>
                <a href="#" class="btn btn-primary">{{ $i18n.t('home') }}</a>
            </div>
        </div>
    </div>
  </body>
    
</template>