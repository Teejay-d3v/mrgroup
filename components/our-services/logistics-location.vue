<template>
  <div>
    <section>
      <div class="grid grid-cols-6 lg:grid-cols-12">
        <div
          class="col-span-6 bg-primary bg-cover order-2 lg:order-1 flex items-center justify-center"
          style="background-image: url('/images//logisticslocation.png'); min-height: 700px;"
        >
          <div
            class="bg-gray-200 w-[80%] h-[85%] max-w-[704px] p-[34px] flex flex-col border-2 justify-center items-center gap-2 rounded-xl opacity-95 relative"
          >
            <div
              class="w-full bg-gray-200  h-auto p-0 rounded relative "
            >
            <div class="logistic-map">

            </div>
            </div>
          </div>
        </div>

        <div
          class="text-white col-span-6 grid place-content-center h-full  bg-blue-900 px-16 space-y-4 order-1 lg:order-2 pb-12 lg:pb-0"
        >
          <div class="max-w-xl w-full gap-8 py-10 lg:py-0">
            <div class="pr-10">
              <h1 ref="title" class="text-3xl title-font font-medium mb-1">Main Reverse Logistics Locations</h1>
            </div>
            <div>
              <p ref="paragraph" class="leading-relaxed">
                We provide comprehensive reverse logistics services to clients across the globe, ensuring seamless recovery and redistribution of assets. Our global reach enables us to support businesses in reducing waste and maximizing value, no matter where they operate.
              </p>
            </div>
          </div>

          <div class="max-w-xl w-full flex gap-8">
            <div>
              <ul ref="list1">
                <li class="flex items-center space-x-2 mb-4 px-5"> 
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>USE</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Japan</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Europe</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Vietnam</span>
                </li>
              </ul>
            </div>
            <div>
              <ul ref="list2">
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Philippines</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>China</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Sea Countries</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Indonesia</span>
                </li>
              </ul>
            </div>
            <div >
              <ul ref="list3">
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>South Korea</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Australia</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>UAE</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Thailand</span>
                </li>
              </ul>
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
const title= ref(null)
const paragraph = ref(null)
const list1 = ref(null)
const list2 = ref(null)
const list3 = ref(null)

const { setupAnimations } = useAnimations()
setupAnimations([
  {
    element: title,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph,
    props: { y: [0, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: list1,
    props: { translateX: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.6, easing: 'ease-out' }
  },
  {
    element: list2,
    props: { translateX: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: list3,
    props: { translateX: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  }

])
</script>

<style scoped>

.logistic-map {
  background-image: 
    url('/images/logisticslocation2.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
}

</style>
