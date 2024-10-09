<template>
  <div>
    <header class="text-white" >
      <DesktopHeader class="hidden lg:block" />
      <MobileHeader class="lg:hidden" />
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import DesktopHeader from '~/components/navigations/default-layout/DesktopHeader.vue'
import MobileHeader from '~/components/navigations/default-layout/MobileHeader.vue'
import Header from "../components/Header.vue"
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
