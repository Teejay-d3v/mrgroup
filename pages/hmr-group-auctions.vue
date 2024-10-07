<template>
  <div>
    <Content />
    <OurServices />
  </div>
</template>

<script setup>
import Content from '../components/hmrgroup-auctions/content.vue';
import OurServices  from "../components/hmrgroup-auctions/our-services.vue";
definePageMeta({
    layout: 'custom-layout',
    name: 'HMRGroup  - Auctions',
  })
</script>

<style scoped>

</style>