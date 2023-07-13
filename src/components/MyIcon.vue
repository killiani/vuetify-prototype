<template>
  <v-icon :icon="icon"/>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      default: "mdi:mdi-minus"
    }
  }
}
</script>