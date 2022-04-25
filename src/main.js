import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
import VueClipboard from 'vue3-clipboard'
 
 
import VueTippy from 'vue-tippy'
// or
// import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling




import App from './App.vue'

import './assets/index.css';

import './stores/main.js';

const app = createApp(App)

// 1. Define route components.
// These can be imported from other files
import Home from './pages/Home.vue'
import Page from './pages/Page.vue'
import Results from './pages/Results.vue'
import Contact from './pages/Contact.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Page },
  { path: '/contact', component: Contact },
  { path: '/how-is-property-assessed-in-north-carolina', component: Page },
  { path: '/are-property-taxes-equitable', component: Page },
  { path: '/results/:address', component: Results },
  { path: '/results/:address/:addressURL', component: Results },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

// import {useToast, ToastPlugin} from "vue-toast-notification";


import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';


app.use(VueToast)

app.use(createPinia())
app.use(router)
// app.use(VueClipboard)
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})

app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'auto-end',
      allowHTML: true,
    }, // => Global default options * see all props
  }
)


app.mount('#app')