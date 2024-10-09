<template>
  <div class="flex flex-col items-center justify-center text-white text-center ">
    <div class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">

        <div class="flex text-left mb-20 ">
          <h1 class="text-gray-900 mb-4">HMR Group Business Units</h1>
          <button class="flex ml-auto border-2 py-2 px-8 focus:outline-none rounded-lg text-lg text-black items-center">
            Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M7 17l10-10M17 17V7h-10" />
            </svg>
          </button>
        </div>

      <section class="my-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- First Card -->
          <div class="flex flex-col h-full p-6 gap-4 border rounded-[12px] text-left shadow-md">
            <div class="flex justify-center mb-4">
              <img alt="content" class="object-cover w-32 h-32 rounded-full" src="https://dummyimage.com/100x100/c9c9c9/000000">
            </div>
            <div>
              <h4 class="text-gray-900 mb-3">Reverse Logistics</h4>
              <p class="leading-relaxed text-base">At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions.</p>
            </div>
            <div class="border-t border-opacity-0 mt-4">
              <a class="text-orange-500 inline-flex items-center mt-3" style="width: 100%;">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Second Card -->
          <div class="flex flex-col h-full p-6 gap-4 border rounded-[12px] text-left shadow-md">
            <div class="flex justify-center mb-4">
              <img alt="content" class="object-cover w-32 h-32 rounded-full" src="https://dummyimage.com/100x100/c9c9c9/000000">
            </div>
            <div>
              <h4 class="text-gray-900 mb-3">Trading Haus</h4>
              <p class="leading-relaxed text-base">Our Trading Haus store offers a wide range of general merchandise, providing quality products to meet your retail needs at competitive prices with exceptional service.</p>
            </div>
            <div class="border-t border-opacity-0 mt-4">
              <a class="text-orange-500 inline-flex items-center mt-3" style="width: 100%;">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Third Card -->
          <div class="flex flex-col h-full p-6 gap-4 border rounded-[12px] text-left shadow-md">
            <div class="flex justify-center mb-4">
              <img alt="content" class="object-cover w-32 h-32 rounded-full" src="https://dummyimage.com/100x100/c9c9c9/000000">
            </div>
            <div>
              <h4 class="text-gray-900 mb-3">Auctions</h4>
              <p class="leading-relaxed text-base">HMR Auction facilitates the sale of items, including automotive and machinery, through a transparent and efficient auction process.</p>
            </div>
            <div class="border-t border-opacity-0 mt-4">
              <a class="text-orange-500 inline-flex items-center mt-3" style="width: 100%;">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>



      <section class="mt-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- First Card -->
          <div class="flex flex-col col-span-12 lg:col-span-4 h-auto p-5 lg:p-10 gap-4 border rounded-[12px] text-left shadow-md">
            <div class="flex justify-center mb-4">
              <img alt="content" class="object-cover object-center w-32 h-32" src="https://dummyimage.com/100x100/c9c9c9/000000">
            </div>
            <h2 class="text-gray-900 mb-3 text-lg lg:text-2xl font-semibold">Reverse Logistics</h2>
            <p class="leading-relaxed text-base">At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions.</p>
            <div class="mt-4">
              <a class="text-orange-500 inline-flex items-center mt-3" style="width: 100%;">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Image Section -->
            <div class="col-span-12 lg:col-span-8 relative mb-16 lg:mb-0 order-2 lg:order-1">
              <div class="relative z-20">
                <img
                  src="/public/images/enviro1.png"
                  class="w-[90%]  h-auto rounded-lg shadow-lg opacity-100"  
                  alt="Environment Image 1"
                />
                <!-- Second Card -->
                <img
                  src="/public/images/enviro2.png"
                  class="w-[40%] h-[60%] max-w-[418px] rounded-lg shadow-lg absolute top-64 right-[10%] transform translate-x-[25%] -translate-y-1/5 opacity-100" 
                  alt="Environment Image 2"
                />
                </div>
              </div>
            </div>
          </section>

   
      </div>
    </div>
  </div>




</template>
  
<script setup>

</script>
<style scoped>
.p-custom {
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
}

.border-radius-custom {
  border-radius: 12px; 
}

.inner-border {
  border-radius: 12px; /* Ensure the image has a border radius */
  box-shadow: inset 4px #ff0000; /* Inner border effect; adjust thickness and color as needed */
}
</style>