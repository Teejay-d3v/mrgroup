<template>
  <section class="body-font bg-blue-900">
    <div class="custom-bg mx-auto px-5 py-16 flex flex-col items-center">
      <h1 class="text-white text-4xl font-bold mb-6">Contact Us</h1>
      <p class="text-white text-lg mb-10 text-center max-w-lg">
        Have any questions or inquiries? Feel free to reach out to us!
      </p>
      <form class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
// No script is needed for a static contact page
</script>

<style scoped>
.custom-bg {
  background: linear-gradient(
      89.65deg,
      rgba(120, 175, 253, 0.1) 11.52%,
      #0B2B5A 146.14%
    ),
    url('/public/images/supply-change.png');
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: auto; 
  min-height: 400px; 
}

h1, h2 {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
}
</style>
