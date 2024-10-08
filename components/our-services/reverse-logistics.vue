<template>
  <section class="bg-white">
    <div class="mb-44">
      <div class="flex flex-col items-center text-center py-10 px-4">
        <div class="my-5 max-w-5xl w-full">
          <h1>How Can We Help You?</h1>
        </div>
        <div class="max-w-5xl w-full">
          <p>
            We offer comprehensive solutions to maximize the value of surplus assets through our full-cycle reverse logistics and re-commerce services. Our expertise encompasses a wide variety of asset disposal and recycling processes, ensuring sustainable and efficient management of your resources.
          </p>
        </div>
      </div>

      <div class=" flex flex-col items-center text-left pb-10">
        <div style="width: 1584px; height: 72px;">
          <div class="mt-8">
            <h3>Our Reverse Logistics Process</h3>
          </div>
          <div class="mt-8">
            <img src="~/assets/marketplace.png" >
          </div>
        </div>
      </div>


    <!-- Step 1: Paragraph on the left -->
    <StepItem
      Image="/images/left-image2.svg"
      number="01"
      icon="/icons/step2.svg"
      title="Sourcing"
      Paragraph="Collect surplus, returned, or end-of-life products from suppliers, retailers, or customers. This step reduces waste and sets the foundation for reuse or recycling."
      :isLastStep="false"
      :isFirstStep="true"
    />

  <!-- Step 2: Paragraph on the left -->
    <StepItem
      number="02"
      icon="/icons/step3.svg"
      title="Inventory Management"
      Paragraph="Categorize, sort, and store items efficiently to streamline the flow of products through the reverse logistics process. Real-time tracking ensures optimal storage and accessibility."
      :isSecondStep="false"
    />


    <!-- Step 3: Image on the left -->
    <StepItem
      Image="/images/left-image4.svg"
      number="03"
      icon="/icons/step4.svg"
      title="Refurbishing & Repair"
      Paragraph="Inspect, repair, and restore products to like-new condition by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value."
      :isThirdStep="true"
    />
    
    <!-- Step 4: Image on the left -->
    <StepItem
      number="04"
      icon="/icons/step1.svg"
      title="Recommerce"
      Paragraph="Resell refurbished products through online platforms, physical stores, or B2B channels. This approach extends product life, reduces environmental impact, and offers cost-effective alternatives."
      :isFirstStep="false"
      :isLastStep="true"
    />

    </div>
  </section>
  
</template>

<script setup>
import StepItem from '@/components/our-services/steps/stepItem.vue'
</script>

<style scoped>
/* Any additional styling if required */
</style>
