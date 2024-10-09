<template>
  <div class="bg-[#FBFBFB]">
    <MarketPlace  />
    <OurServices />
  </div>
</template>

<script setup>
import MarketPlace from "../components/hmrgroup-reverse-logistics/marketplace.vue";
import OurServices  from "../components/hmrgroup-reverse-logistics/our-services.vue";
    definePageMeta({
        layout: 'custom-layout',
        name: 'HMRGroup - Reverse Logistics',
      })
</script>

<style scoped>

</style>