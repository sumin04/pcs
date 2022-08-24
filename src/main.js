// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import axios from 'axios'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import getData from "./components/getData.vue"

const routes = [
  { name: 'getData', path:'/getData',component: getData},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios