<template>
  <div>
    <section>
      <div ref="itemHeader" class="mt-8 w-full max-w-5xl px-10">
          <h3 class="text-center lg:text-left">Our Reverse Logistics Process</h3>
          <div class="mt-8">
            <img src="/public/images/marketplace.png" alt="Marketplace Process" class="lg:mx-0 mx-auto max-w-full " style="width: 222px; height: 106px; max-width: 1584px;" />
          </div>
        </div>
    </section>
<!-- Desktop -->
    <section class="hidden lg:block">
      <div class="flex flex-col lg:flex-row items-start relative w-full">
        <div class="flex flex-col justify-center items-end lg:w-1/2 w-full pr-4 lg:pr-8">
          <div>
            <svg ref="leftSvg1" width="145" height="120" viewBox="0 0 145 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.362 31.0506C99.8229 31.9438 98.6734 32.2259 97.782 31.7087C96.8906 31.1681 96.6091 30.0164 97.1252 29.1232L114.015 0.91322C114.554 0.0226802 115.704 -0.266034 116.595 0.268239C117.487 0.802511 117.768 1.95755 117.252 2.84911L100.362 31.0506ZM57.2469 3.76111C42.9376 3.76111 30.9741 15.5466 30.9741 30.0869C30.9741 31.1211 30.3408 31.9673 29.0975 31.9673C28.2765 31.9673 27.2209 31.1211 27.2209 30.0869C27.2209 13.4711 40.8733 0.000350344 57.2469 0.000350344C74.0427 0.000350344 87.484 13.4711 87.484 30.0869C87.484 31.1211 86.6396 31.9673 85.6074 31.9673C84.5753 31.9673 83.7308 31.1211 83.7308 30.0869C83.7308 15.5466 71.9784 3.76111 57.2469 3.76111ZM72.471 44.4955L130.6 36.1747C133.156 35.7986 135.643 37.2325 136.605 39.6535L144.393 59.1628C146.082 63.3702 143.689 68.0947 139.115 69.2465L99.9871 79.4712C96.1165 80.4584 92.0583 78.9306 89.8298 75.6164L72.471 49.7607L54.9011 75.6164C52.8838 78.9306 48.8255 80.4584 44.955 79.4712L5.62562 69.2465C1.24839 68.0947 -1.13938 63.3702 0.539965 59.1628L8.33031 39.6535C9.29442 37.2325 11.7833 35.7986 14.3543 36.1747L72.471 44.4955ZM4.0258 60.5731C3.18601 62.665 4.38001 65.0391 6.56863 65.6032L45.8933 75.8279C48.2156 76.4156 50.4441 75.4989 51.9924 73.5009L69.2339 47.8098L13.8218 39.8885C12.9656 39.771 12.1352 40.2411 11.8138 41.0403L4.0258 60.5731ZM75.7082 47.8098L92.9497 73.5009C94.2868 75.4989 96.7264 76.4156 99.0488 75.8279L138.364 65.6032C140.569 65.0391 141.765 62.665 140.921 60.5731L133.133 41.0403C132.805 40.2411 131.984 39.771 131.116 39.8885L75.7082 47.8098ZM128.77 79.0011L132.523 77.9434V96.489C132.523 101.66 129.004 106.173 123.984 107.442L75.1921 119.665C73.1982 120.112 71.5327 120.112 69.7499 119.665L20.9577 107.442C15.9353 106.173 12.2079 101.66 12.2079 96.489V77.9434L15.9611 79.0011V96.489C15.9611 99.9442 18.5157 102.953 21.8491 103.799L70.3833 115.998V69.5756C70.3833 68.5413 71.4389 67.6951 72.2599 67.6951C73.5032 67.6951 74.3477 68.5413 74.3477 69.5756V115.998L123.093 103.799C126.424 102.953 128.77 99.9442 128.77 96.489V79.0011Z" fill="#13376B"/>
            </svg>
          </div>
          <div ref="item1" class="text-right pt-20  custom-text-box">
            <h5>Inventory Management</h5>
            <p class="text-gray-600 mt-2 text-base p-10 lg:p-0 ">
              Categorize, sort, and store items efficiently to streamline the flow of products through the reverse logistics process. Real-time tracking ensures optimal storage and accessibility.
            </p>
          </div>
          <div class="pt-16">
            <svg ref="leftSvg2" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M118.755 28.7812C118.325 26.9904 116.728 25.9523 115.092 25.9523C114.14 25.9523 113.174 26.3032 112.418 27.0609L94.4761 45.0047L74.9995 45.0046V25.5281L92.9409 7.58433C95.0013 5.52441 94.0542 1.92652 91.2216 1.24683C88.2159 0.359062 85.2863 0.00046875 82.0753 0C79.1175 0 76.0964 0.349922 73.005 1.08984C58.8253 4.53516 47.5753 16.7695 45.2784 31.1953C44.2856 37.4906 44.8716 43.5492 46.6852 49.0477L4.94297 90.7898C-1.64766 97.3805 -1.64766 108.061 4.94297 114.649C8.02688 118.148 12.3394 120 16.4503 120C20.5612 120 25.0847 118.352 28.3823 115.057L70.1245 73.3148C77.8073 75.8484 84.4167 75.2831 87.9769 74.722C102.604 72.4158 114.836 61.1752 118.282 46.7845C120.185 40.3359 120.091 34.3359 118.755 28.7812ZM115.052 45.7266C111.958 58.6547 101.01 68.7398 87.8175 70.8281C86.4464 71.044 80.3831 72.4198 69.5292 68.8406L25.9589 112.411C20.8308 117.539 12.5339 117.546 7.40109 112.411C2.27297 107.283 2.26594 98.9859 7.40109 93.8508L50.9714 50.2805C47.3691 39.3586 48.6961 33.8203 48.9841 31.9922C51.0661 18.7875 61.1505 7.82812 74.0857 4.75781C77.981 3.8257 83.892 3.11742 90.0935 4.74134L71.0529 23.782V48.7663H96.0373L115.12 29.6695C116.364 34.8984 116.341 40.2891 115.052 45.7266ZM18.5339 97.2891C16.463 97.2891 14.7839 98.9677 14.7839 101.039C14.7839 103.11 16.4632 104.789 18.5339 104.789C20.6048 104.789 22.2839 103.11 22.2839 101.039C22.2839 99.1875 20.6034 97.2891 18.5339 97.2891Z" fill="#13376B"/>
            </svg>
          </div>
          <div ref="item2" class="text-right pt-20 custom-text-box">
            <h5>Recommerce</h5>
            <p class="text-gray-600 mt-2">Resell refurbished products through online platforms, physical stores, or B2B channels. This approach extends product life, reduces environmental impact, and offers cost-effective alternatives.</p>
          </div>
        </div>

        <!-- Step Number with Vertical Lines -->
        <div class="flex flex-col items-center">
          <!-- Vertical Lines -->
          <div class="w-px bg-gray-300"></div>
            <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
              1
            </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-20 bg-gray-300"></div>
            <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
              2
            </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-20 bg-gray-300"></div>
            <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
              3
            </div>
          <div class="w-px h-20 bg-gray-300 mt-2"></div>

          <div class="w-px h-20 bg-gray-300"></div>
            <div class="bg-slate-200 text-black font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full">
              4
            </div>
          <div class="w-px bg-gray-300 mt-2"></div>
        </div>


        <!-- Right Side: Step Icon and Text -->
        <div class="flex flex-col justify-center items-start lg:w-1/2 w-full ml-4 lg:ml-8">
          <div ref="item3" class="text-left custom-text-box">
            <h5>Sourcing</h5>
            <p class="text-gray-600 mt-2">Collect surplus, returned, or end-of-life products from suppliers, retailers, or customers. This step reduces waste and sets the foundation for reuse or recycling.</p>
          </div>
          <div class="pt-20">
            <svg ref="rightSvg1" width="151" height="120" viewBox="0 0 151 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M77.5243 4.1917C76.1581 3.6287 74.6033 3.6287 73.2371 4.1917L9.61575 30.297C6.07757 31.7339 3.76903 34.9847 3.76903 39.0129V117.903C3.76903 119.152 2.92571 119.788 1.88452 119.788C0.843793 119.788 0 119.152 0 117.903V39.0129C0 33.6655 3.2343 28.8365 8.18352 26.8106L71.8001 0.705104C74.0851 -0.235035 76.6763 -0.235035 78.9613 0.705104L142.587 26.8106C147.534 28.8365 150.761 33.6655 150.761 39.0129V117.903C150.761 119.152 149.913 119.788 148.877 119.788C147.84 119.788 146.992 119.152 146.992 117.903V39.0129C146.992 34.9847 144.684 31.7339 141.15 30.297L77.5243 4.1917ZM28.0558 48.1763C27.2313 48.1763 26.1712 49.2364 26.1712 50.0609V117.903C26.1712 119.152 25.5352 119.788 24.2867 119.788C23.4575 119.788 22.4022 119.152 22.4022 117.903V50.0609C22.4022 47.1399 25.1347 44.4073 28.0558 44.4073H122.494C125.627 44.4073 128.147 47.1399 128.147 50.0609V117.903C128.147 119.152 127.299 119.788 126.263 119.788C125.226 119.788 124.378 119.152 124.378 117.903V50.0609C124.378 49.2364 123.53 48.1763 122.494 48.1763H28.0558ZM105.533 89.8477C109.702 89.8477 113.071 93.2163 113.071 97.3858V112.462C113.071 116.631 109.702 120 105.533 120H45.0164C41.0589 120 37.4783 116.631 37.4783 112.462V74.7716C37.4783 70.6021 41.0589 67.2335 45.0164 67.2335H71.3997C75.7812 67.2335 79.1497 70.6021 79.1497 74.7716V89.8477H105.533ZM71.3997 71.0025H45.0164C43.1554 71.0025 41.2474 72.6986 41.2474 74.7716V89.8477H75.1687V74.7716C75.1687 72.6986 73.6846 71.0025 71.3997 71.0025ZM75.1687 93.6168H41.2474V112.462C41.2474 114.535 43.1554 116.231 45.0164 116.231H75.1687V93.6168ZM79.1497 116.231H105.533C107.606 116.231 109.302 114.535 109.302 112.462V97.3858C109.302 95.3128 107.606 93.6168 105.533 93.6168H79.1497V116.231Z" fill="#13376B"/>
            </svg>
          </div>

          <div ref="item4" class="text-left pt-24 custom-text-box">
            <h5>Refurbishing & Repair</h5>
            <p class="text-gray-600 mt-2">Inspect, repair, and restore products to like-new condition by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value.</p>
          </div>

          <div class="pt-16">
            <svg ref="rightSvg2" width="105" height="120" viewBox="0 0 105 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 30V22.5C30 10.0734 39.8672 0 52.5 0C64.9219 0 75 10.0734 75 22.5V30H93.75C99.9609 30 105 35.0391 105 41.25V97.5C105 109.922 94.9219 120 82.5 120H22.5C10.0734 120 0 109.922 0 97.5V41.25C0 35.0391 5.03672 30 11.25 30H30ZM33.75 30H71.25V22.5C71.25 12.1453 62.8594 3.75 52.5 3.75C42.1406 3.75 33.75 12.1453 33.75 22.5V30ZM11.25 33.75C7.10859 33.75 3.75 37.1016 3.75 41.25V97.5C3.75 107.859 12.1453 116.25 22.5 116.25H82.5C92.8594 116.25 101.25 107.859 101.25 97.5V41.25C101.25 37.1016 97.8984 33.75 93.75 33.75H75V54.375C75 55.4062 74.1562 56.25 73.125 56.25C72.0938 56.25 71.25 55.4062 71.25 54.375V33.75H33.75V54.375C33.75 55.4062 32.9062 56.25 31.875 56.25C30.8438 56.25 30 55.4062 30 54.375V33.75H11.25Z" fill="#13376B"/>
            </svg>

          </div>
        </div>
      </div>
    </section>




<!-- Mobile -->
    <section class="block lg:hidden my-10">
      <div class="flex flex-col justify-center items-start w-full px-4">
        <div class="flex flex-col justify-center items-center w-full space-y-8">
    
          <div  class="text-center">
           <svg width="145" class="mx-auto" height="120" viewBox="0 0 145 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.362 31.0506C99.8229 31.9438 98.6734 32.2259 97.782 31.7087C96.8906 31.1681 96.6091 30.0164 97.1252 29.1232L114.015 0.91322C114.554 0.0226802 115.704 -0.266034 116.595 0.268239C117.487 0.802511 117.768 1.95755 117.252 2.84911L100.362 31.0506ZM57.2469 3.76111C42.9376 3.76111 30.9741 15.5466 30.9741 30.0869C30.9741 31.1211 30.3408 31.9673 29.0975 31.9673C28.2765 31.9673 27.2209 31.1211 27.2209 30.0869C27.2209 13.4711 40.8733 0.000350344 57.2469 0.000350344C74.0427 0.000350344 87.484 13.4711 87.484 30.0869C87.484 31.1211 86.6396 31.9673 85.6074 31.9673C84.5753 31.9673 83.7308 31.1211 83.7308 30.0869C83.7308 15.5466 71.9784 3.76111 57.2469 3.76111ZM72.471 44.4955L130.6 36.1747C133.156 35.7986 135.643 37.2325 136.605 39.6535L144.393 59.1628C146.082 63.3702 143.689 68.0947 139.115 69.2465L99.9871 79.4712C96.1165 80.4584 92.0583 78.9306 89.8298 75.6164L72.471 49.7607L54.9011 75.6164C52.8838 78.9306 48.8255 80.4584 44.955 79.4712L5.62562 69.2465C1.24839 68.0947 -1.13938 63.3702 0.539965 59.1628L8.33031 39.6535C9.29442 37.2325 11.7833 35.7986 14.3543 36.1747L72.471 44.4955ZM4.0258 60.5731C3.18601 62.665 4.38001 65.0391 6.56863 65.6032L45.8933 75.8279C48.2156 76.4156 50.4441 75.4989 51.9924 73.5009L69.2339 47.8098L13.8218 39.8885C12.9656 39.771 12.1352 40.2411 11.8138 41.0403L4.0258 60.5731ZM75.7082 47.8098L92.9497 73.5009C94.2868 75.4989 96.7264 76.4156 99.0488 75.8279L138.364 65.6032C140.569 65.0391 141.765 62.665 140.921 60.5731L133.133 41.0403C132.805 40.2411 131.984 39.771 131.116 39.8885L75.7082 47.8098ZM128.77 79.0011L132.523 77.9434V96.489C132.523 101.66 129.004 106.173 123.984 107.442L75.1921 119.665C73.1982 120.112 71.5327 120.112 69.7499 119.665L20.9577 107.442C15.9353 106.173 12.2079 101.66 12.2079 96.489V77.9434L15.9611 79.0011V96.489C15.9611 99.9442 18.5157 102.953 21.8491 103.799L70.3833 115.998V69.5756C70.3833 68.5413 71.4389 67.6951 72.2599 67.6951C73.5032 67.6951 74.3477 68.5413 74.3477 69.5756V115.998L123.093 103.799C126.424 102.953 128.77 99.9442 128.77 96.489V79.0011Z" fill="#13376B"/>
            </svg>
            <h5 ref="mobileItem1" class="pt-5 font-semibold">Inventory Management</h5>
            <p ref="mobileparagraph1" class="text-gray-600">Categorize, sort, and store items efficiently to streamline the flow of products through the reverse logistics process. Real-time tracking ensures optimal storage and accessibility.</p>
          </div>

      
          <div class="text-center">
            <svg width="120" class="mx-auto" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M118.755 28.7812C118.325 26.9904 116.728 25.9523 115.092 25.9523C114.14 25.9523 113.174 26.3032 112.418 27.0609L94.4761 45.0047L74.9995 45.0046V25.5281L92.9409 7.58433C95.0013 5.52441 94.0542 1.92652 91.2216 1.24683C88.2159 0.359062 85.2863 0.00046875 82.0753 0C79.1175 0 76.0964 0.349922 73.005 1.08984C58.8253 4.53516 47.5753 16.7695 45.2784 31.1953C44.2856 37.4906 44.8716 43.5492 46.6852 49.0477L4.94297 90.7898C-1.64766 97.3805 -1.64766 108.061 4.94297 114.649C8.02688 118.148 12.3394 120 16.4503 120C20.5612 120 25.0847 118.352 28.3823 115.057L70.1245 73.3148C77.8073 75.8484 84.4167 75.2831 87.9769 74.722C102.604 72.4158 114.836 61.1752 118.282 46.7845C120.185 40.3359 120.091 34.3359 118.755 28.7812ZM115.052 45.7266C111.958 58.6547 101.01 68.7398 87.8175 70.8281C86.4464 71.044 80.3831 72.4198 69.5292 68.8406L25.9589 112.411C20.8308 117.539 12.5339 117.546 7.40109 112.411C2.27297 107.283 2.26594 98.9859 7.40109 93.8508L50.9714 50.2805C47.3691 39.3586 48.6961 33.8203 48.9841 31.9922C51.0661 18.7875 61.1505 7.82812 74.0857 4.75781C77.981 3.8257 83.892 3.11742 90.0935 4.74134L71.0529 23.782V48.7663H96.0373L115.12 29.6695C116.364 34.8984 116.341 40.2891 115.052 45.7266ZM18.5339 97.2891C16.463 97.2891 14.7839 98.9677 14.7839 101.039C14.7839 103.11 16.4632 104.789 18.5339 104.789C20.6048 104.789 22.2839 103.11 22.2839 101.039C22.2839 99.1875 20.6034 97.2891 18.5339 97.2891Z" fill="#13376B"/>
            </svg>
            <h5 ref="mobileItem2" class="pt-5 font-semibold">Recommerce</h5>
            <p ref="mobileparagraph2" class="text-gray-600">Resell refurbished products through online platforms, physical stores, or B2B channels. This approach extends product life, reduces environmental impact, and offers cost-effective alternatives.</p>
          </div>

         
          <div  class="text-center">
             <svg width="151" ref="mobileItem3" class="mx-auto" height="120" viewBox="0 0 151 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M77.5243 4.1917C76.1581 3.6287 74.6033 3.6287 73.2371 4.1917L9.61575 30.297C6.07757 31.7339 3.76903 34.9847 3.76903 39.0129V117.903C3.76903 119.152 2.92571 119.788 1.88452 119.788C0.843793 119.788 0 119.152 0 117.903V39.0129C0 33.6655 3.2343 28.8365 8.18352 26.8106L71.8001 0.705104C74.0851 -0.235035 76.6763 -0.235035 78.9613 0.705104L142.587 26.8106C147.534 28.8365 150.761 33.6655 150.761 39.0129V117.903C150.761 119.152 149.913 119.788 148.877 119.788C147.84 119.788 146.992 119.152 146.992 117.903V39.0129C146.992 34.9847 144.684 31.7339 141.15 30.297L77.5243 4.1917ZM28.0558 48.1763C27.2313 48.1763 26.1712 49.2364 26.1712 50.0609V117.903C26.1712 119.152 25.5352 119.788 24.2867 119.788C23.4575 119.788 22.4022 119.152 22.4022 117.903V50.0609C22.4022 47.1399 25.1347 44.4073 28.0558 44.4073H122.494C125.627 44.4073 128.147 47.1399 128.147 50.0609V117.903C128.147 119.152 127.299 119.788 126.263 119.788C125.226 119.788 124.378 119.152 124.378 117.903V50.0609C124.378 49.2364 123.53 48.1763 122.494 48.1763H28.0558ZM105.533 89.8477C109.702 89.8477 113.071 93.2163 113.071 97.3858V112.462C113.071 116.631 109.702 120 105.533 120H45.0164C41.0589 120 37.4783 116.631 37.4783 112.462V74.7716C37.4783 70.6021 41.0589 67.2335 45.0164 67.2335H71.3997C75.7812 67.2335 79.1497 70.6021 79.1497 74.7716V89.8477H105.533ZM71.3997 71.0025H45.0164C43.1554 71.0025 41.2474 72.6986 41.2474 74.7716V89.8477H75.1687V74.7716C75.1687 72.6986 73.6846 71.0025 71.3997 71.0025ZM75.1687 93.6168H41.2474V112.462C41.2474 114.535 43.1554 116.231 45.0164 116.231H75.1687V93.6168ZM79.1497 116.231H105.533C107.606 116.231 109.302 114.535 109.302 112.462V97.3858C109.302 95.3128 107.606 93.6168 105.533 93.6168H79.1497V116.231Z" fill="#13376B"/>
            </svg>
            <h5 ref="mobileItem3" class="pt-5 font-semibold">Sourcing</h5>
            <p ref="mobileparagraph3" class="text-gray-600">Collect surplus, returned, or end-of-life products from suppliers, retailers, or customers. This step reduces waste and sets the foundation for reuse or recycling.</p>
          </div>

       
          <div class="text-center">
            <svg width="105" class="mx-auto" height="120" viewBox="0 0 105 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 30V22.5C30 10.0734 39.8672 0 52.5 0C64.9219 0 75 10.0734 75 22.5V30H93.75C99.9609 30 105 35.0391 105 41.25V97.5C105 109.922 94.9219 120 82.5 120H22.5C10.0734 120 0 109.922 0 97.5V41.25C0 35.0391 5.03672 30 11.25 30H30ZM33.75 30H71.25V22.5C71.25 12.1453 62.8594 3.75 52.5 3.75C42.1406 3.75 33.75 12.1453 33.75 22.5V30ZM11.25 33.75C7.10859 33.75 3.75 37.1016 3.75 41.25V97.5C3.75 107.859 12.1453 116.25 22.5 116.25H82.5C92.8594 116.25 101.25 107.859 101.25 97.5V41.25C101.25 37.1016 97.8984 33.75 93.75 33.75H75V54.375C75 55.4062 74.1562 56.25 73.125 56.25C72.0938 56.25 71.25 55.4062 71.25 54.375V33.75H33.75V54.375C33.75 55.4062 32.9062 56.25 31.875 56.25C30.8438 56.25 30 55.4062 30 54.375V33.75H11.25Z" fill="#13376B"/>
            </svg>
            <h5 ref="mobileItem4" class="pt-5 font-semibold">Refurbishing & Repair</h5>
            <p ref="mobileparagraph4" class="text-gray-600">Inspect, repair, and restore products by skilled technicians. Salvaged components from non-repairable items are repurposed to maximize value.</p>
          </div>
        </div>
      </div>
    </section>

</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'


const { setupAnimations } = useAnimations()
const leftSvg1 = ref(null);
const leftSvg2 = ref(null);
const rightSvg1 = ref(null);
const rightSvg2 = ref(null);
const item1 = ref(null);
const item2 = ref(null);
const item3 = ref(null);
const item4 = ref(null);
const itemHeader = ref(null);
const mobileItem1 = ref(null);
const mobileItem2 = ref(null);
const mobileItem3 = ref(null);
const mobileItem4 = ref(null);
const mobileparagraph1 = ref(null);
const mobileparagraph2 = ref(null);
const mobileparagraph3 = ref(null);
const mobileparagraph4 = ref(null);


setupAnimations([
  {
    element: leftSvg1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: leftSvg2,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: rightSvg1,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: rightSvg2,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: item1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: item2,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: item3,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: item4,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: mobileItem1,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: mobileItem2,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: mobileItem3,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: mobileItem4,
    props: { translateX: ['100%', '0'], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: mobileparagraph1,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out' },
  },
  {
    element: mobileparagraph2,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out' },
  },
  {
    element: mobileparagraph3,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out' },
  },
  {
    element: mobileparagraph4,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out' },
  },  
])

</script>

<style scoped>
.custom-text-box {
  max-width: 633px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .custom-text-box {
    margin-left: 0;
    margin-right: 0;
  }
}






</style>
