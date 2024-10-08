<template>
  <nav class="container mx-auto flex flex-col md:flex-row justify-between items-center py-5 relative">
    <!-- Brand/Logo -->
    <NuxtLink to="/" class="text-2xl font-bold text-black mb-4 md:mb-0">
      Logo
    </NuxtLink>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Menu Items -->
    <ul :class="{'flex flex-col md:flex-row': true, 'hidden': !isMenuOpen, 'md:flex': isMenuOpen}" class="flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black absolute md:static bg-white md:bg-transparent w-full md:w-auto z-50 md:z-auto transition-all duration-300 ease-in-out">
      <li>
        <NuxtLink to="/" active-class="text-orange-400" class="block px-4 py-2">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" active-class="text-orange-400" class="block px-4 py-2">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/our-services" active-class="text-orange-400" class="block px-4 py-2">
          Our Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/liquidate" active-class="text-orange-400" class="block px-4 py-2">
          Liquidate
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/governance-and-responsibility" active-class="text-orange-400" class="block px-4 py-2">
          Governance & Responsibility
        </NuxtLink>
      </li>

      <!-- HMR Group Dropdown -->
      <li class="relative group">
        <NuxtLink to="/hmr-group" class="block px-4 py-2 hover:text-orange-400" active-class="text-orange-400">
          HMR Group
        </NuxtLink>
        <!-- Dropdown menu -->
        <ul v-if="showDropdown" class="absolute left-0 top-full mt-1 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-md w-48 z-50">
          <li>
            <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2 hover:bg-blue-950 hover:text-white">
              Reverse Logistics
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2 hover:bg-blue-950 hover:text-white">
              Trading Haus
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2 hover:bg-blue-950 hover:text-white">
              Auctions
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2 hover:bg-blue-950 hover:text-white">
              Envirocycle
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink to="/contact" active-class="text-orange-400" class="block px-4 py-2">
          Contact Us
        </NuxtLink>
      </li>
    </ul>

    <!-- Desktop Button -->
    <button class="hidden lg:block custom-button text-white mt-4 md:mt-0">
      Button
    </button>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-0 left-0 right-0 bg-white shadow-lg p-4 rounded-lg md:hidden">
      <ul class="flex flex-col space-y-2">
        <li>
          <NuxtLink to="/" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/our-services" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            Our Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/liquidate" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            Liquidate
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/governance-and-responsibility" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            Governance & Responsibility
          </NuxtLink>
        </li>
        <li class="relative group">
          <NuxtLink to="/hmr-group" class="block px-4 py-2 hover:text-orange-400" @click="toggleDropdown">
            HMR Group
          </NuxtLink>
          <ul v-if="showDropdown" class="absolute left-0 mt-1 bg-white text-blue-950 shadow-lg rounded-md w-48 z-50">
            <li>
              <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2 hover:bg-blue-950 hover:text-white" @click="closeMenu">
                Reverse Logistics
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2 hover:bg-blue-950 hover:text-white" @click="closeMenu">
                Trading Haus
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2 hover:bg-blue-950 hover:text-white" @click="closeMenu">
                Auctions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2 hover:bg-blue-950 hover:text-white" @click="closeMenu">
                Envirocycle
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/contact" active-class="text-orange-400" @click="closeMenu" class="block px-4 py-2">
            Contact Us
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const showDropdown = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  showDropdown.value = false; // Close dropdown when opening the menu
};

const closeMenu = () => {
  isMenuOpen.value = false;
  showDropdown.value = false; // Close dropdown when menu is closed
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<style scoped>
/* Add custom styles if necessary */
.custom-button {
  width: 169px;
  height: 50px;
  padding: 8px 0;
  gap: 8px;
  border-radius: 8px;
  background: #13376B;
}
</style>
