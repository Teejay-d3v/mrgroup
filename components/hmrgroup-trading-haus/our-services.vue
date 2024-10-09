<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white">
    <div class="custom-bg col-span-12">
      <section class="body-font">
        <div class="container mx-auto p-4 sm:p-6 md:p-10">
          <h1 class="custom-h1 text-center mb-8">Our Services:</h1>
          <div class="flex flex-wrap justify-center">
            <!-- Card 1 -->
            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col justify-between min-h-[300px]">
                <div class="flex justify-center mb-4">
                  <img class="w-24 h-24" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="Auto Auctions">
                </div>
                <h1 class="custom-h1 text-center mb-4">Auto Auctions</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Auto Auctions For Corporate Fleets And Bank Repossessions</li>
                  <li>Repair And Refurbishment Services</li>
                  <li>Motorcycle Repossession Management</li>
                </ul>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col justify-between min-h-[300px]">
                <div class="flex justify-center mb-4">
                  <img class="w-24 h-24" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="Machinery Auctions">
                </div>
                <h1 class="custom-h1 text-center mb-4">Machinery Auctions</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Production Equipment And Construction Machinery</li>
                  <li>Repair And Refurbishment Services</li>
                </ul>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col justify-between min-h-[300px]">
                <div class="flex justify-center mb-4">
                  <img class="w-24 h-24" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="Online Bidding">
                </div>
                <h1 class="custom-h1 text-center mb-4">Online Bidding</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Real-Time Online Bidding Platform</li>
                  <li>Wide Range Of Assets, Incl. Real Estate</li>
                </ul>
              </div>
            </div>
            <!-- Card 4 -->
            <div class="p-2 w-full sm:w-full md:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-6 bg-slate-200 text-black flex flex-col justify-between min-h-[300px]">
                <div class="flex justify-center mb-4">
                  <img class="w-24 h-24" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="Real Estate">
                </div>
                <h1 class="custom-h1 text-center mb-4">Real Estate</h1>
                <ul class="list-disc list-inside flex-grow">
                  <li>Residential, Condominiums, Houses, Lots, Commercial Properties</li>
                </ul>
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
