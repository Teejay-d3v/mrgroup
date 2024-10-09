<template>
  <div>
    <!-- First Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center mb-8">
        <!-- Image on the Left -->
        <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"> 
          <img class="object-cover object-center w-full h-auto rounded-l-lg"
          alt="team" src="~/assets/images/surplus1.png">
        </div>

        <!-- Text on the Right -->
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-left md:p-8">
          <h5 class="py-4 text-gray-900">Looking To Liquidate Now?</h5>
          <ul class="list-disc list-inside">
            <li>Significant excess or returned inventory or surplus assets?</li>
            <li>Looking for quick ways to generate liquidity?</li>
            <li>Need an easy way to dispose of assets or stock that is surplus to requirements?</li>
          </ul>
          <div class="flex justify-center py-8">
            <button class="custom-button">
              List Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center">
    <!-- Mobile view -->
    <div class="block md:hidden w-full justify-center"> 
      <img class="object-cover object-center w-full h-auto rounded-r-lg" 
      alt="team" src="~/assets/images/surplus2.png">
    </div>

    <!-- Text on the Left -->
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-left p-8 md:p-0 mb-10 md:mb-0">
      <h5 class="py-4 text-gray-900">Looking For A Tailored Solution?</h5>
      <ul class="list-disc list-inside">
        <li>Large enterprise with liquidation needs across the US, Asia, or Australia?</li>
        <li>Looking for a strategic approach to liquidation in order to improve recovery and efficiency?</li>
      </ul>
      <div class="flex justify-center py-8">
        <button class="custom-button">
          List Now
        </button>
      </div>
    </div>

    <!-- Desktop view -->
    <div class="hidden md:block w-full md:w-1/2 justify-center"> 
      <img class="object-cover object-center w-full h-auto rounded-r-lg" 
      alt="team" src="~/assets/images/surplus2.png">
    </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>

.custom-button {
  width: 207px; 
  height: 60px; 
  padding: 12px 32px;
  gap: 8px; 
  border-radius: 8px; 
  border: 1px solid transparent; 
  background-color: #FD7936; 
  color: white; 
  transition: background-color 0.3s ease;
  font-size: 1rem;
  cursor: pointer;

}

.custom-button:hover {
  background-color: #FD7936;
  border-color: #FD7936;
}
</style>
