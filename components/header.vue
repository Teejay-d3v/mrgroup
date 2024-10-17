<template>
  <section>
    <!-- Background Section -->
    <div class="custom-bg-image text-white  ">
      <!-- Navigation Bar -->
      <div class="container mx-auto px-10 mt-10 flex justify-between items-center text-white w-[1600px] h-[109px] rounded-lg bg-white shadow-lg">
        <!-- Brand/Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-black">
          Logo
        </NuxtLink>

        <!-- Menu Items -->
        <ul class="flex space-x-6 text-black">
          <li>
            <NuxtLink to="/" class="nux-link" active-class="text-orange-400 ">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="nux-link" active-class="text-orange-400">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/our-services" class="nux-link" active-class="text-orange-400">
              Our Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/liquidate" class="nux-link" active-class="text-orange-400">
              Liquidate
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/governance-and-responsibility" class="nux-link" active-class="text-orange-400">
              Governance & Responsibility
            </NuxtLink>
          </li>
          <!-- HMR Group Dropdown -->
          <li class="relative group">
            <NuxtLink to="/hmr-group" class="nux-link" active-class="text-orange-400">
              HMR Group
            </NuxtLink>

            <!-- Dropdown menu -->
            <ul class="absolute left-0 top-5 mt-1 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-md w-48 z-50">
              <li>
                <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2  hover:text-orange-600">
                  Reverse Logistics
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2  hover:text-orange-600">
                  Trading Haus
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2  hover:text-orange-600">
                  Auctions
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2  hover:text-orange-600">
                  Envirocycle
                </NuxtLink>
              </li>
            </ul>
          </li>
          <!-- <li>
            <NuxtLink to="/" class="nux-link" active-class="text-orange-400">
              Contact Us
            </NuxtLink>
          </li> -->
        </ul>

        <!-- Button -->
        <button class="custom-button text-white">
          Button
        </button>
      </div>


      <div class="container mx-auto" style="width: 1600px; height: 891px; display: flex; justify-content: center; align-items: center; ">
        <div class="text-center ">
          <h1 class="mb-4 text-5xl sm:text-6xl lg:text-7xl sm:px-14 lg:px-32 xl:px-40 2xl:px-72 font-extrabold shadow-text font-display">
            Maximize the Value of surplus with HMR Reverse Logistics
          </h1>
          <p class="text-sm md:text-base justify-center text-center mb-10 px-10 sm:px-14 lg:px-32 xl:px-40 2xl:px-72">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fuga praesentium laborum laboriosam cum. Voluptates hic quidem vitae, modi voluptate possimus eum, nihil, praesentium laborum laboriosam cum. Voluptates hic quidem vitae, modi voluptate possimus eum, nihil,
          </p>
          <div class="flex space-x-4 justify-center">
            <button class="border hover:bg-orange-600 text-white py-3 px-6 md:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
            <button class="border hover:bg-orange-600 text-white py-3 px-6 md:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
          </div>
        </div>
      </div>



    </div>
  </section>
</template>

<script setup>
// Your script logic here
</script>

<style scoped>
.custom-bg-image {
  height: 1000px;  
  width: 100%;
  background-image: url('/public/images/header.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
}
.custom-button {
  width: 169px;
  height: 50px;
  padding: 8px 0;
  gap: 8px;
  border-radius: 8px;
  background: #13376B;
}

.nux-link {
  width: 90px;
  height: 21px; 
  padding: 0 24px; 
  font-size: 14px; 
  font-weight: 400; 
  line-height: 21px; 
  text-align: left;
}

</style>
