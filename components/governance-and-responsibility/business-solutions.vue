<template>
  <div class="grid grid-cols-12 gap-8 mt-10 md:mx-10 p-8">
    <div class="col-span-12 flex justify-center items-center">
      <h3 class="leading-[36px]">Our Core Business Solutions</h3>
    </div>

    <div class="col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 leading-[36px]">
      <div class="border rounded-lg p-6 flex flex-col h-full">
        <h1 class="text-lg font-semibold mb-2">Sales Channels</h1>
        <ul class="list-disc list-inside">
          <li v-for="(item, index) in salesChannelData" ref="salesChannel" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="border rounded-lg p-6 flex flex-col h-full">
        <h1 class="text-lg font-semibold mb-2">Recycling</h1>
        <ul class="list-disc list-inside">
          <li v-for="(item, index) in recyclingData" ref="recycling" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="border rounded-lg p-6 flex flex-col h-full">
        <h1 class="text-lg font-semibold mb-2">Reverse Logistics</h1>
        <ul class="list-disc list-inside">
          <li v-for="(item, index) in reverseLogisticData" ref="reverseLogistics" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="border rounded-lg p-6 flex flex-col h-full">
        <h1 class="text-lg font-semibold mb-2">Auctions</h1>
        <ul class="list-disc list-inside">
          <li v-for="(item, index) in auctionData" ref="auctions" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const salesChannel = ref([]);
const recycling = ref([]);
const reverseLogistics = ref([]);
const auctions = ref([]);

const salesChannelData = [
  "10 strategically placed stores around the PH",
  "Ecommerce website HMR.ph",
  "Recycling Center: Envirocycle",
  "Wholesale",
];

const recyclingData = [
  "Assured destructions",
  "ITAD recovery and recycling",
  "Refurbishment and Re-commercialization",
  "Community waste management services",
  "Transport and proper handling of hazardous waste",
];

const reverseLogisticData = [
  "Inventory Management and Returns Management",
  "Warehousing",
  "Transportation",
  "Refurbishment",
  "Repair",
  "Repackaging",
  "Purchasing",
  "Wholesale",
];

const auctionData = [
  "Inventory control and manifesting",
  "Marketing",
  "Valuations",
  "Online, Offline, On-site Auctions",
];

setupAnimations([
  

  {
    elements: salesChannel.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: recycling.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: reverseLogistics.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: auctions.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
])

</script>