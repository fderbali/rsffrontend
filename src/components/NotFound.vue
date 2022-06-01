<template>

  <body>
    <div class="container">
        <div class="row">
            <div class="">
                <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt="img404"
                    class="img-fluid">
            </div>
            <div class=" col-md-6 mt-5">
                <p class="fs-3"> <span class="text-danger">{{ $i18n.t('msg404-1') }}</span>
                 {{ $i18n.t('msg404-2') }}</p>
                <p class="lead">{{ $i18n.t('msg404-3') }}</p>
                <a href="/" class="btn btn-success">{{ $i18n.t('home') }}</a>
            </div>
        </div>
    </div>
  </body>
    
</template>