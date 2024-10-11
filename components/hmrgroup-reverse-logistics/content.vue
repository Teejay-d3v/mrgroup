<template>
  <div class="my-12 leading-[36px]">
    <!-- First Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center mb-8">
        <!-- Image on the Left -->
        <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"> 
          <img ref="image1" class="object-cover object-center w-full h-auto rounded-l-lg"
          alt="team" src="/public/images/surplus1.png">
        </div>

        <!-- Text on the Right -->
        <div class="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left pl-10">
          <h5 ref="title1" class="py-4 text-gray-900 ">Demolition</h5>
            <p ref="paragraph1">At HMR Reverse Logistics, we bring an expertise in safe and efficient demolition services. Specializing in both residential and commercial projects, we're committed to environmentally responsible practices, ensuring every site is cleared with precision and care. Our team, equipped with industry standard equipment, we prioritize safety and customer satisfaction. We offer comprehensive services, including building demolition, debris removal, and site preparation, all tailored to your specific needs.</p>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center">
        <!-- Text on the Left -->
        <div class="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left pr-5 mb-10 md:mb-0">
          <h5 ref="title2" class="py-4 text-gray-900">Reinstatements</h5>
          <p ref="paragraph2">HMR Reverse Logistics excels in restoring commercial and residential properties to their original state. Our expertise covers structural repairs, feature reinstatement, and fixture replacements, all delivered with meticulous attention to detail. We prioritize eco-friendly practices and ensure a clean, ready-to-use space post-restoration. Trust HMR Reverse Logistics for a restoration service that combines precision, sustainability, and customer satisfaction.</p>
        </div>

        <!-- Image on the Right -->
        <div class="w-full md:w-1/2 flex justify-center"> 
          <img ref="image2" class="object-cover object-center w-full h-auto rounded-r-lg" 
          alt="team" src="/public/images/surplus2.png">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const image1 = ref(null)
const image2 = ref(null)
const title1 = ref(null)
const title2 = ref(null)
const paragraph1 = ref(null)
const paragraph2 = ref(null)

setupAnimations([
  {
    element: title1,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title2,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: image1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: image2,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
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
