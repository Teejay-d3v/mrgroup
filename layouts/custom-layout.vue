<template>
  <div>
    <header>
    <DesktopHeader class="hidden lg:block" />
    <MobileHeader class="lg:hidden" />
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
import DesktopHeader from '@/components/navigations/custom/DesktopHeader.vue'
import MobileHeader from '@/components/navigations/custom/MobileHeader.vue'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from "../components/Footer.vue";
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
