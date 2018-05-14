<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! {{ $t('page_not_found') }}.</h4>
            <p class="text-muted">{{ $t('page_desc') }}</p>
          </div>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
                <i class="fa fa-home"></i>
              </b-input-group-text>
            </b-input-group-prepend>
             <b-input-group-append>
              <router-link class="btn btn-info" :to="{ name: 'home' }">
      {{ $t('go_home') }}
      </router-link>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  layout: "basic"
}
</script>
