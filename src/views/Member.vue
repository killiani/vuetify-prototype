<template>
    <MyButton color="primary" text="Click"/>
    <MyButton class="bg-blue text--white" text="Click"/> 
    <MyIcon icon="mdi:mdi-minus"/>
</template>

<script lang="ts">
import MyButton from '../components/MyButton.vue';
import MyIcon from '../components/MyIcon.vue';

export default {
    components: {
        MyButton,
        MyIcon
    }
}
</script>