<template>
  <div class="app app-login flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <div class="logo text-center">
            <img src="/static/img/logo.png" alt="logo">
          </div>
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>{{ $t('login') }}</h1>
                <p class="text-muted">{{ $t('login_into') }}</p>
                <form @submit.prevent="login" @keydown="form.onKeydown($event)"> 
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="text"  v-model="form.username" 
                          :class="{ 'is-invalid': form.errors.has('username') }" 
                          name ="username" 
                          class="form-control" 
                          :placeholder="$t('username')">

                <has-error :form="form" field="username"/>
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password"  v-model="form.password" 
                          :class="{ 'is-invalid': form.errors.has('password') }" 
                          name ="password" 
                          class="form-control" 
                          :placeholder="$t('password')">
                <has-error :form="form" field="password"/>
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <v-button :loading="form.busy">{{ $t('login') }}</v-button>
                  </b-col>
                </b-row>
                </form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>{{title}}</h2>
                  <p>{{desc}}</p>
                  <p> &copy;<span v-once>{{ currentYear }}, developed by <strong>
<a href="https://github.com/jjdelarosa" style="color:white" target="_blank">Jeffry Jesus De La Rosa</a></strong></span></p>
                  </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Form from '~/plugins/vform'


export default {
  middleware: 'guest',
  layout:"basic",

  components: {
   
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      username: '',
      password: ''
    }),
    remember: false,
    title: window.config.appName,
    desc: window.config.appDesc,
    currentYear: (new Date).getFullYear()
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
