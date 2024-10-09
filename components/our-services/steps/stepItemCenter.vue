<template>
<div>
  <section class="hidden md:block">
  <div class="w-full flex justify-center">
    <!-- Stepper -->
    <ul class="relative flex flex-col md:flex-row gap-4 w-full md:w-[90%]">
      <!-- Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-10 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="grow md:grow-0 md:mt-3 pb-5">
          <p class="block ml-10">01</p>
          <div>
            <img src="~/assets/ourservice.png" alt="Left Side Image" class="h-24 w-24 object-contain" />
          </div>
          <h6 class="ml-8">Auto Auctions</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-10 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="grow md:grow-0 md:mt-3 pb-5">
          <span class="block ml-10">02</span>
          <div>
            <img src="~/assets/ourservice.png" alt="Left Side Image" class="h-24 w-24 object-contain" />
          </div>
          <h6 class="ml-8">HMRBid.com</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-10 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="grow md:grow-0 md:mt-3 pb-5">
          <p class="block ml-10">03</p>
          <div>
            <img src="~/assets/ourservice.png" alt="Left Side Image" class="h-24 w-24 object-contain" />
          </div>
          <h6 class="ml-5">Machinery Auctions</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-10 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="grow md:grow-0 md:mt-3 pb-5">
          <p class="block ml-10">04</p>
          <div>
            <img src="~/assets/ourservice.png" alt="Left Side Image" class="h-24 w-24 object-contain" />
          </div>
          <h6 class="ml-8">Onsite Auction & Demolition</h6>
        </div>
      </li>
      <!-- End Item -->

            <!-- Repeat Item -->
            <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-10 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="grow md:grow-0 md:mt-3 pb-5">
          <p class="block ">05</p>
          <div>
            <img src="~/assets/ourservice.png" alt="Left Side Image" class="h-24 w-24 object-contain" />
          </div>
          <h6 class="ml-8">Real
            Estates</h6>
        </div>
      </li>
      <!-- End Item -->
    </ul>
    <!-- End Stepper -->
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
            <p>01</p>
            <h5 class="pb-5 font-semibold">Auto Auctions</h5>
          </div>

          <!-- Second Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Selling & Shipping Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>02</p>
            <h5 class="pb-5 font-semibold">HMRBid.com</h5>
          </div>

          <!-- Third Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Sign-up Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>03</p>
            <h5 class="pb-5 font-semibold">Machinery Auctions</h5>
          </div>
          
          <!-- Fourth Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Tailored Analysis Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>04</p>
            <h5 class="pb-5 font-semibold">Onsite Auction & Demolition</h5>
          </div>

          <!-- fifth Service -->
          <div class="text-center">
            <img 
              src="~/assets/ourservice.png" 
              alt="Tailored Analysis Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>05</p>
            <h5 class="pb-5 font-semibold">Real Estates</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
