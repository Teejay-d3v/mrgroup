<template>
  <section>
    <div class="container mx-auto " style="width: 1600px; height: 891px; display: flex; justify-content: center; align-items: center; ">
        <div ref="title" class="text-center ">
          <h1 class="mb-4  sm:text-6xl lg:text-7xl sm:px-14 lg:px-32 xl:px-40 2xl:px-72  shadow-text ">
            Maximize the Value of surplus with HMR Reverse Logistics
          </h1>
          <p ref="paragraph1" class="text-center text-base mb-10 mx-auto px-4 sm:px-14 lg:px-32 xl:px-40 2xl:px-72">
            Transforming Excess Inventory into Valuable Assets with Innovative Solutions and Sustainable Practices.
          </p>
          <div class="flex space-x-4 justify-center">
            <button class="border hover:bg-orange-600 text-white py-3 px-6 md:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
            <button class="border hover:bg-orange-600 text-white py-3 px-6 md:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import Card from '@/components/Card.vue'
const title = ref(null)
const paragraph1 = ref(null)


const { setupAnimations } = useAnimations()

setupAnimations([
  {
    element: title,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  }
])
</script>

<style scoped>
.cusotm-bg-image {
    height: 1000px;
    background-color: rgb(0, 0, 63);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>