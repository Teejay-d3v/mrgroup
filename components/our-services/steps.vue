<template>
  <section class="p-8 bg-slate-200">
    <!-- First Row: Single Column -->
    <div class="mb-8 bg-white p-4">
      <StepItemCenter />
    </div>

    <!-- Second Row: Two Columns -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="bg-white p-4">
        <div class="flex justify-center">
          <img 
            :src="Image" 
            alt="Left Side Image" 
            class="block"
          />
        </div>
      
      <!-- Content section -->
      <section class="max-w-5xl mx-auto my-16">
        <StepItemLeft />
      </section>
      </div>
      <div class="bg-white p-4">
        <div class="flex justify-center">
          <img 
            :src="Image" 
            alt="Left Side Image" 
            class="block"
          />
        </div>
        <section class="max-w-5xl mx-auto my-16">
        <!-- Step 2: Paragraph on the left -->
          <StepItemRight />
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import StepItemRight from '~/components/our-services/steps/stepItemRight.vue';
import StepItemLeft from '~/components/our-services/steps/stepItemLeft.vue';
import StepItemCenter from '~/components/our-services/steps/stepItemCenter.vue';
</script>

<style scoped>
/* Any additional styling if required */
</style>
