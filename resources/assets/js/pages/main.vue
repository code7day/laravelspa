<template>
<div class="animated fadeIn main-app">
       <b-card class="card-accent-primary text-center">
          <strong>{{$t('section')}}</strong>
        </b-card>
     <b-row>
      <b-col sm="6" md="2">
        <div class="social-box instagram">
          <i class="fa fa-wrench"></i>
            <b-dropdown-item :to="{ name: 'settings.profile' }"><strong>Mantenimiento</strong></b-dropdown-item>
        </div>
      </b-col>
       <b-col sm="6" md="2">
        <div class="social-box facebook">
          <i class="fa fa-address-book"></i>
            <b-dropdown-item :to="{ name: 'settings.profile' }"><strong>Estudiantes</strong></b-dropdown-item>
        </div>
      </b-col>
       <b-col sm="6" md="2">
        <div class="social-box twitter">
          <i class="fa fa-list-alt"></i>
            <b-dropdown-item :to="{ name: 'settings.profile' }"><strong>Asistencias</strong></b-dropdown-item>
        </div>
      </b-col>
       <b-col sm="6" md="2">
        <div class="social-box red">
          <i class="fa fa-graduation-cap "></i>
            <b-dropdown-item :to="{ name: 'settings.profile' }"><strong>Escuela</strong></b-dropdown-item>
        </div>
      </b-col>
     
     
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  layout: "alone",

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>