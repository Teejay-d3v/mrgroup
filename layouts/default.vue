<template>
  <div>
    <header class="text-white" >
      <!-- <nav class="container mx-auto flex justify-between items-center py-5">
        <NuxtLink to="/" class="text-2xl font-bold text-black ">
          Logo
        </NuxtLink>
        <ul class="flex space-x-6 text-black">
          <li>
            <NuxtLink to="/" class=" " active-class="text-orange-400">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class=" " active-class="text-orange-400">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/our-services" class=" " active-class="text-orange-400">
              Our Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/liquidate" class=" " active-class="text-orange-400">
              Liquidate
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/governance-and-responsibility" class=" " active-class="text-orange-400">
              Governance & Responsibility
            </NuxtLink>
          </li>
          <li class="relative group">
            <NuxtLink to="/hmr-group" class=" hover:text-orange-400" active-class="text-orange-400">
              HMR-Group
            </NuxtLink>
            <ul class="absolute left-0 top-5 mt-1 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-md w-48 z-50">
              <li>
                <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2  hover:bg-blue-950 hover:text-white" >
                  Reverse Logistics
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2  hover:bg-blue-950 hover:text-white" >
                  Trading Haus
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2  hover:bg-blue-950 hover:text-white" >
                  Auctions
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2   hover:bg-blue-950 hover:text-white" >
                  Envirocycle
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li>
            <NuxtLink to="/" class=" " active-class="text-orange-400">
              Contact Us
            </NuxtLink>
          </li>
        </ul>
        <button class="custom-button text-white">
          Button
        </button>
      </nav> -->
      <Header />  
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import Header from "../components/header.vue"
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}

.custom-button {
  width: 169px;
  height: 50px;
  padding: 8px 0;
  gap: 8px;
  border-radius: 8px;
  background: #13376B;
}
</style>
