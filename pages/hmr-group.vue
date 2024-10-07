<template>
  <div>
    <section class=" body-font">
      <div class="col-span-12 flex justify-center">
        <div class=" flex flex-col items-center text-center" style="width: 1600px;  padding: 8px; gap: 40px; ">
            <div class="my-5" style="width: 1104px; ">
                <span class="font-semibold" style="font-family: 'DM Sans', sans-serif; font-size: 28px; line-height: 36px;">
                What is HMRGroup?
              </span>
            </div>

            <div style="width: 1104px; height: 72px; gap: 0px;">
              <p 
                style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 400; line-height: 36px; text-align: center; color: #607083;">
              HMR Group is a diverse group of companies specializing in various industries, including auctions, retail, environmental recycling, and asset management. With decades of experience, HMR Group offers comprehensive solutions ranging from live and online auctions, retail sales, and asset liquidation to sustainable recycling of electronic waste and surplus items. They also handle specialized services such as auto auctions, heavy machinery sales, and real estate management, making them a trusted partner for businesses and individuals looking to buy, sell, or recycle assets effectively.
              </p>
            </div>
          </div>
        </div>

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-row justify-center gap-10  w-[1600px] py-2"> 
          <div class="p-4 w-[384px] h-[601px] "> 
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
          </div>
          <div class="p-4 w-[384px] h-[601px] "> 
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content2.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
          </div>
          <div class="p-4 w-[384px] h-[601px] "> 
            <div class="rounded-lg h-full overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full custom-image" src="~/assets/hrm-group-content3.png">
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
          </div>
          <div class="p-4 w-[384px] h-[601px] "> 
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
  height: 100%; /* Make the image responsive within the card */
  object-fit: cover; 
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds shadow to the image */
}
</style>
