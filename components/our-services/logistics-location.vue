<template>
  <div>
    <section>
      <div class="grid grid-cols-6 lg:grid-cols-12">
        <div
          class="col-span-6 bg-primary bg-cover order-2 lg:order-1 flex items-center justify-center"
          style="background-image: url('/images/logisticslocation.png'); min-height: 700px;"
        >
          <div
            class="bg-gray-200 w-[80%] h-[85%] max-w-[704px] p-[34px] flex flex-col border-2 justify-center items-center gap-2 rounded-xl opacity-95 relative"
          >
            <div
              class="w-full bg-gray-200  h-auto p-0 rounded relative "
            >
            <div class="logistic-map">

            </div>
            </div>
          </div>
        </div>

        <div
          class="text-white col-span-6 grid place-content-center h-full px-4 bg-blue-900 lg:px-16 space-y-4 order-1 lg:order-2 pb-12 lg:pb-0"
        >
          <div class="max-w-xl w-full gap-8">
            <div class="pr-10">
              <h1 class="text-3xl title-font font-medium mb-1">Main Reverse Logistics Locations</h1>
            </div>
            <div>
              <p class="leading-relaxed">
                We provide comprehensive reverse logistics services to clients across the globe, ensuring seamless recovery and redistribution of assets. Our global reach enables us to support businesses in reducing waste and maximizing value, no matter where they operate.
              </p>
            </div>
          </div>

          <div class="max-w-xl w-full flex gap-8">
            <div>
              <ul>
                <li class="flex items-center space-x-2 mb-4 px-5"> <!-- Added mb-2 for margin -->
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>USE</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Japan</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Europe</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Vietnam</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Philippines</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>China</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Sea Countries</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Indonesia</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>South Korea</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Australia</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>UAE</span>
                </li>
                <li class="flex items-center space-x-2 mb-4 px-5">
                  <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Thailand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>

.logistic-map {
  background-image: 
    url('~/assets/logisticslocation2.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
}


h1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 56px;
  font-weight: 600;
  line-height: 72px;
  text-align: left;
}
h2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 36px;
  text-align: left;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
}
</style>
