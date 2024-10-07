<template>
  <div class="bg-white">
    <ReverseLogistics />
    <LogisticsLocation />
    <LogisticsSteps />
  </div>
</template>
  
<script setup>
  import ReverseLogistics from "../components/our-services/reverse-logistics.vue"
  import LogisticsLocation from "../components/our-services/logistics-location.vue"
  import LogisticsSteps from "../components/our-services/steps.vue"
  definePageMeta({
    layout: 'custom-layout',
    name: 'Our Services',
  })
</script>
  
<style scoped>
  html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

</style>
  