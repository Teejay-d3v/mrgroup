<template>
  <div class="flex flex-col items-start relative  my-10">
    <!-- Step Number with Horizontal Pins -->
    <div class="flex flex-row items-center mb-4 w-full py-10 ">
      <div class="flex-grow bg-gray-300"></div> 

      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="h-px w-56  bg-gray-300"></div>
      
      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="h-px w-56 bg-gray-300"></div>

      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="h-px w-56 bg-gray-300"></div>

      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="h-px w-56 bg-gray-300"></div>

      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="flex-grow bg-gray-300"></div>
    </div>

    <!-- Right Side: Step Icon and Text -->
    <div class="flex flex-row items-start mt-1 w-full justify-between">
      <div class="flex flex-col items-center w-full text-center pl-6">
        <p class="mb-2">1</p>
        <img 
          src="~/assets/ourservice.png" 
          alt="Step 1 Image" 
          class="h-24 w-24 object-contain"
        />
        
        <h6 class="w-full">Auto Auctions</h6>
      </div>

      <div class="flex flex-col items-center w-full text-center">
        <p class="mb-2">2</p>
        <img 
          src="~/assets/ourservice.png" 
          alt="Step 2 Image" 
          class="h-24 w-24 object-contain"
        />
        <h6 class="w-full">HMRBid.com </h6>
      </div>

      <div class="flex flex-col items-center w-full text-center">
        <p class="mb-2">3</p>
        <img 
          src="~/assets/ourservice.png" 
          alt="Step 3 Image" 
          class="h-24 w-24 object-contain"
        />
        <h6 class="w-full">Machinery Auctions</h6>
      </div>

      <div class="flex flex-col items-center w-full text-center">
        <p class="mb-2">4</p>
        <img 
          src="~/assets/ourservice.png" 
          alt="Step 4 Image" 
          class="h-24 w-24 object-contain"
        />
        <h6 class="w-full">Onsite Auction & Demolition</h6>
      </div>

      <div class="flex flex-col items-center w-full text-center pr-6">
        <p class="mb-2">5</p>
        <img 
          src="~/assets/ourservice.png" 
          alt="Step 5 Image" 
          class="h-24 w-24 object-contain"
        />
        <h6 class="w-full">Real Estates</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Add any additional styles here */
</style>
