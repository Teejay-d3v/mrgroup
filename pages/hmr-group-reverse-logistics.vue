<template>
  <div class="bg-[#FBFBFB]">
    <MarketPlace  />
    <Content /> 
    <OurServices />
  </div>
</template>

<script setup>
import MarketPlace from "../components/hmrgroup-reverse-logistics/marketplace.vue";
import OurServices  from "../components/hmrgroup-reverse-logistics/our-services.vue";
import Content from "~/components/hmrgroup-reverse-logistics/content.vue";
    definePageMeta({
        layout: 'custom-layout',
        name: 'HMRGroup - Reverse Logistics',
      })
</script>

<style scoped>

</style>