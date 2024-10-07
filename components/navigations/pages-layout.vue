

<template>
  <div>
  <header class="bg-blue-950 text-white">
    <nav class="container mx-auto flex justify-between items-center py-5 ">
      <!-- Brand/Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-white hover:text-teal-400 mr-6">
        Logo
      </NuxtLink>

      <!-- Menu Items -->
      <ul class="flex space-x-6 ">
        <li>
          <NuxtLink to="/"  class="text-white hover:text-teal-400"  active-class="text-teal-400" >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            About
          </NuxtLink>
        </li>
        
        <li>
          <NuxtLink to="/our-services"  class="text-white hover:text-teal-400"  active-class="text-teal-400" >
            Our Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/liquidate" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            Liquidate
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/governance-and-responsibility" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            Liquidate
          </NuxtLink>
        </li>

        <li>
          <NuxtLink 
            to="/hmr-group" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            HMR-Group
          </NuxtLink>
        </li>

        <li>
          <NuxtLink 
            to="/hmr-group-reverse-logistics" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            HMR-Group Reverse Logistics
          </NuxtLink>
        </li>

        <li>
          <NuxtLink 
            to="/hmr-group-trading-haus" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            HMR-Group Trading Haus
          </NuxtLink>
        </li>

        <li>
          <NuxtLink 
            to="/hmr-group-auctions" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            HMR-Group Auctions
          </NuxtLink>
        </li>

        <li>
          <NuxtLink 
            to="/hmr-group-envirocycle" 
            class="text-white hover:text-teal-400"
            active-class="text-teal-400"
          >
            HMR-Group Envirocycle
          </NuxtLink>
        </li>
        <li>
          <button class="inline-flex text-white bg-blue-500 border-0  focus:outline-none hover:bg-blue-600 rounded text-lg transition-all">
              Button
          </button>
        </li>
      </ul>
    </nav>

    <div class="header-bg w-full flex  justify-center items-center  object-cover " style="width: 1,728px; height: 460px;">
      <div>
        <span class="text-3xl ali">{{ pageName }}</span>
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
import { useRoute } from 'vue-router'
import Footer from "../components/footer.vue"
const route = useRoute()
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
    background: url('~/assets/header2.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 1,728px;
    height: 460px;
    justify-content: center;
    position: relative;
  }

  .footer-bg {
    background: url('~/assets/footer.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 1,728px;
    height: 460px;
    justify-content: center;
    position: relative;
  }
</style>