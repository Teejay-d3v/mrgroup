<template>
  <div class="flex items-start relative">
    <!-- Left Side: Paragraph or Image -->
    <div class="flex flex-col justify-center items-end w-1/2 pr-8">
      <template v-if="Image">
        <img 
          :src="Image" 
          alt="Left Side Image" 
          :class="['h-24 w-24 object-contain', isFirstStep ? 'mt-6' : 'pt-10']" 
        />
      </template>
      <template v-else>
        <h3>{{ title }}</h3>
        <p class="text-gray-600 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, incidunt iste aspernatur architecto tempora eveniet harum rem atque nihil nam.</p>
      </template>
    </div>

    <!-- Step Number with Vertical Lines -->
    <div class="flex flex-col items-center">
      <div v-if="!isFirstStep" class="w-px h-12 bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full">
        {{ number }}
      </div>
      <div v-if="!isLastStep" class="w-px h-12 bg-gray-300 mt-5"></div>
    </div>

    <!-- Step Icon and Text -->
    <div class="ml-8 w-1/2">
      <template v-if="Image">
        <div>
          <h3>{{ title }}</h3>
          <p class="text-gray-600 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse dignissimos dolorum quos quis mollitia maiores officiis odio, at asperiores.</p>
        </div>
      </template>
      <template v-else>
        <img :src="Image" alt="Right Side Image" class="pt-10 h-24 w-24 object-contain" />
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  Paragraph: String,
  Image: String,
  number: Number,
  icon: String,
  title: String,
  description: String,
  isFirstStep: Boolean,  // Added prop to track if it's the first step
  isLastStep: Boolean
})
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
