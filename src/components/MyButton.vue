<template>
  <v-btn :color="color" :class="buttonClass">{{ text }}</v-btn>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    buttonClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>