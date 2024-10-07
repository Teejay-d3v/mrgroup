<template>
  <section>
    <div class="parent-container">
      <div class="header-container">
        <h1>Associations and Accreditations</h1>
      </div>

      <div class="logo-container">
        <div class="logo">Logo 1</div>
        <div class="logo">Logo 2</div>
        <div class="logo">Logo 3</div>
        <div class="logo">Logo 4</div>
        <div class="logo">Logo 5</div>
        <div class="logo">Logo 6</div>
        <div class="logo">Logo 7</div>
        <div class="logo">Logo 8</div>
        <div class="logo">Logo 9</div>
        <div class="logo">Logo 10</div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.parent-container {
  padding: 56px 0; /* Padding */
  gap: 0;
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
  width: 1728px;
  height: 120px;
  gap: 56px;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}
</style>
