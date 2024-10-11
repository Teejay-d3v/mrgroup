<template>
  <div class="grid grid-cols-12 gap-8 mt-10 md:mx-10 p-8">
    <div class="col-span-12 flex justify-center items-center">
      <h2 ref="title" class="sub-title">Our Core Business Solutions</h2>
    </div>

    <div class="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg-20 leading-[36px]">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <h4 ref="subtitle">{{ card.title }}</h4>
        <ul class="list-disc list-inside">
          <li v-for="(item, itemIndex) in card.data" :key="itemIndex" ref="list" class="custom-list">{{ item }}</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const list = ref([]);
const title = ref(null);
const subtitle =ref([])

const cards = ref([
  {
    title: 'Sales Channels',
    data: ['10 strategically placed stores around the PH', 'Ecommerce website HMR.ph', 'Recycling Center: Envirocycle', 'Wholesale'],
  },
  {
    title: 'Recycling',
    data: ['Assured destructions', 'ITAD recovery and recycling', 'Refurbishment and Re-commercialization', 'Community waste management services', 'Transport and proper handling of hazardous waste'],
  },
  {
    title: 'Reverse Logistics',
    data: ['Inventory Management and Returns Management', 'Warehousing', 'Transportation', 'Refurbishment', 'Repair', 'Repackaging', 'Purchasing', 'Wholesale'],
  },
  {
    title: 'Auctions',
    data: ['Inventory control and manifesting', 'Marketing', 'Valuations', 'Online, Offline, On-site Auctions'],
  },
]);


setupAnimations([
  {
    elements: title,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: subtitle.value,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: list.value,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.5, stagger: 0.15, easing: 'ease-out' }
  },
])

</script>
<style scoped>
.card {
  border: none;
  border-radius: 0.5rem; 
  padding: 1.5rem; 
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  transform: scale(1);
  transition: all 0.3s ease-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15); 
}

.custom-list{
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
}
</style>