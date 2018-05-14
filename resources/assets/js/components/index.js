import Vue from 'vue'
import Child from './Child'

import Aside from './Aside.vue'
import Checkbox from './Checkbox.vue'
import Card from './Card.vue'
import Breadcrumb from './Breadcrumb.vue'
import Callout from './Callout.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Switch from './Switch.vue'
import Button from './Button'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Child,
  Card,
  Checkbox,
  Button,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})

export {
    Aside,
    Breadcrumb,
    Callout,
    Footer,
    Header,
    Sidebar,
    Switch
}
