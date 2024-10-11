<template>
  <section>
    <!-- Background Section -->
    <div class="custom-bg-image text-white">
      <!-- Navigation Bar -->
      <div class="container mx-auto px-4 mt-10 flex justify-between items-center text-white h-[109px] rounded-lg bg-white shadow-lg">
        <!-- Brand/Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-black">
          Logo
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Dropdown Menu -->
      <div v-if="isMenuOpen" class="bg-white text-black lg:hidden z-50 rounded-xl">
        <ul class="flex flex-col space-y-2 p-4">
          <li>
            <NuxtLink to="/" class="nux-link" active-class="text-orange-400">
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
          <li class="relative group">
            <NuxtLink to="/hmr-group" class="nux-link" active-class="text-orange-400">
              HMR Group
            </NuxtLink>
            <!-- Dropdown for HMR Group -->
            <ul class="absolute left-0 mt-1 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-lg w-48 z-50">
              <li>
                <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2 hover:text-orange-600">
                  Reverse Logistics
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2 hover:text-orange-600">
                  Trading Haus
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2 hover:text-orange-600">
                  Auctions
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2 hover:text-orange-600">
                  Envirocycle
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/contact-us" class="nux-link" active-class="text-orange-400">
              Contact Us
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="container mx-auto flex justify-center items-center h-[891px]">
        <div class="text-center">
          <h1 class="mb-4 text-4xl sm:text-5xl lg:text-6xl  px-4 font-extrabold shadow-text font-display">
            Maximize the Value of Surplus with HMR Reverse Logistics
          </h1>
          <p class="text-sm lg:text-base mb-10 px-4 sm:px-14 lg:px-32 xl:px-40 2xl:px-72">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fuga praesentium laborum laboriosam cum. Voluptates hic quidem vitae, modi voluptate possimus eum, nihil.
          </p>
          <div class="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <button class="border hover:bg-orange-600 text-white py-3 px-6 lg:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
            <button class="border hover:bg-orange-600 text-white py-3 px-6 lg:px-8 rounded transition duration-300 ease-in-out">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);

// Debugging log (optional)
// watch(isMenuOpen, (newValue) => {
//   console.log('Menu open:', newValue);
// });
</script>

<style scoped>
.custom-bg-image {
  height: 1000px;  
  width: 100%;
  background-image: url('/images/header.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
}

.nux-link {
  padding: 12px 16px;
  display: block; 
  font-family: 'Poppins', sans-serif; 
  font-size: 16px;
  font-weight: 400; 
  line-height: 21px; 
  text-align: left;
}

@media (max-width: 768px) {
  .custom-bg-image {
    height: auto;
  }
}
</style>
