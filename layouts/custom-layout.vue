<template>
  <div>
    <header class="text-white">
      <nav class="container mx-auto flex justify-between items-center py-5">
        <!-- Brand/Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-black">
          Logo
        </NuxtLink>

        <!-- Menu Items -->
        <ul class="flex space-x-6 text-black">
          <li>
            <NuxtLink to="/" active-class="text-orange-400">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" active-class="text-orange-400">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/our-services" active-class="text-orange-400">
              Our Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/liquidate" active-class="text-orange-400">
              Liquidate
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/governance-and-responsibility" active-class="text-orange-400">
              Governance & Responsibility
            </NuxtLink>
          </li>

          <!-- HMR Group Dropdown -->
          <li class="relative group">
            <NuxtLink to="/hmr-group" class="hover:text-orange-400" active-class="text-orange-400">
              HMR-Group
            </NuxtLink>

            <!-- Dropdown menu -->
            <ul class="absolute left-0 top-5 mt-1 hidden group-hover:block bg-white text-blue-950 shadow-lg rounded-md w-48 z-50">
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
            <NuxtLink to="/" active-class="text-orange-400">
              Contact Us
            </NuxtLink>
          </li>
        </ul>

        <!-- Button -->
        <button class="custom-button text-white">
          Button
        </button>
      </nav>

      <div class="header-bg w-full flex justify-center items-center">
        <div class="page-name-container">
          <span class="page-name">{{ pageName }}</span>
        </div>
      </div>
    </header>

    <div>
      <slot />
    </div>

    <footer>
      <Footer />
    </footer>
  </div>
</template>



<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from "../components/footer.vue";
const route = useRoute();
const pageName = ref(route.meta.name || '');

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
  url('~/assets/header2.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 460px;
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
