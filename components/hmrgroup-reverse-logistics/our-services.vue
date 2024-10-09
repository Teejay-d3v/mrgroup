<template>
  <div class="grid grid-cols-12 gap-6  bg-blue-900 text-white" >
    <div class="custom-bg col-span-12 leading-[36px]">
       <section class=" body-font">
        <List />
        <Card />
      </section>
    </div>
  </div>
</template>


<script lang="ts" setup>
import List from "../hmrgroup-reverse-logistics/our-services/list.vue"
import Card from "../hmrgroup-reverse-logistics/our-services/card.vue"
</script>

<style scoped>
.custom-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('/public/images/supply-change.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    width: 1,728px;

  }
  .custom-h1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
</style>