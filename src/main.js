import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'



import App from './App.vue'

import './assets/index.css';

import './stores/main.js';

const app = createApp(App)

// 1. Define route components.
// These can be imported from other files
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Share from './pages/Share.vue'
import Results from './pages/Results.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/share', component: Share },
  { path: '/results/:address', component: Results },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})



app.use(createPinia())
app.use(router)

app.mount('#app')