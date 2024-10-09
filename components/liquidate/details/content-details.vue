<template>
  <div>
    <section>
      <div class="grid grid-cols-1 md:grid-cols-12 ml-2 md:ml-[5%] mt-10 ">
        <div class="col-span-1 md:col-span-12 grid">
          <div class="text-center md:text-left">
            <h4>Our Liquidation Process</h4>
          </div>
        </div>
        <div class="col-span-1 md:col-span-6"></div>
      </div>
    </section>
<!-- Desktop -->
    <section class="hidden md:block">
      <div class="flex flex-col lg:flex-row items-start relative w-full">
        <div class="flex flex-col justify-center items-end lg:w-1/2 w-full pr-4 lg:pr-8">
          <div>
            <img 
              src="~/assets/ourservice.png" 
              alt="Left Side Image" 
              class="h-24 w-24 object-contain"
            />
          </div>
          <div class="text-right pt-16 custom-text-box">
            <h5>List</h5>
            <p class="text-gray-600">Add the items or inventory you’re looking to sell with us. We only need basic information to set up your listings.</p>
          </div>
          <div class="pt-16">
            <img 
              src="~/assets/ourservice.png" 
              alt="Left Side Image" 
              class="h-24 w-24 object-contain"
            />
          </div>
          <div class="text-right pt-20 custom-text-box">
            <h5>Selling & Shipping</h5>
            <p class="text-gray-600">Once everything is set up, we begin liquidating your inventory and assets. We are also happy to take care of all re-packaging and shipping services you might need in order to get your stock to the highest bidder.</p>
          </div>
        </div>

        <!-- Step Number with Vertical Lines -->
        <div class="flex flex-col items-center">
          <!-- Vertical Lines -->
          <div class="w-px bg-gray-300"></div>
          <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
            1
          </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-10 bg-gray-300"></div>
          <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
            2
          </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-10 bg-gray-300"></div>
          <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
            3
          </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-10 bg-gray-300"></div>
          <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
            4
          </div>
          <div class="w-px bg-gray-300 mt-2"></div>
        </div>


        <!-- Right Side: Step Icon and Text -->
        <div class="flex flex-col justify-center items-start lg:w-1/2 w-full ml-4 lg:ml-8">
          <div class="text-left custom-text-box">
            <h5>Sign-up</h5>
            <p class="text-gray-600">Create your account in a few easy steps and gain access to our auction platform with thousands of registered buyers.</p>
          </div>
          <div class="pt-20">
            <img 
              src="~/assets/ourservice.png" 
              alt="Right Side Image" 
              class="h-24 w-24 object-contain"
            />
          </div>

          <div class="text-left pt-16 custom-text-box">
            <h5>Tailored Analysis</h5>
            <p class="text-gray-600">Inspect, repair, and restore products to like-new condition by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value.</p>
          </div>

          <div class="pt-14">
            <img 
              src="~/assets/ourservice.png" 
              alt="Right Side Image" 
              class="h-24 w-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>




<!-- Mobile -->
    <section class="block md:hidden my-10">
      <div class="flex flex-col justify-center items-start w-full px-4">
        <div class="flex flex-col justify-center items-center w-full space-y-8">
          <!-- First Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="List Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <h5 class="pt-5 font-semibold">List</h5>
            <p class="text-gray-600">Add the items or inventory you’re looking to sell with us. We only need basic information to set up your listings.</p>
          </div>

          <!-- Second Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Selling & Shipping Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <h5 class="pt-5 font-semibold">Selling & Shipping</h5>
            <p class="text-gray-600">We begin liquidating your inventory and take care of all re-packaging and shipping services to get your stock to the highest bidder.</p>
          </div>

          <!-- Third Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Sign-up Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <h5 class="pt-5 font-semibold">Sign-up</h5>
            <p class="text-gray-600">Create your account in a few easy steps and gain access to our auction platform with thousands of registered buyers.</p>
          </div>

          <!-- Fourth Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Tailored Analysis Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <h5 class="pt-5 font-semibold">Tailored Analysis</h5>
            <p class="text-gray-600">Inspect, repair, and restore products by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value.</p>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script setup>

</script>

<style scoped>
.custom-text-box {
  max-width: 633px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .custom-text-box {
    margin-left: 0;
    margin-right: 0;
  }
}






</style>
