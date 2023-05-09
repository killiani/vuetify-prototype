<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="navigateTo(item)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vue 3 + Vuetify 3</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">

interface Item {
  title: string;
  icon: string;
  route: string;
}

export default {
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
