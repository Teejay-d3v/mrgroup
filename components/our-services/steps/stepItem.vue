<template>
  <div class="flex items-start relative">
    <!-- Left Side: Paragraph or Image -->
    <div class="flex flex-col justify-center items-end w-1/2 pr-8">
      <template v-if="Image">
        <img 
          :src="Image" 
          alt="Left Side Image" 
          :class="[
            'h-24 w-24 object-contain', 
            isFirstStep ? 'mt-0' : 'pt-10', 
            isThirdStep ? 'mt-10' : 'pt-0'
          ]" 
        />
      </template>
      <template v-else>
        <div class="pt-20" >
          <div class=" text-right ">
            <h3>{{ title }}</h3>
          </div>
          <div style="width: 633px; ">
            <p class="text-gray-600 text-left">{{ Paragraph }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- Step Number with Vertical Lines -->
    <div class="flex flex-col items-center">
      <div v-if="!isFirstStep" class="w-px h-12 py-10 bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full">
        {{ number }}
      </div>
      <div v-if="!isLastStep" class="w-px h-12 bg-gray-300 mt-5"></div>
    </div>

    <!-- Step Icon and Text -->
    <div class="ml-8 w-1/2">
      <template v-if="Image">
      <div>
        <div>
          <!-- Conditionally add padding to h3 based on isThirdStep -->
          <h3 :class="{'pt-20': isThirdStep}">{{ title }}</h3>
        </div>
        <div style="width: 633px;">
          <!-- Conditionally add padding to p based on isThirdStep -->
          <p class="text-gray-600 text-left px-4" :class="{'pt-0': isThirdStep}">{{ Paragraph }}</p>
        </div>
      </div>
    </template>
    <template v-else>
      <img :src="Image" alt="Right Side Image" class="mt-20 h-24 w-24 object-contain" />
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
  isFirstStep: Boolean, 
  isLastStep: Boolean,
  isThirdStep: Boolean
})
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
