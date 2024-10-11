<template>
  <div>
    <section class="body-font">
      <div>
        <div class="flex flex-col items-center text-center p-4">
          <div class="my-5 max-w-5xl w-full">
            <h1 ref="title"> What is HMRGroup?</h1>
          </div>
          <div class="max-w-5xl w-full">
            <p ref="paragraph" class="text-base md:text-lg lg:text-xl">
              HMR Group is a diverse group of companies specializing in various industries, including auctions, retail, environmental recycling, and asset management. With decades of experience, HMR Group offers comprehensive solutions ranging from live and online auctions, retail sales, and asset liquidation to sustainable recycling of electronic waste and surplus items. They also handle specialized services such as auto auctions, heavy machinery sales, and real estate management, making them a trusted partner for businesses and individuals looking to buy, sell, or recycle assets effectively.
            </p>
          </div>
        </div>
      </div>

      <div class="container px-5 pb-24 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-2">
          <div
              ref="card"
                class="p-4 w-[384px] h-[601px]"
                v-for="(item, index) in items"
                :key="index"
              >
            <div class="rounded-lg h-full overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full custom-image"
                :src="item.image"
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{{ item.title }}</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom-layout',
    name: 'HMR Group',
})

import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const card = ref([])
const title = ref(null)
const paragraph = ref(null)

setupAnimations([
  {
    element: card.value,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.2, easing: 'ease-out' }
  },
    {
    element: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },

])


const items = [
  {
    image: 'images/hrm-group-content.png',
    title: 'Shooting Stars'
  },
  {
    image: 'images/hrm-group-content2.png',
    title: 'The Catalyzer'
  },
  {
    image: 'images/hrm-group-content3.png',
    title: 'The 400 Blows'
  },
  {
    image: 'images/hrm-group-content4.png',
    title: 'The 400 Blows'
  }
];
</script>

<style scoped>
.custom-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

}
</style>
