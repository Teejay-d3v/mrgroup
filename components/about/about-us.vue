<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto mb-10">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/public/images/aboutUs.png">
              
            </div>
            <h4 ref="title1" class=" text-gray-900 mt-5">Shooting Stars</h4>
            <p ref="paragraph1" class="leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/public/images/aboutUs1.png">
            </div>
            <h4 ref="title2" class=" text-gray-900 mt-5">The Catalyzer</h4>
            <p ref="paragraph2" class="leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

          </div>
          <div  class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src="/public/images/aboutUs2.png">
            </div>
            <h4 ref="title3" class=" text-gray-900 mt-5">The 400 Blows</h4>
            <p ref="paragraph3" class="leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
const title1= ref(null)
const title2 = ref(null)
const title3 = ref(null)
const paragraph1 = ref(null)
const paragraph2 = ref(null)
const paragraph3 = ref(null)
const { setupAnimations } = useAnimations()

setupAnimations([
  {
    element: title1,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title2,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title3,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph3,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },

])
</script>

<style scoped>
.custom-image {
  width: 1728px; /* Width: Fill */
  height: 460px; /* Height: Hug */
  object-fit: cover; 
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds shadow to the image */
}
</style>