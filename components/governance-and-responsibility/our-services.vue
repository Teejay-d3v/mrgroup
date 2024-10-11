<template>
  <div class=" text-white" style="padding: 56px; background: #123567;">
    <div>
      <div class="col-span-12 grid grid-cols-12 gap-8 py-5">
        <div class="flex col-span-4 space-x-14"> 
          <div style="width: 524px; height: auto; gap: 12px;" class="flex flex-col relative"> 
            <button ref="button" class="bg-slate-400 text-white rounded-lg w-[160px] h-[38px] px-6 ">
            OUR SERVICES
            </button>

            <h2 ref="title" class="text-3xl lg:text-4xl font-light text-primary-dark "> 
              Championing the Circular Economy and Re-Commerce
            </h2>
          </div>
        </div>

        <div class="col-span-8 flex items-center">
          <div>
            <h2 ref="content1" class="text-lg">
              HMR’s core operational philosophy and business model naturally fit within the circular economy, and HMR has been a champion of Re-Commerce since its foundation.
            </h2>
          </div>
        </div>
      </div>

      <div class=" py-5">
        <p ref="content2">
          “These two generations are likely to spend more money with their favorite retailers if those retailers sell second hand (HMR Brand) OR HAVE an Environmentally conscious way dealing with returned and excess stock”, especially Apparel re-sale is the go to fashion staple for socially conscious millennials and Gen-Z.
            With global demand increasing continuously, a key lever to reach global environmental targets is through a more efficient use of resources, as 45% of current GHG emissions are attributed to products.
            The circular economy alone can provide a 45% decrease, or 9.3 Gt CO2, by 2050 in just five key materials – steel, cement, plastic, aluminum, food.
            Returned and excess items create an average of over 5B-lbs of landfill waste every year.
            Green Deal models in Retail and Logistics (Re-Commerce) offer growth opportunities due to inevitable shift in consumer preference and government regulations, Green product choices consumers are willing to pay for due to long term environmental & health benefits
        </p>
      </div>

      <div class="py-5">
        <div class="flex items-center pb-5"> 
          <img ref="logo" src="/public/images/ourservice.png" alt="Image 1" > 
          <p ref="content3" class="flex ml-5"> 
            With HMR as the parent company. there is a sustained supply of re-usable and re-salvageable material, connecting the relationship between environment, place, and human potential. Implementing green practices from the onset in terms of Design and Engineering which will impact carbon output and wastage.
          </p>
        </div>
        <div>
          <p ref="content4">
            The modular construction approach.<br>
            Harrington’s Enclave is aiming to be one of the most sustainable inner city developments in Metro Manila.<br>
            Re-salvage : The environmental benefits of Retrofitting shipping containers.
          </p>
        </div>
      </div>

      <div ref="card" class="flex-container py-5">
        <div class="custom-div ">
          <div>
            <span >
              <svg  width="80" height="56" class="mx-auto" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.799805 21C0.799805 9.3975 10.1973 0 21.7998 0H23.1998C26.2973 0 28.7998 2.5025 28.7998 5.6C28.7998 8.6975 26.2973 11.2 23.1998 11.2H21.7998C16.3923 11.2 11.9998 15.5925 11.9998 21V22.4H23.1998C29.3773 22.4 34.3998 27.4225 34.3998 33.6V44.8C34.3998 50.9775 29.3773 56 23.1998 56H11.9998C5.8223 56 0.799805 50.9775 0.799805 44.8V39.2V33.6V21ZM45.5998 21C45.5998 9.3975 54.9973 0 66.5998 0H67.9998C71.0973 0 73.5998 2.5025 73.5998 5.6C73.5998 8.6975 71.0973 11.2 67.9998 11.2H66.5998C61.1923 11.2 56.7998 15.5925 56.7998 21V22.4H67.9998C74.1773 22.4 79.1998 27.4225 79.1998 33.6V44.8C79.1998 50.9775 74.1773 56 67.9998 56H56.7998C50.6223 56 45.5998 50.9775 45.5998 44.8V39.2V33.6V21Z" fill="white" fill-opacity="0.46"/>
              </svg>
            </span>
          </div>
          <div class="mt-5">
            <span class="italic text-left justify-start">
              Sustainability is at the heart of our vision to create the best places. It is not a compliance burden but a strategic differentiator that enables us to focus on making a positive impact in everything that we do. HRL sustainability strategy focuses on three sustainability imperatives that drive our vision. These imperatives are supported by environmental and social focus areas under which we set specific targets. Allowing us to measure progress and performance over time. This report highlights some of the ways in which we put our sustainability vision into practice; minimizing our environmental impact and creating a positive legacy for local communities.
            </span>
          </div>
          <div class="mt-5 flex items-center justify-center">
            <button class="bg-orange-600 text-white rounded-full px-6 py-3">Know More About SDWRealty</button>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const title = ref(null)
const content1 = ref(null)
const content2 = ref(null)
const content3 = ref(null)
const content4 = ref(null)
const card = ref(null)
const button = ref(null)
const logo = ref(null)

setupAnimations([
  {
    element: button,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: content1,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: content2,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: content3,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: content4,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: logo,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: card,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
])
</script>

<style scoped>
.flex-container {
    display: flex; 
    justify-content: center; 
    align-items: center;
    height: 100%; 
}

.custom-div {
  width: 983px; 
  height: auto; 
  padding: 40px; 
  gap: 32px; 
  border-radius: 16px; 
  border: 3px solid transparent;
  border-color: white;
}



</style>
