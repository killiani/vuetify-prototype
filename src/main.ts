import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './style.scss'

import { createRouter, createWebHashHistory } from "vue-router"

// Views
import Main from './views/Main.vue'
import Member from './views/Member.vue'
import Contact  from './views/Contact.vue'

// Components
import NavBar from './components/NavBar.vue'

const app = createApp(App)

// register a component global
app.component('NavBar', NavBar)

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