<template>
  <section class="p-8 bg-slate-200 ">
    <!-- First Row: Single Column -->
    <div class="mb-8 bg-white py-10">
      <div class="flex justify-center py-5">
          <img 
            src="/public/images/step-center.png" 
            alt="Center Image" 
            class="block w-[173px] h-[73.19px]"
          />
        </div>
      <StepItemCenter/>
    </div>

    <!-- Second Row: Two Columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white p-4">
        <div class="flex justify-center">
          <img 
            src="/public/images/step-left.png"  
            alt="Right Side Image" 
            class="block w-[96px] h-[96px]"
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
          src="/public/images/step-right.png" 
            alt="Left Side Image" 
            class="block w-[188.67px] h-[62.89px]"
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
