<template>
<div class="bg-[#FBFBFB]">
  <BusinessUnit />
  <HmrWork />
  <SustainableValue />  
  </div>
</template>

<script setup>
import BusinessUnit from '../components/home/business-unit.vue'
import HmrWork from '../components/home/hmr-work.vue'
import SustainableValue from '~/components/home/sustainable-value.vue'
import Intro from '~/components/home/intro.vue'
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
