<template>
  <div class="flex items-start relative">
    <!-- Left Side: Paragraph or Image -->
    <div class="flex flex-col justify-center items-end w-1/2 pr-8">
      <div class="text-right">
        <h3>Lorem ipsum dolor sit</h3>
        <p class="text-gray-600">ullam ducimus similique natus nemo iste a, corporis doloribus, cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, saepe?</p>
      </div>
      <div class="pt-3">
        <img 
          :src="Image" 
          alt="Left Side Image" 
          class="pt-10 h-24 w-24 object-contain"
        />
      </div>
      <div class="text-right pt-10">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p class="text-gray-600">ullam ducimus similique natus nemo iste a, corporis doloribus, cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, saepe?</p>
      </div>
    </div>

    <!-- Step Number with Vertical Lines -->
    <div class="flex flex-col items-center">
      <div class="w-px bg-gray-300"></div>
      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="w-px h-20 bg-gray-300 mt-2"></div>
      <div class="w-px h-10 bg-gray-300"></div>
      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="w-px h-20 bg-gray-300 mt-2"></div>
      <div class="w-px h-10 bg-gray-300"></div>
      <div class="bg-orange-500 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full"></div>
      <div class="w-px  bg-gray-300 mt-2"></div>
    </div>

    <!-- Right Side: Step Icon and Text -->
    <div class="flex flex-col justify-center items-start ml-8 w-1/2">
      <div class="">
        <img 
          :src="Image" 
          alt="Right Side Image" 
          class=" h-24 w-24 object-contain"
        />
      </div>
      <div class="text-left pt-14">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p class="text-gray-600">ullam ducimus similique natus nemo iste a, corporis doloribus, cumque Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, saepe?</p>
      </div>
      <div class="pt-10">
        <img 
          :src="Image" 
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

</style>
