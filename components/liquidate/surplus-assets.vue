<template>
  <div class="p-10">
    <section>
      <div class="grid grid-cols-6 lg:grid-cols-12">
        <div class="col-span-12 flex justify-center ">
          <div class="flex flex-col items-center text-center pb-10">
            <div class="max-w-4xl w-full py-5">
              <h1 ref="title" > Choosing To Liquidate Your Surplus Assets With HMR Is A Great Way To Extract Maximum Value From Your Surplus Assets.</h1>
              </div>
            <div class="max-w-4xl w-full">
              <p ref="paragraph" class="text-base ">
                With our online liquidation platform you can sell excess inventory, returns or other liquidation inventory directly to a wide variety of trusted buyers. This drives better than average demand, higher pricing, and faster sales cycles.
              </p>
            </div>
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
.custom-button {
  width: 207px; 
  height: 60px; 
  padding: 12px 32px;
  gap: 8px; 
  border-radius: 8px; 
  border: 1px solid transparent; 
  background-color: #FD7936; 
  color: white; 
  transition: background-color 0.3s ease;
  font-size: 1rem;
  cursor: pointer;

}

.custom-button:hover {
  background-color: #FD7936;
  border-color: #FD7936;
}
</style>