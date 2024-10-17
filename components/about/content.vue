<template>
  <div>
    <section>
      <div class="flex justify-center py-10">
        <div class="flex flex-col items-center text-center w-full max-w-5xl p-12 lg:p-4 gap-5">
          <p ref="title ">
            At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions.
          </p>
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


setupAnimations([
  {
    element: title,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
])
</script>

<style scoped>

</style>