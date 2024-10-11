<template>
  <section>
    <div class="parent-container py-10">
      <div class="header-container">
        <h1>Associations and Accreditations</h1>
      </div>
      <div class="logo-container">
        <div class="logo" v-for="(logo, index) in logos" ref="logo" :key="index">
          {{ logo }} 
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const { setupAnimations } = useAnimations()
const logo = ref([])


setupAnimations([
  {
    element: logo.value,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.8, stagger: 0.15, easing: 'ease-out' }
  },
])

const logos = [
  'Logo 1',
  'Logo 2',
  'Logo 3',
  'Logo 4',
  'Logo 5',
  'Logo 6',
  'Logo 7',
  'Logo 8',
  'Logo 9',
  'Logo 10',
];


</script>

<style scoped>
.parent-container {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}

.header-container {
  text-align: center; 
  margin-bottom: 16px; 
}

.logo-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
  height: auto; 
  gap: 76px; 
}

.logo {
  width: 120px; 
  height: 120px; 
  padding: 8px;
  margin-right: 10px;
  gap: 8px; 
  border-radius: 119px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center; 
  align-items: center; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}


@media (max-width: 768px) {
  .logo-container {
    gap: 50px; 
  }

  .logo {
    width: 100px; 
    height: 100px; 
  }
}

@media (max-width: 480px) {
  .logo-container {
    gap: 18px;
  }

  .logo {
    width: 100px;
    height: 100px; 
  }

  .header-container h1 {
    font-size: 1.5rem;
  }
}
</style>
