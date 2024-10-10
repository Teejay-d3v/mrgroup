<template>
  <div>
    <!-- Section 1 -->
    <section class="text-gray-600 body-font">
      <div class="padding-custom container mx-auto flex flex-col lg:flex-row items-center px-5">
        <div class="lg:flex-grow md:w-1/2 flex flex-col mb-8 lg:mb-0">
          <h1 ref="title"  class="p-4">Transforming Surplus into Sustainable Value</h1>
          <div ref="paragraph">
            <p  class="mb-4 mr-10 leading-relaxed">Since its foundation, HMR has specialized in recovering precious metals and has developed expertise in re-utilizing surplus assets and excess inventory. Our commitment to sustainability and innovation drives us to transform waste into valuable resources.</p>
            <p  class="mb-8 mr-10 ">Join us in our mission to turn surplus into value and lead the way toward a sustainable future.</p>
          </div>         
          <div class="flex justify-center py-4">
            <a class="text-orange-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M7 17l10-10M17 17V7h-10" />
              </svg>
            </a>
          </div>
        </div>
        <div ref="image" class="w-full lg:w-1/2 flex justify-center">
          <img class="border-radius-custom object-cover object-center w-full h-auto rounded-lg" alt="team" src="/public/images/home1.png">
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="text-gray-600 body-font">
      <div  class="container mx-auto flex flex-col lg:flex-row items-center px-5">
        <div ref="card" class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div class="bg-white p-10 rounded-lg shadow-lg w-full">
            <button class="mb-3 bg-gray-300 h-10 px-6 rounded-lg font-semibold">CAREERS</button>
            <h1  class="text-gray-900 mb-6 text-xl lg:text-2xl">Join Our Innovative Team and Shape the Future</h1>
            <div>
            <p class="mb-6 text-gray-700 leading-relaxed">
              Since its foundation, HMR has specialized in recovering precious metals and has developed expertise in re-utilizing surplus assets and excess inventory. Our commitment to sustainability and innovation drives us to transform waste into valuable resources.
            </p>
            <p class="mb-6 text-gray-700 leading-relaxed">
              Join us in our mission to turn surplus into value and lead the way toward a sustainable future.
            </p>
          </div>
            <div  class="flex justify-center">
              <a class="text-orange-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div ref="image1" class="lg:w-1/2 md:w-1/2 w-[28rem] h-[35rem] md:py-20 flex justify-center"> 
          <img class="object-cover object-center w-full h-full rounded-lg shadow-lg" style="height: 564.29px; width: 441.68px" alt="team" src="/public/images/home2.png">
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
const title = ref(null)
const paragraph = ref(null)
const card = ref(null)
const image = ref(null)
const image1 = ref(null)

const { setupAnimations } = useAnimations()

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
  {
    element: card,
    props: { translateX: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: image,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: image1,
    props: { translateY: ['10%', '0%'], opacity: [0, 1] },
    options: { duration: 0.6, easing: 'ease-out' }
  },

])
</script>

<style scoped>
.padding-custom {
  padding-top: 120px;  
  padding-bottom: 120px; 
}

.border-radius-custom {
  border-radius: 12px; 
}
</style>
