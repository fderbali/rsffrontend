<template>
  
    <div class="container">
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt="img404">
        </div>
        <div>
            <p class="fs-3"> <span class="text-danger">{{ $i18n.t('msg404-1') }}</span>
              {{ $i18n.t('msg404-2') }}</p>
            <p class="lead">{{ $i18n.t('msg404-3') }}</p>
            <a href="/" class="btn btn-outline-success">{{ $i18n.t('home') }}</a>
        </div>
    </div>
    
</template>