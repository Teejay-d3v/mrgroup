<template>
  <div class="flex flex-col lg:flex-row items-start relative w-full">
    <!-- Left Side: Paragraph or Image -->
    <div class="flex flex-col justify-center items-end lg:w-1/2 w-full pr-4 lg:pr-8">

      <div>
        <img 
           src="~/assets/ourservice.png" 
          alt="Left Side Image" 
          class="h-24 w-24 object-contain"
        />
      </div>
      <div class="text-right pt-10 custom-text-box">
        <h3>Inventory Management</h3>
        <p class="text-gray-600">Categorize, sort, and store items efficiently to streamline the flow of products through the reverse logistics process. Real-time tracking ensures optimal storage and accessibility.</p>
      </div>
      <div class="pt-14">
        <img 
           src="~/assets/ourservice.png" 
          alt="Left Side Image" 
          class="h-24 w-24 object-contain"
        />
      </div>
      <div class="text-right pt-16 custom-text-box">
        <h3>Recommerce</h3>
        <p class="text-gray-600">Resell refurbished products through online platforms, physical stores, or B2B channels. This approach extends product life, reduces environmental impact, and offers cost-effective alternatives.</p>
      </div>
    </div>

    <!-- Step Number with Vertical Lines -->
    <div class="flex flex-col items-center">

      <!-- Vertical Lines -->
      <div class="w-px  bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
        1</div>
      <div class="w-px h-20 bg-gray-300 mt-2"></div>

      <div class="w-px h-10 bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
        2
      </div>
      <div class="w-px h-20 bg-gray-300 mt-2"></div>

      <div class="w-px h-10 bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
        3</div>
      <div class="w-px h-20 bg-gray-300 mt-2"></div>

      <div class="w-px h-10 bg-gray-300"></div>
      <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
        4</div>
      <div class="w-px  bg-gray-300 mt-2"></div>
    </div>

    <!-- Right Side: Step Icon and Text -->
    <div class="flex flex-col justify-center items-start lg:w-1/2 w-full ml-4 lg:ml-8">
      <div class="text-left custom-text-box">
        <h3>Sourcing</h3>
        <p class="text-gray-600">Collect surplus, returned, or end-of-life products from suppliers, retailers, or customers. This step reduces waste and sets the foundation for reuse or recycling.</p>
      </div>
      <div class="pt-10">
        <img 
           src="~/assets/ourservice.png" 
          alt="Right Side Image" 
          class="h-24 w-24 object-contain"
        />
      </div>

      <div class="text-left pt-16 custom-text-box">
        <h3>Refurbishing & Repair</h3>
        <p class="text-gray-600">Inspect, repair, and restore products to like-new condition by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value.</p>
      </div>

      <div class="pt-14">
        <img 
           src="~/assets/ourservice.png" 
          alt="Right Side Image" 
          class="h-24 w-24 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.custom-text-box {
  max-width: 633px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .custom-text-box {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
