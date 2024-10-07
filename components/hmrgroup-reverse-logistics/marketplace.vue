<template>
  <div>
    <section>
      <div class="col-span-12 flex justify-center">
          <div class=" flex flex-col items-center text-center" style="width: 1600px;  padding: 8px; gap: 40px; ">
            <div style="width: 1104px; height: 144px;">
              <span style="font-family: 'DM Sans', sans-serif; font-size: 56px; font-weight: 600; line-height: 72px; text-align: center;" class="font-semibold">
                Reverse Logistics Service Provider & B2B Re-Commerce Marketplace.
              </span>
            </div>



            <div>
              <img src="~/assets/marketplace.png" alt="Image 1" > 
            </div>
            <div style="width: 1104px; height: 72px; gap: 0px;">
              <p 
                style="font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 400; line-height: 36px; text-align: center; color: #607083;">
                With our online liquidation platform you can sell excess inventory, returns or other liquidation inventory directly to a wide variety of trusted buyers. This drives better than average demand, higher pricing, and faster sales cycles.
              </p>
            </div>
          </div>
        </div>

      <div class="grid grid-cols-6 lg:grid-cols-12">
        <div

          class="col-span-6 h-[400px] lg:h-[600px] bg-primary rounded-tl-none lg:rounded-tr-3xl rounded-br-none lg:rounded-br-3xl bg-cover bg-center order-2 lg:order-1"
          style="background-image: url('/images/surplus1.png')"
        ></div>
        <div
          class="col-span-6 grid lg:place-content-center h-full px-4 pb-10 lg:pb-0 lg:px-16 space-y-4 order-1 lg:order-2"
        >
          <h2

            class="text-3xl lg:text-4xl font-light !leading-normal text-primary-dark"
          >
            Demolition
          </h2>

          <p class="text-neutral !leading-loose text-sm lg:text-base">
            At HMR Reverse Logistics, we bring an expertise in safe and efficient demolition services. Specializing in both residential and commercial projects, we're committed to environmentally responsible practices, ensuring every site is cleared with precision and care. Our team, equipped with industry standard equipment, we prioritize safety and customer satisfaction. We offer comprehensive services, including building demolition, debris removal, and site preparation, all tailored to your specific needs.
          </p>
          

        </div>

        <div
          class="col-span-6 grid lg:place-content-center h-full py-10 lg:py-0 px-4 lg:px-16 space-y-4 order-3"
        >
          <h2  class="text-3xl lg:text-4xl font-light text-primary-dark">
            Reinstatements
          </h2>

          <p  class="text-neutral  text-sm lg:text-base">
            HMR Reverse Logistics excels in restoring commercial and residential properties to their original state. Our expertise covers structural repairs, feature reinstatement, and fixture replacements, all delivered with meticulous attention to detail. We prioritize eco-friendly practices and ensure a clean, ready-to-use space post-restoration. Trust HMR Reverse Logistics for a restoration service that combines precision, sustainability, and customer satisfaction.
          </p>
          
        </div>

        <div
          class="col-span-6 h-[400px] lg:h-[600px] bg-primary rounded-tl-none lg:rounded-tl-3xl rounded-bl-none lg:rounded-bl-3xl bg-cover bg-center order-4"
          style="background-image: url('/images/surplus2.png')"
        ></div>
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