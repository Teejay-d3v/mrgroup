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
  flex-wrap: wrap; /* Allow logos to wrap on smaller screens */
  justify-content: center; /* Center logos */
  width: 100%; /* Make the container take full width */
  max-width: 1728px; /* Maintain max width on larger screens */
  height: auto; /* Allow height to adjust */
  gap: 16px; /* Adjust gap between logos */
}

.logo {
  width: 120px; /* Fixed width for logos */
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

/* Media query for responsive design */
@media (max-width: 768px) {
  .logo-container {
    gap: 32px; /* Adjust gap for smaller screens */
  }

  .logo {
    width: 90px; /* Smaller logo size on medium screens */
    height: 90px; /* Adjust height for smaller logos */
  }
}

@media (max-width: 480px) {
  .logo-container {
    gap: 16px; /* Further adjust gap for mobile */
  }

  .logo {
    width: 70px; /* Even smaller logo size for mobile */
    height: 70px; /* Adjust height for smaller logos */
  }

  .header-container h1 {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }
}
</style>
