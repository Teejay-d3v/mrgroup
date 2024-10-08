<template>
  <section class="py-24 bg-gray-100">
    <div class="container mx-auto flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-10">Our Process</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Step 1 -->
        <div class="flex justify-end items-center">
          <!-- Left Column: Image -->
          <img src="" alt="Step 1" class="w-24 h-24 md:w-32 md:h-32 object-cover" />
        </div>
        <div class="flex flex-col items-center">
          <!-- Middle Column: Number and Line -->
          <span class=" border rounded-full w-10 h-10 flex items-center justify-center font-bold">01</span>
          <div class="h-32 w-px bg-gray-300"></div>
        </div>
        <div class="flex justify-start items-center">
          <!-- Right Column: Text -->
          <div>
            <h2 class="text-lg font-semibold">Sourcing</h2>
            <p class="text-gray-600">Collect surplus, returned, or end-of-life products from retailers or customers. This step reduces waste and lays the foundation for reuse or recycling.</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="flex justify-start items-center">
          <!-- Left Column: Text -->
          <div>
            <h2 class="text-lg font-semibold">Inventory Management</h2>
            <p class="text-gray-600">Streamline the flow of items efficiently. Real-time tracking ensures optimal storage and accessibility.</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <!-- Middle Column: Number and Line -->
          <span class=" border rounded-full  h-10 flex items-center justify-center font-bold">02</span>
          <div class="h-32 w-px bg-gray-300"></div>
        </div>
        <div class="flex justify-end items-center">
          <!-- Right Column: Image -->
          <img src="" alt="Step 2" class="w-24 h-24 md:w-32 md:h-32 object-cover" />
        </div>

        <!-- Step 3 -->
        <div class="flex justify-end items-center">
          <!-- Left Column: Image -->
          <img src="" alt="Step 3" class="w-24 h-24 md:w-32 md:h-32 object-cover" />
        </div>
        <div class="flex flex-col items-center">
          <!-- Middle Column: Number and Line -->
          <span class=" border rounded-full w-10 h-10 flex items-center justify-center font-bold">03</span>
          <!-- The line ends here, so no vertical line -->
        </div>
        <div class="flex justify-start items-center">
          <!-- Right Column: Text -->
          <div>
            <h2 class="text-lg font-semibold">Refurbishing & Repair</h2>
            <p class="text-gray-600">Inspect, repair, and restore products to like-new condition. Salvaged components from damaged items are repurposed to maximize value.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional JavaScript needed
</script>

<style scoped>
/* Additional styling can be added as necessary */
</style>
