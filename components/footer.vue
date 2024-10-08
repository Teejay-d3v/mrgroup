<template>
  <div>
    <section>
      <div class="footer-bg grid grid-cols-1 md:grid-cols-12 ">
        <div class="col-span-1 md:col-span-6"></div>
        <div class="text-white col-span-1 md:col-span-6 grid place-content-center h-full">
          <div class="flex flex-col gap-8 p-4 md:p-0 ">
            <div class="h1-content">
              <h1 class="text-3xl title-font font-medium mb-1">How HMR Can Work For You?</h1>
            </div>
            <div class="p-content">
              <p class="leading-relaxed">
                Unlock the value of your surplus inventory with HMR's efficient and sustainable asset liquidation services. Our expert team ensures a seamless process, maximizing returns while adhering to eco-friendly practices. Trust HMR to turn your surplus into opportunity, helping you optimize resources and support a circular economy.
              </p>
            </div>
            <button class="custom-button">Know More Today</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0b2b5a 146.14%
    ),
    url('~/assets/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
}

/* Responsive Button */
.custom-button {
  width: 100%; /* Make button full width on small screens */
  max-width: 207px; /* Maintain max width for larger screens */
  height: 60px; 
  padding: 12px 32px;
  gap: 8px; 
  border-radius: 8px; 
  border: 1px solid transparent; 
  background-color: #fd7936; 
  color: white; 
  transition: background-color 0.3s ease;
  font-size: 1rem;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #fd7936;
  border-color: #fd7936;
}

/* Adjust heading and paragraph styles for responsiveness */
.h1-content,
.p-content {
  max-width: 788px; /* Limit width on larger screens */
}

.h1-content {
  opacity: 1; 
  padding-right: 10px; 
}

.p-content {
  margin-top: 8px; 
}
</style>
