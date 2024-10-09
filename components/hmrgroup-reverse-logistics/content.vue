<template>
  <div class="my-12 leading-[36px]">
    <!-- First Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center mb-8">
        <!-- Image on the Left -->
        <div class="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"> 
          <img class="object-cover object-center w-full h-auto rounded-l-lg"
          alt="team" src="/public/images/surplus1.png">
        </div>

        <!-- Text on the Right -->
        <div class="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left pl-10">
          <h5 class="py-4 text-gray-900 ">Demolition</h5>
            <p>At HMR Reverse Logistics, we bring an expertise in safe and efficient demolition services. Specializing in both residential and commercial projects, we're committed to environmentally responsible practices, ensuring every site is cleared with precision and care. Our team, equipped with industry standard equipment, we prioritize safety and customer satisfaction. We offer comprehensive services, including building demolition, debris removal, and site preparation, all tailored to your specific needs.</p>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex  md:flex-row flex-col items-center">
        <!-- Text on the Left -->
        <div class="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left pr-5 mb-10 md:mb-0">
          <h5 class="py-4 text-gray-900">Reinstatements</h5>
          <p>HMR Reverse Logistics excels in restoring commercial and residential properties to their original state. Our expertise covers structural repairs, feature reinstatement, and fixture replacements, all delivered with meticulous attention to detail. We prioritize eco-friendly practices and ensure a clean, ready-to-use space post-restoration. Trust HMR Reverse Logistics for a restoration service that combines precision, sustainability, and customer satisfaction.</p>
        </div>

        <!-- Image on the Right -->
        <div class="w-full md:w-1/2 flex justify-center"> 
          <img class="object-cover object-center w-full h-auto rounded-r-lg" 
          alt="team" src="/public/images/ourservice.png">
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
