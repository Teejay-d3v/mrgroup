<template>
  <div class="md:my-20">
    <div>
      <div class="flex flex-col items-center text-center pb-10">
        <div class="w-full max-w-lg md:max-w-xl px-10 sm:px-8 md:px-12 py-5">
          <h1 ref="title" class="text-2xl md:text-3xl font-semibold">Simplify Your Liquidation Process with HMR</h1>
        </div>
        <div>
          <p ref="paragraph" class="text-base sm:text-lg md:text-xl mx-5 px-5 lg:mx-20 lg:px-20">
            Get in touch with us to discuss your strategic liquidation needs. Listing your inventory or assets with HMR for liquidation is easy, just follow these steps.
          </p>
        </div>
      </div>
    </div>
    <ContentDetails />
  </div>
</template>

<script setup>
import ContentDetails from '../liquidate/details/content-details.vue';
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const title = ref(null)
const paragraph = ref(null)

setupAnimations([
  {
    element: title,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
])
</script>

<style scoped>
</style>
