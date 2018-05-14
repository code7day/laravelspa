const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Main = () => import('~/pages/main').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

export default [
  { path: '/', redirect: { name: 'home' } }, 
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', component: Home, meta: {label: 'home'} },
  { path: '/main', name: 'main', component: Main, meta: {label: 'main'} },
  
  { path: '/settings',
    meta: {
      label: 'settings'
    },
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile', meta: {label: 'setting'} }},
      { path: 'profile',
        meta: {label: 'profile'}, name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', meta: {label: 'password'}, component: SettingsPassword }
    ] },

  { path: '*', component: NotFound }
]
