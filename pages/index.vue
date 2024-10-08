<template>
<div class="bg-white">
  <BusinessUnit />
  <HmrWork />
  <SustainableValue />  
  </div>
</template>

<script setup>
import BusinessUnit from '../components/home/business-unit.vue'
import HmrWork from '../components/home/hmr-work.vue'
import SustainableValue from '~/components/home/sustainable-value.vue'
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
