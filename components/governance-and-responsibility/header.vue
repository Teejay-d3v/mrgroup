<template>
  <div>
    <section class="bg-white">
      <div class="">
        <div class="flex flex-col items-center text-center py-10 px-4">
          <div class="my-5 max-w-5xl w-full">
            <h1 ref="title" class="text-2xl md:text-3xl lg:text-4xl"> Our Pillars of Responsible Governance</h1>
          </div>
          <div ref="paragraph" class="max-w-5xl w-full">
            <p>
              The HMR Group’s core governance and responsibility philosophy are based upon three guiding principles: Social Corporate Responsibility, Employee Empowerment, and Sustainable Governance.
            </p>
            <p>
              Each of these three pillars contributes to the realization of our visions for HMR as a proponent of the circular economy.
            </p>
          </div>
        </div>
      </div>
  </section>
  </div>
</template>

<script setup>
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