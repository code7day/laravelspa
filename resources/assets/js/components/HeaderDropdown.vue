<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <span><strong>{{ user.name }}</strong></span>
          <img :src="user.photo_url" class="img-avatar" alt="photo_user">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>{{ $t('section') }}</strong></b-dropdown-header>
        <!-- <b-dropdown-item><i class="fa fa-bell-o"></i> Updates<b-badge variant="info">{{itemsCount}}</b-badge></b-dropdown-item> -->
        <b-dropdown-item :to="{ name: 'main' }"><i class="fa fa-tasks"></i> {{ $t('section') }}</b-dropdown-item>
       
        <b-dropdown-header tag="div" class="text-center"><strong>{{ $t('settings') }}</strong></b-dropdown-header>
        <b-dropdown-item :to="{ name: 'settings.profile' }"><i class="fa fa-wrench"></i> {{ $t('profile') }}</b-dropdown-item>
        <!-- <b-dropdown-item><i class="fa fa-usd"></i> Payments<b-badge variant="secondary">{{itemsCount}}</b-badge></b-dropdown-item> -->
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i> {{ $t('logout') }}</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  
  name: 'header-dropdown',
  data: () => {
    return { itemsCount: 42 }
  },
  components: {
    LocaleDropdown
  },
  
  computed: mapGetters({
    user: 'auth/user'
  }),

   methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}


</script>
