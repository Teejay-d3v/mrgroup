<template>
  <section class="bg-white">
    <div class="mb-44">
      <div class="flex flex-col items-center text-center py-10 px-4">
        <div class="my-5 max-w-5xl w-full">
          <h1 ref="title">How Can We Help You?</h1>
        </div>
        <div class="max-w-5xl w-full">
          <p ref="paragraph">
            We offer comprehensive solutions to maximize the value of surplus assets through our full-cycle reverse logistics and re-commerce services. Our expertise encompasses a wide variety of asset disposal and recycling processes, ensuring sustainable and efficient management of your resources.
          </p>
        </div>
      </div>

      <StepItem />

    </div>
  </section>
</template>

<script setup>
import StepItem from '@/components/our-services/steps/stepItem.vue'

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
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
])
</script>

<style scoped>
/* Any additional styling if required */
</style>
