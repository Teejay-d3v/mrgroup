<template>
  <div class="flex flex-col items-center justify-center text-white text-center">
    <section class="text-gray-600 body-font">
      <div class="container mx-auto px-4 py-24">
        <div class="flex flex-col md:flex-row md:justify-between mb-20">
          <h1 class="text-gray-900 mb-4 text-2xl md:text-3xl">HMR Group Business Units</h1>
          <button class="flex ml-auto border-2 py-2 px-8 focus:outline-none rounded text-lg text-black items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17l10-10M17 17V7h-10" />
            </svg>
          </button>
        </div>

        <!-- Card Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card Template -->
          <Card 
            title="Reverse Logistics"
            description="At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions."
            imgSrc="https://dummyimage.com/100x100/c9c9c9/000000"
          />
          <Card 
            title="Trading Haus"
            description="Our Trading Haus store offers a wide range of general merchandise, providing quality products to meet your retail needs at competitive prices with exceptional service."
            imgSrc="https://dummyimage.com/100x100/c9c9c9/000000"
          />
          <Card 
            title="Auctions"
            description="HMR Auction facilitates the sale of items, including automotive and machinery, through a transparent and efficient auction process."
            imgSrc="https://dummyimage.com/100x100/c9c9c9/000000"
          />

          <Card 
            title="Reverse Logistics"
            description="At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions."
            imgSrc="https://dummyimage.com/100x100/c9c9c9/000000"
          />
          <div class="col-span-2">
            <div class="relative flex-1">
            <div class="relative flex justify-center">
              <img
                src="/images/enviro1.png"
                class="w-full h-auto rounded-lg shadow-lg"
                alt="Enviro Image"
              />
            </div>
            <div class="absolute bottom-0 right-0">
              <img
                src="/images//enviro2.png"
                class="w-32 h-auto rounded-lg"
                alt="Enviro Image Overlay"
              />
            </div>
          </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="flex flex-col md:flex-row mt-5 gap-6">
          <!-- Card 1 -->

          <!-- Image with Overlay -->
          <div class="relative flex-1">
            <div class="relative flex justify-center">
              <img
                src="/images/enviro1.png"
                class="w-full h-auto rounded-lg shadow-lg"
                alt="Enviro Image"
              />
            </div>
            <div class="absolute bottom-0 right-0">
              <img
                src="/images//enviro2.png"
                class="w-32 h-auto rounded-lg"
                alt="Enviro Image Overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Card from '../components/Card.vue'; 
</script>

<style scoped>
.p-custom {
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
}
</style>
