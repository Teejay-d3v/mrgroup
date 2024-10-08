<template>
  <section class="max-w-5xl mx-auto my-16">
    <!-- Step 1: Paragraph on the left -->


    <StepItem
      Image="/images/left-image2.svg"
      number="01"
      icon="/icons/step2.svg"
      title="Sourcing"
      Paragraph="Streamline the flow of items efficiently. Real-time tracking ensures optimal storage and accessibility."
      description="Sort, store, and manage items efficiently to streamline the flow of goods through the reverse logistics process."
      :isLastStep="false"
      :isFirstStep="true"
    />

  <!-- Step 2: Paragraph on the left -->
    <StepItem
      number="02"
      icon="/icons/step3.svg"
      title="Inventory Management"
      Paragraph="Repair and refurbishment prolong the life of products and components."
      description="Inspect, repair, and restore products to like-new condition by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value."
      :isLastStep="false"
      :isFirstStep="false"
    />


    <!-- Step 3: Image on the left -->
    <StepItem
      Image="/images/left-image4.svg"
      number="03"
      icon="/icons/step4.svg"
      title="Refurbishing & Repair"
      Paragraph="Sell refurbished products through various channels such as online platforms, physical stores, or auctions."
      description="Sell the refurbished products through various channels such as online platforms, physical stores, or auctions."
    />
    
    <!-- Step 4: Image on the left -->
    <StepItem
      number="04"
      icon="/icons/step1.svg"
      title="Recommerce"
      Paragraph="This is additional context for sourcing, giving details about the importance of sourcing effectively."
      description="Collect surplus, returned, or end-of-life products from suppliers, retailers, or customers. This step reduces waste and sets the foundation for reuse or recycling."
      :isFirstStep="false"
      :isLastStep="true"
    />
    

    

  </section>
</template>

<script setup>
import StepItem from '@/components/StepItem.vue'
</script>

<style scoped>
/* Any additional styling if required */
</style>
