<template>
  <div>
    <section>
      <div class="flex justify-center my-10">
        <div class="flex flex-col items-center text-center w-full max-w-5xl p-4 gap-5">
          <h1 ref="title">
            Certified Disposal And Waste Management Services For Client’s Assets That Can’t Be Resold Profitably.
          </h1>
          <div>
            <img ref="logo" src="/public/images/envirocycle.png" alt="envirocycle Image" class="w-full h-auto">
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
const logo = ref(null)

setupAnimations([
    {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: logo,
    props: { y: [100, 0], opacity: [0, 1] },
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