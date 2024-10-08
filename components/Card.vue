<template>
  <div class="flex flex-col p-6 gap-4 border border-opacity-0 rounded-[12px] shadow-lg">
    <div class="flex justify-center mb-4">
      <img alt="content" class="object-cover object-center w-[125px] h-[100px]" :src="imgSrc" />
    </div>
    <div>
      <h4 class="text-gray-900 mb-3 text-lg font-semibold">{{ title }}</h4>
      <p class="leading-relaxed text-base p-custom">{{ description }}</p>
    </div>
    <div>
      <a class="text-orange-500 inline-flex items-center mt-3" style="width: 100%; height: 100%;">
        Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M7 17l10-10M17 17V7h-10" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'imgSrc']);
</script>

<style scoped>
.p-custom {
  font-size: 16px; 
  line-height: 1.5;
}
</style>
