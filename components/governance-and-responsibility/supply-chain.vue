<template>
  <div class="grid grid-cols-12 gap-6  bg-blue-900 text-white" >
    <div class="custom-bg col-span-12 ">
     <div class="grid grid-cols-12 gap-8 m-10">
      <!-- One -->
      <div class="col-span-12 ">
        <div>
          <h3 style="font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 600; line-height: 36px; text-align: left;">
            Tech Focused Regenerative Circular Supply Chain Company
          </h3>

          <span>HMR is at the forefront of reverse logistics and the circular economy, dedicated to helping companies achieve their Environmental, Social, and Governance (ESG) goals while reducing greenhouse gas (GHG) emissions. By transforming traditional supply chains into circular systems, HMR enables businesses to minimize waste and carbon footprint, enhancing sustainability. Their expertise in managing the return and reuse of products not only aids in environmental conservation but also supports clients in realizing economic and reputational benefits. HMR stands as a key ally for businesses striving towards a greener, more sustainable future.</span>
        </div>
      </div>

      <div class=" col-span-12 grid grid-cols-12 gap-8 pt-10">
        <div class="flex col-span-4 space-x-14"> 
          <div>
            <h2 class="font-bold" style="font-family: Poppins; font-size: 56px; line-height: 36px;">
              14,000
            </h2>
            <p>Tonnes</p>
          </div>
          <div>
            <h2 class="font-bold" style="font-family: Poppins; font-size: 56px; line-height: 36px;">
              5,228
            </h2>
            <p>Metric Tonnes CO2e prevented</p>
          </div>
        </div>
        <div class="col-span-8">
          <h2>Waste prevented from being dumped in landfills through HMR’s regenerative circular supply chain</h2>
        </div>
      </div>


      <!-- Three  -->
      <div class="col-span-12 grid grid-cols-12 gap-4">
        <div class="col-span-4 ">
          <span class="font-semibold">Eco-Friendly Sharing and Disposal</span>
          <p>
            We assist in managing your disposable requirements with our leading expertise in asset disposal, offering a range of environmentally conscious options that align with your company’s ESGF objectives
          </p>
        </div>
        <div class="col-span-4 ">
          <span class="font-semibold">Collaborative Liquidation Solutions</span>
          <p>
            By thoroughly analyzing your supply chains and collaborating closely with your team, we identify opportunities to jointly tackle your unique liquidation challenges. Our approach not only saves you money but also prioritizes environmental sustainability.
          </p>
        </div>
        <div class="col-span-4">
          <span class="font-semibold">Commitment to Sustainability and Excellence</span>
          <p>
            Collaborating with HMR connects you with our top-tier professionals specializing in circular supply chains. Our dedication to sustainable practices is widely acknowledged, offering significant eco-friendly advantages and credentials to our client.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

</script>

<style scoped>
.custom-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('~/assets/supply-change.png'); 
    background-repeat: no-repeat;
    background-size: cover;
    width: 1,728px;
    height: 460px;
  }
</style>