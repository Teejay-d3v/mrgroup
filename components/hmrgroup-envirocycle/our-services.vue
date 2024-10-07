<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white">
    <div class="custom-bg col-span-12">
      <section class="body-font">
        <div class="container mx-auto p-10">
          <h1 class="custom-h1">Our Services:</h1>
          <div class="flex flex-wrap justify-center">
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 1">
                </div>
                <div class="p-6">
                  <h1 class="custom-h1">Certifications</h1>
                  
                  <ul class="list-disc list-inside">
                    <li>Microsoft Authorized Refurbisher</li>
                    <li>ISO 1401 Registered E-Waste Treater</li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/2">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-10 bg-slate-200 text-black">
                <div>
                  <img  style="width: 100px; height: 100px;" src="https://dummyimage.com/100x100/c4c4c4/000000.png" alt="image 2">
                </div>
                <div class="p-6 ">
                  <h1 class="custom-h1">SOS</h1>                
                  <ul class="list-disc list-inside">
                    <li>Assured Destruction</li>
                    <li>Disposal Of Non-Performing Assets</li>
                    <li>Refurbishment And Re-Commercialization</li>
                    <li>Onsite Waste Management Services</li>
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
