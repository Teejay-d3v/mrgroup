<template>
  <div class="bg-[#FBFBFB]">
    <Header />
    <Pillar />
    <SupplyChain />
    <BusinessSolution />
    <OurServices /> 
    <Logo />  
  </div>

</template>

<script setup>
import Header from "../components/governance-and-responsibility/header.vue"
import Pillar from "../components/governance-and-responsibility/pilar-of-responsibility.vue"
import SupplyChain from "../components/governance-and-responsibility/supply-chain.vue"
import BusinessSolution from "../components/governance-and-responsibility/business-solutions.vue"
import OurServices from "../components/governance-and-responsibility/our-services.vue"
import Logo from "../components/governance-and-responsibility/logos.vue"

  definePageMeta({
      layout: 'custom-layout',
      name: 'Governance and Responsibility',
    })
</script>

<style scoped>
.custom-image {
  width: 1584px; 
  height: 600px; 
  object-fit: cover; 
  border-radius: 0.8rem; 
}
</style>