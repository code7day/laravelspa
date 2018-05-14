import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import FlagIcon from 'vue-flag-icon'


import $ from 'jquery';

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(BootstrapVue)
Vue.use(FlagIcon)
new Vue({
  i18n,
  store,
  router,
  ...App
})

$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});
