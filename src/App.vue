<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list density="compact" nav>
        <v-list-item v-for="(item, index) in items" :key="index" @click="navigateTo(item)">
          <router-link :to="item.route" exact-active-class="active">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vue 3 + Vuetify 3</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <r-footer></r-footer> <!-- render the Footer component -->
    </v-main>

    

  </v-app>
</template>

<script lang="ts">
import Footer from './components/Footer.vue';

interface Item {
  title: string;
  icon: string;
  route: string;
}

export default {

  name: 'App',
  components: {
    'r-footer': Footer // register the Footer component
  },

  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', route: '/' },
        { title: 'Contact', icon: 'mdi-email', route: '/contact' },
        { title: 'Member', icon: 'mdi-information', route: '/member' }
      ]
    }
  },
  methods: {
    navigateTo(item: Item) {
      this.$router.push(item.route)
      this.drawer = false
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>