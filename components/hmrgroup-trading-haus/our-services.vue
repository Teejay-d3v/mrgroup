<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white">
    <div class="custom-bg col-span-12">
      <section class="body-font">
        <div class="container mx-auto p-10">
          <h1 class="custom-h1 ">Our Services:</h1>
          <div class="flex flex-wrap justify-center">
            <div class="p-2 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img class="mx-auto " style="width: 293.56px; height: 53.56px;" src="~/assets/trading-haus.png" alt="image 1">
                </div>
                <div class="p-6">
                  <h1 class="custom-h1">Trading Haus</h1>
                  
                  <ul class="list-disc list-inside">
                    <li>Destination Discount Retail Stores</li>
                    <li>Full Range Of Products Sourced By HPI</li>
                    <li>Consignment Program To Suppliers</li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img class="mx-auto" style="width: 164.17px; height: 53.56px;" src="~/assets/trading-haus2.png" alt="image 2">
                </div>
                <div class="p-6 ">
                  <h1 class="custom-h1">SOS</h1>

                  <ul class="list-disc list-inside">
                    <li>Smaller Outlets In Remote Locations Across The Philippines</li>
                    <li>Franchise Model Reduces Risk And Lowers CapEx Requirements</li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img class="mx-auto" style="width: 103.81px; height: 98.64px;" src="~/assets/trading-haus3.png" alt="image 3">
                </div>
                <div class="p-6">
                  <h1 class="custom-h1">HMR Online</h1>
                  <ul class="list-disc list-inside">
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
    url('~/assets/supply-change.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 1,728px;
}
.custom-h1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
}
</style>
