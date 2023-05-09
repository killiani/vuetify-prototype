import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { createRouter, createWebHashHistory } from "vue-router"

import Main from './views/Main.vue'
import Member from './views/Member.vue'
import Contact from './views/Contact.vue'

const app = createApp(App)

createApp(App)

const routes = [
    {path: "/", component: Main},
    {path: "/contact", component: Contact},
    {path: "/member", component: Member},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})

app.use(vuetify)
app.use(router)

app.mount('#app')