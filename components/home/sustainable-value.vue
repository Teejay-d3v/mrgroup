<template>
  <div>
    <!-- Section 1 -->
    <section class="text-gray-600 body-font">
  <div class="grid grid-cols-1 lg:grid-cols-2  gap-[24] items-center px-[64px] pt-[120px]">
    <!-- Left Column: Text Content -->
    <div class="col-span-1 flex flex-col p-5  lg:p-0">
      <h1 ref="title" class="p-0 lg:p-4" 
        style="font-family: DM Sans;
        font-size: 56px;
        font-weight: 600;
        line-height: 64px;
        text-align: left;
        color:#000000;">
        Transforming Surplus into Sustainable Value
      </h1>
      <div ref="paragraph">
        <p style="font-family: Poppins;
          font-size: 18px;
          font-weight: 400;
          line-height: 36px;
          text-align: left;
          ">
          Since its foundation, HMR has specialized in recovering precious metals and has developed expertise in re-utilizing surplus assets and excess inventory. Our commitment to sustainability and innovation drives us to transform waste into valuable resources.<br><br>

          Join us in our mission to turn surplus into value and lead the way toward a sustainable future.
        </p>
      </div>
      <div class="flex justify-start py-4">
        <a class="inline-flex items-center " style="width: 389.33px;
                  height: 56px;
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;

                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
      </div>
    </div>

    <!-- Right Column: Image -->
    <div class="col-span-1 flex justify-center">
      <img style="width: 672px;
        gap: 8px;
        border-radius: 12px 12px 12px 12px;
        opacity: 0px;
        " alt="team" src="/public/images/home1.png">
    </div>
  </div>
</section>

    <!-- Section 2 -->
    <section class="text-gray-600 body-font">
      <div  class="hidden lg:flex container mx-auto flex-col lg:flex-row items-center px-5">
        <div ref="card" class="lg:flex-grow md:w-1/2  flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div class="bg-white p-10 rounded-lg shadow-lg w-[651px] h-[538px]">
            <button class="mb-3 bg-gray-300 h-10 px-6 rounded-lg font-semibold">CAREERS</button>
            <h1 style="font-family: DM Sans;
              font-size: 32px;
              font-weight: 700;
              line-height: 48px;
              text-align: left;
              ">Join Our Innovative Team and Shape the Future</h1>
            <div>
            <p style="font-family: Poppins;
                font-size: 18px;
                font-weight: 400;
                line-height: 36px;
                text-align: left;
                ">
                Join our pioneering team for onshore and offshore opportunities. Sign up for job alerts, watch our latest videos, and learn about HMR values. 
                <br>
                <br>


              Be a part of a company that values growth, environmental responsibility, and employee development. Start your journey with us and make a difference in the world.
            </p>
          </div>
            <div  class="flex justify-center border-t-2 mt-5">
              <a class="inline-flex items-center " style="
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;

                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div ref="image1" class="lg:w-1/2 md:w-1/2 w-1/2 h-[35rem] md:py-20 flex justify-center"> 
          <img class="object-cover object-center w-full h-full rounded-lg shadow-lg" style="height: 564.29px; width: 441.68px" alt="team" src="/public/images/home2.png">
        </div>
      </div>


      <!-- Mobile -->
      <div class="lg:hidden flex flex-col sm:flex-row items-center justify-between mx-auto px-4 py-8">
        <div
          ref="image1"
          class="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0"
        >
          <img
            class="object-cover object-center rounded-lg shadow-lg max-w-full h-auto"
            alt="team"
            src="/images/home2.png"
          />
        </div>
      <div
        ref="card"
        class="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:p-8"
      >
        <div class="bg-white rounded-lg shadow-lg w-full p-6 sm:p-8">
          <button class="mb-4 bg-gray-300 h-10 px-6 rounded-lg font-semibold">CAREERS</button>
          <h1 class="text-gray-900 mb-4 text-lg sm:text-xl">Join Our Innovative Team and Shape the Future</h1>
          <p class="mb-4 text-gray-700 leading-relaxed">
            Since its foundation, HMR has specialized in recovering precious metals and has developed expertise in re-utilizing surplus assets and excess inventory. Our commitment to sustainability and innovation drives us to transform waste into valuable resources.
          </p>
          <p class="mb-4 text-gray-700 leading-relaxed">
            Join us in our mission to turn surplus into value and lead the way toward a sustainable future.
          </p>
          <div class="flex justify-center sm:justify-start">
            <a class="text-orange-500 inline-flex items-center mt-3">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M7 17l10-10M17 17V7h-10" />
              </svg>
            </a>
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
