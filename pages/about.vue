<template>
  <div class="bg-[#FBFBFB]">
    <Content />
    <AboutUs />
  </div>
</template>
  
<script setup>
  import AboutUs from '../components/about/about-us.vue'
  import Content from '../components/about/content.vue'
    definePageMeta({
        layout: 'custom-layout',
        name: 'About Us',
      })

</script>
  
<style scoped>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
  