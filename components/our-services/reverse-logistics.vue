<template>
  <section class="bg-white">
    <div class="mb-44">
      <div class="flex flex-col items-center text-center py-10 px-4">
        <div class="my-5 max-w-5xl w-full">
          <h1 class="text-2xl md:text-3xl lg:text-4xl">How Can We Help You?</h1>
        </div>
        <div class="max-w-5xl w-full">
          <p class="text-base md:text-lg lg:text-xl">
            We offer comprehensive solutions to maximize the value of surplus assets through our full-cycle reverse logistics and re-commerce services. Our expertise encompasses a wide variety of asset disposal and recycling processes, ensuring sustainable and efficient management of your resources.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center text-left pb-10">
        <div class="mt-8 w-full max-w-5xl">
          <h3 class="text-xl md:text-2xl lg:text-3xl">Our Reverse Logistics Process</h3>
          <div class="mt-8">
            <img src="/public/images/marketplace.png" alt="Marketplace Process" class="max-w-full h-auto" style="max-width: 1584px;" />
          </div>
        </div>
      </div>

      <StepItem />

    </div>
  </section>
</template>

<script setup>
import StepItem from '@/components/our-services/steps/stepItem.vue'
</script>

<style scoped>
/* Any additional styling if required */
</style>
