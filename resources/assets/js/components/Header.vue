<template>
  <header class="app-header navbar">
    <button v-if="$route.name=='main' ? false : true" class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="#"></b-link>
    <button v-if="$route.name=='main' ? false : true" class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
      <span class="navbar-toggler-icon"></span>
      </button>
<b-navbar-nav>
  
    <locale-dropdown/>
 </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
       <HeaderDropdown/>
    </b-navbar-nav>

        
  </header>
</template>
<script>
import HeaderDropdown from './HeaderDropdown.vue'
import LocaleDropdown from './LocaleDropdown'

export default {
  name: 'c-header',
  components: {
    HeaderDropdown,
    LocaleDropdown

  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>
