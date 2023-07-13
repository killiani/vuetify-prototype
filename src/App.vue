<template>
  <v-app>
    <NavBar /> <!-- render a global registered component -->
    <v-main>
      <router-view></router-view> 
      <r-footer></r-footer> <!-- render a component which is registered here -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Footer from './components/Footer.vue';

export default {

  name: 'App',
  components: {
    'r-footer': Footer, // register the component here
  },
}
</script>

<style lang="scss" src="./style.scss"></style>