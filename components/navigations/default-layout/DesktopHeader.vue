<template>
  <section>
    <!-- Background Section -->
    <div class="custom-bg-image text-white  ">
      <!-- Navigation Bar -->
      <div class="  py-7 pr-4 pl-10 mx-auto flex justify-between items-center text-white w-[1600px] rounded-lg bg-white shadow-lg">
        <!-- Brand/Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-black" style="font-family: DM Sans;font-size: 38.04px; font-weight: 600; line-height: 49.53px; text-align: left;">
          LOGO
        </NuxtLink>

        <!-- Menu Items -->
        <ul class="flex  text-black ">
          <li>
            <NuxtLink to="/" class="nux-link custom-li" active-class="text-orange-400 ">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="nux-link custom-li" active-class="text-orange-400">
              About
            </NuxtLink>
          </li>
                    <!-- HMR Group Dropdown -->
          <li class="relative group">
            <NuxtLink to="/hmr-group" class="nux-link custom-li" active-class="text-orange-400">
              HMR Group
            </NuxtLink>

 
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
          <li>
            <NuxtLink to="/our-services" class="nux-link custom-li" active-class="text-orange-400">
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/liquidate" class="nux-link custom-li" active-class="text-orange-400">
              Liquidate
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/governance-and-responsibility" class="nux-link custom-li" active-class="text-orange-400">
              Governance & Responsibility
            </NuxtLink>
          </li>

          <!-- <li>
            <NuxtLink to="/contact-us" class="nux-link" active-class="text-orange-400">
              Contact Us
            </NuxtLink>
          </li> -->
        </ul>

        <!-- Button -->
        <button class="custom-button text-white">
          List Now
        </button>
      </div>

      <Intro />

    </div>
  </section>
</template>

<script setup>
import Intro from '@/components/home/Intro.vue'
</script>

<style scoped>
.custom-bg-image {
  width: 1,728px;
  background-image: url('/public/images/header.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 20px;
}

.custom-bg-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 16, 41, 0.35); /* #07102959 */
  z-index: 1;
}

.custom-bg-image > * {
  position: relative;
  z-index: 2; /* Ensure the content appears above the overlay */
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
  width: 42px;
  height: 21px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;

}
.custom-li{
  width: 91px;
  padding: 0px 24px 0px 24px;
  gap: 8px;
}
</style>
