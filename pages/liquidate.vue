<template>
  <div class="bg-[#FBFBFB]">
    <SurplusAssets />
    <Content />
    <Liquidation />
  </div>
</template>
  
<script setup>
  import SurplusAssets from '../components/liquidate/surplus-assets.vue'
  import Liquidation from '../components/liquidate/liquidation.vue'
  import Content from '../components/liquidate/content.vue'

    definePageMeta({
        layout: 'custom-layout',
        name: 'Liquidate',
      })

</script>
  
<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
  