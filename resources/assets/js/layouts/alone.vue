<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
       <main class="main">
             <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '~/components/Header'
import { Footer as AppFooter } from '../components/'

export default {
  name: 'AloneLayout',

  components: {
   AppHeader,
   AppFooter
  }
}
</script>
