<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white">
    <div class="custom-bg col-span-12">
      <section class="body-font">
        <div class="container mx-auto p-10">
          <h1 class="custom-h1 ">Our Services:</h1>
          <div class="flex flex-wrap justify-center">
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 1">
                </div>
                <div >
                  <h1 class="custom-h1">Auto Auctions</h1>
                  
                  <ul class="list-disc list-inside">
                    <li>Auto Auctions For Corporate Fleets And Bank Repossessions</li>
                    <li>Repair And Refurbishment Services</li>
                    <li>Motorcycle Repossession Management</li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 2">
                </div>
                <div class=" ">
                  <h1 class="custom-h1">Machinery Auctions</h1>

                  <ul class="list-disc list-inside">
                    <li> Production Equipment And Construction Machinery</li>
                    <li>Repair And Refurbishment Services</li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 3">
                </div>
                <div >
                  <h1 class="custom-h1">Online Bidding</h1>
                  <ul class="list-disc list-inside">
                    <li>Real-Time Online Bidding Platform</li>
                    <li>Wide Range Of Assets, Incl. Real Estate</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 4">
                </div>
                <div >
                  <h1 class="custom-h1">Real Estate</h1>
                  <ul class="list-disc list-inside">
                    <li>Real Estate Requirements From Residential And Condominiums, Houses And Lots, Through Commercial Properties.</li>
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
