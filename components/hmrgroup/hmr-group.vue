<template>
  <div>
    <section class="body-font">
      <div>
        <div class="flex flex-col items-center text-center p-4">
          <div class="my-5 max-w-5xl w-full">
            <h1> What is HMRGroup?</h1>
          </div>
          <div class="max-w-5xl w-full">
            <p class="text-base md:text-lg lg:text-xl">
              HMR Group is a diverse group of companies specializing in various industries, including auctions, retail, environmental recycling, and asset management. With decades of experience, HMR Group offers comprehensive solutions ranging from live and online auctions, retail sales, and asset liquidation to sustainable recycling of electronic waste and surplus items. They also handle specialized services such as auto auctions, heavy machinery sales, and real estate management, making them a trusted partner for businesses and individuals looking to buy, sell, or recycle assets effectively.
            </p>
          </div>
        </div>
      </div>

      <div class="container px-5 pb-24 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-2">
          <div class="p-4 w-[384px] h-[601px]">
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
          </div>

          <div class="p-4 w-[384px] h-[601px]">
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content2.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
          </div>

          <div class="p-4 w-[384px] h-[601px]">
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content3.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
          </div>

          <div class="p-4 w-[384px] h-[601px]">
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content4.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom-layout',
    name: 'HMR Group',
})
</script>

<style scoped>
.custom-image {
  width: 100%; /* Make the image responsive within the card */
  height: 100%; /* Maintain the original height */
  object-fit: cover; 
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds shadow to the image */
}

/* Optional: If you want to ensure the layout is responsive */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
  }
}
</style>
