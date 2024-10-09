<template>
  <div>
    <section class="text-white">
      <div class="custom-bg-image text-white">

        <!-- Brand/Logo -->
        <div class="container mx-auto px-4 flex justify-between items-center text-white h-[109px] rounded-lg bg-white shadow-lg">
          <NuxtLink to="/" class="text-2xl font-bold text-black">
            Logo
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden" aria-expanded="isMenuOpen" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Dropdown Menu -->
        <div v-if="isMenuOpen" class="bg-white text-black lg:hidden z-50 rounded-xl">
          <ul class="flex flex-col space-y-2 p-4">
            <li>
              <NuxtLink to="/" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/our-services" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                Our Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/liquidate" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                Liquidate
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/governance-and-responsibility" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                Governance & Responsibility
              </NuxtLink>
            </li>
            <li class="relative group">
              <NuxtLink to="/hmr-group" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                HMR Group
              </NuxtLink>
              <!-- Dropdown for HMR Group -->
              <ul class="absolute left-0 mt-2 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-lg w-full z-50">
                <li>
                  <NuxtLink to="/hmr-group-reverse-logistics" class="block px-4 py-2 hover:text-orange-600" @click="closeMenu">
                    Reverse Logistics
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/hmr-group-trading-haus" class="block px-4 py-2 hover:text-orange-600" @click="closeMenu">
                    Trading Haus
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/hmr-group-auctions" class="block px-4 py-2 hover:text-orange-600" @click="closeMenu">
                    Auctions
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/hmr-group-envirocycle" class="block px-4 py-2 hover:text-orange-600" @click="closeMenu">
                    Envirocycle
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/#" class="nux-link" active-class="text-orange-400" @click="closeMenu">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="header-bg w-full flex justify-center items-center">
        <div class="page-name-container">
          <span class="page-name">{{ pageName }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageName = ref(route.meta.name || '');
const isMenuOpen = ref(false);

// Function to close the menu
const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(
  () => route.meta.name,
  (newName) => {
    pageName.value = newName || 'Default Page';
  }
);
</script>

<style scoped>
.header-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
  url('/public/images/header2.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 460px;
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
.page-name-container {
  width: 816px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 72.91px;
  text-align: center;
  color: white;
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
