<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white">
    <div class="custom-bg col-span-12">
      <section class="body-font">
        <div class="container mx-auto p-4 sm:p-6 md:p-10">
          <h1 class="custom-h1 text-center mb-8">Our Services:</h1>
          <div class="flex flex-wrap justify-center">
            <!-- Card 1 -->
            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col  min-h-[428px]">
                <div class="flex justify-center mt-10">
                  <img class="w-[293.56px] " src="@/public/images/trading-haus.png" alt="Auto Auctions">
                </div>
                <div class="p-14">
                <h1 class="custom-h1 text-left mb-4">Trading Haus</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Destination Discount Retail Stores</li>
                  <li>Full Range Of Products Sourced By HPI</li>
                  <li>Consignment Program To Suppliers</li>
                </ul>
                </div>
              </div>
            </div>

            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col  min-h-[428px]">
                <div class="flex justify-center mt-8">
                  <img class="w-[164.17px] h-[67.07px] " src="@/public/images/trading-haus2.png" alt="Auto Auctions">
                </div>
                <div class="p-14">
                <h1 class="custom-h1 text-left mb-4">SOS</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Smaller Outlets In Remote Locations Across The Philippines</li>
                  <li>Franchise Model Reduces Risk And Lowers CapEx Requirements</li>
                </ul>
                </div>
              </div>
            </div>


            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col  min-h-[428px]">
                <div class="flex justify-center ">
                  <img class="w-[103.81px] mt-5" src="@/public/images/trading-haus3.png" alt="Auto Auctions">
                </div>
                <div class="p-14">
                <h1 class="custom-h1 text-left mb-4">HMR Online</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Business-2-Consumer Digital Platform</li>
                  <li>Convenient Shopping Features</li>
                  <li>Remote Platform For Consignors</li>
                </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.custom-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('/public/images/supply-change.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.custom-h1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
</style>
