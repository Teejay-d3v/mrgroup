<template>
  <div class="bg-[#FBFBFB]">
    <Content />
    <OurServices />
  </div>
</template>

<script setup>
import Content from '../components/hmrgroup-envirocycle/content.vue';
import OurServices  from "../components/hmrgroup-envirocycle/our-services.vue";
definePageMeta({
    layout: 'custom-layout',
    name: 'HMRGroup - Envirocycle',
  })
</script>

<style scoped>

</style>