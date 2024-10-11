<template>
  <div class="grid grid-cols-12 gap-6  text-white">
    <div class="col-span-12 leading-[36px]">
      <section class="body-font">
        <div class="container mx-auto p-10">
          <h1 class="custom-h1">Our Services:</h1>
          <div class="flex flex-wrap">

            <div class="p-2 md:w-1/3 w-full">
                <div class="h-full rounded-lg overflow-hidden">
                  <ul>
                    <li ref="services1" v-for="(service, index) in servicesData1" :key="index" class="flex items-center mb-2 lg:mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-orange-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>{{ service }}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-2 md:w-1/3 w-full">
                <div class="h-full rounded-lg overflow-hidden">
                  <ul>
                    <li ref="services2" v-for="(service, index) in servicesData2" :key="index" class="flex items-center mb-2 lg:mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-orange-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>{{ service }}</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-2 md:w-1/3 w-full">
                <div class="h-full rounded-lg overflow-hidden">
                  <ul>
                    <li ref="services3" v-for="(service, index) in servicesData3" :key="index" class="flex items-center mb-2 lg:mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-orange-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>{{ service }}</p>
                    </li>
                  </ul>
                </div>
              </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const services1 = ref([])
const services2 = ref([])
const services3 = ref([])


const servicesData1 = [
  "Building Demolition",
  "Stripping of Interiors",
  "Interior Reinstatement",
  "TSD (Treatment, Storage, Disposal) Provider",
  "HVAC System Restoration",
  "Compliance and Safety Checks"
];

const servicesData2 = [
  "Selective Demolition",
  "Site Clearance",
  "Hazardous Material Handling",
  "Licensed Fleet of Trucks with PTT and certified personnel",
  "Flooring and Ceiling Repair"
];

const servicesData3 = [
  "Professional Cleaning Services",
  "Site Visits for Planning and Assessment",
  "Insured Works",
  "Post-Construction Clean Up",
  "Site Remediation",
  "Building Assessment and Reporting"
];


setupAnimations([
  {
    element: services1.value,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.2, easing: 'ease-out' }
  },
  {
    element: services2.value,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.2, easing: 'ease-out' }
  },
  {
    element: services3.value,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.2, easing: 'ease-out' }
  },
])

</script>

<style scoped>
.custom-h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
