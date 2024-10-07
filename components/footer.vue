<template>
  <div>
    <section>
      <div class="footer-bg grid grid-cols-12 lg:grid-cols-12 ">
        <div class="col-span-6 text-cyan-500">

        </div>
        <div class="text-white col-span-6 grid place-content-center h-full ">
          <div  style="width: 704px; ; gap: 32px;">
            <div class="h1-content">
              <h1 class=" text-3xl title-font font-medium mb-1">How HMR Can Work For You?</h1>
            </div>
            <div class="p-content">
              <p class="leading-relaxed">Unlock the value of your surplus inventory with HMR's efficient and sustainable asset liquidation services. Our expert team ensures a seamless process, maximizing returns while adhering to eco-friendly practices. Trust HMR to turn your surplus into opportunity, helping you optimize resources and support a circular economy.</p>
            </div>
            <button class="custom-button">
              Know More Today
            </button>
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
      #0B2B5A 146.14%
    ),
    url('~/assets/footer.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    width: 1,728px;
    height: 460px;
  }
  
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
.h1-content{
  width: 788px;
  height: 72px;
  gap: 0px;
  opacity: 0px;
  padding-right:10
}
.p-content {
  width: 788px; 
  height: 144px; 
}
</style>
