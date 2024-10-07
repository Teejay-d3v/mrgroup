<template>
  <div>
    <Content />
    <OurServices />
  </div>
</template>

<script setup>
import Content from '../components/hmrgroup-trading-haus/content.vue';
import OurServices  from "../components/hmrgroup-trading-haus/our-services.vue";
definePageMeta({
    layout: 'custom-layout',
    name: 'HMR Group - Trading Haus',
  })
</script>

<style scoped>

</style>