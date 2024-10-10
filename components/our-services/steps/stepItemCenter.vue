<template>
  <div>
<section class="hidden md:block my-20">
  <div class="w-full flex justify-center">
    <!-- Stepper -->
    <ul class="relative flex flex-col md:flex-row gap-4 w-full ml-60 md:w-[90%]">
      <!-- Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-24 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="lg:mt-3 py-5 rounded-lg shadow-lg border h-[180px] w-[220px] transition-transform transform group-hover:scale-105 ">
          <p class="block mb-2 text-center">01</p>
          <div class="flex justify-center">
            <svg width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.1429 48C47.0429 48 42.8107 44.2929 41.9964 39.4286H28.0036C27.1893 44.2929 22.9571 48 17.8571 48C12.7571 48 8.52929 44.2929 7.71393 39.4286H4.14286C2.24964 39.4286 0.714287 37.8964 0.714287 36V24C0.714287 20.4107 3.47 17.4643 6.98107 17.1643L11.9107 4.84929C13.0786 1.92 15.9179 0 19.0679 0H38.5571C40.9036 0 43.1214 1.065 44.5893 2.895L55.9893 17.1536C63.3714 17.3679 69.2857 23.4214 69.2857 30.8571V36C69.2857 37.8964 67.7536 39.4286 65.8571 39.4286H62.2893C61.475 44.2929 57.2429 48 52.1429 48ZM19.0679 1.71429C16.6143 1.71429 14.4071 3.20786 13.4964 5.48571L8.83786 17.1429H26.4286V1.71429H19.0679ZM7.57143 18.8571C4.73107 18.8571 2.42857 21.1607 2.42857 24V36C2.42857 36.9429 3.19572 37.7143 4.14286 37.7143H7.57143C7.57143 31.9393 12.0821 27.4286 17.8571 27.4286C23.5357 27.4286 28.1429 31.9393 28.1429 37.7143H41.8571C41.8571 31.9393 46.3679 27.4286 52.1429 27.4286C57.8214 27.4286 62.4286 31.9393 62.4286 37.7143H65.8571C66.8 37.7143 67.5714 36.9429 67.5714 36V30.8571C67.5714 24.225 62.2036 18.8571 55.5714 18.8571H7.57143ZM43.1536 3.96643C42.1036 2.5425 40.3893 1.71429 38.5571 1.71429H28.1429V17.1429H53.7929L43.1536 3.96643ZM17.8571 46.2857C22.5929 46.2857 26.4286 42.45 26.4286 37.7143C26.4286 32.9786 22.5929 29.1429 17.8571 29.1429C13.1214 29.1429 9.28572 32.9786 9.28572 37.7143C9.28572 42.45 13.1214 46.2857 17.8571 46.2857ZM52.1429 29.1429C47.4071 29.1429 43.5714 32.9786 43.5714 37.7143C43.5714 42.45 47.4071 46.2857 52.1429 46.2857C56.8786 46.2857 60.7143 42.45 60.7143 37.7143C60.7143 32.9786 56.8786 29.1429 52.1429 29.1429Z" fill="#13376B"/>
            </svg>
          </div>
          <h6 class="text-center mt-3">Auto Auctions</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-24 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="lg:mt-3 py-5 rounded-lg shadow-lg border h-[180px] w-[220px] transition-transform transform group-hover:scale-105 ">
          <span class="block mb-2 text-center">02</span>
          <div class="flex justify-center">
            <svg width="54" height="48"  viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.14014 0C0.727637 0 0.390137 0.3375 0.390137 0.75C0.390137 1.1625 0.727637 1.5 1.14014 1.5H4.67451C5.74326 1.5 6.67139 2.25938 6.87764 3.31875L12.4464 31.7625C12.9245 34.2281 15.0901 36 17.6026 36H47.6401C48.0526 36 48.3901 35.6625 48.3901 35.25C48.3901 34.8375 48.0526 34.5 47.6401 34.5H17.5933C15.8026 34.5 14.2558 33.2344 13.9089 31.4719L13.037 27H44.8183C47.2558 27 49.3745 25.3219 49.9276 22.9406L53.5089 7.60312C54.062 5.25 52.2714 3 49.862 3H8.34014C7.98389 1.25625 6.45576 0 4.67451 0H1.14014ZM8.64014 4.5H49.862C51.3151 4.5 52.3839 5.85 52.0558 7.26562L48.4745 22.6031C48.0808 24.3 46.562 25.5 44.8183 25.5H12.7464L8.64014 4.5ZM13.8901 43.5C13.8901 42.7043 14.2062 41.9413 14.7688 41.3787C15.3314 40.8161 16.0945 40.5 16.8901 40.5C17.6858 40.5 18.4488 40.8161 19.0115 41.3787C19.5741 41.9413 19.8901 42.7043 19.8901 43.5C19.8901 44.2957 19.5741 45.0587 19.0115 45.6213C18.4488 46.1839 17.6858 46.5 16.8901 46.5C16.0945 46.5 15.3314 46.1839 14.7688 45.6213C14.2062 45.0587 13.8901 44.2957 13.8901 43.5ZM21.3901 43.5C21.3901 42.909 21.2737 42.3239 21.0476 41.7779C20.8214 41.232 20.49 40.7359 20.0721 40.318C19.6543 39.9002 19.1582 39.5687 18.6122 39.3425C18.0662 39.1164 17.4811 39 16.8901 39C16.2992 39 15.714 39.1164 15.1681 39.3425C14.6221 39.5687 14.126 39.9002 13.7082 40.318C13.2903 40.7359 12.9588 41.232 12.7327 41.7779C12.5065 42.3239 12.3901 42.909 12.3901 43.5C12.3901 44.091 12.5065 44.6761 12.7327 45.2221C12.9588 45.768 13.2903 46.2641 13.7082 46.682C14.126 47.0998 14.6221 47.4313 15.1681 47.6575C15.714 47.8836 16.2992 48 16.8901 48C17.4811 48 18.0662 47.8836 18.6122 47.6575C19.1582 47.4313 19.6543 47.0998 20.0721 46.682C20.49 46.2641 20.8214 45.768 21.0476 45.2221C21.2737 44.6761 21.3901 44.091 21.3901 43.5ZM43.8901 40.5C44.6858 40.5 45.4488 40.8161 46.0115 41.3787C46.5741 41.9413 46.8901 42.7043 46.8901 43.5C46.8901 44.2957 46.5741 45.0587 46.0115 45.6213C45.4488 46.1839 44.6858 46.5 43.8901 46.5C43.0945 46.5 42.3314 46.1839 41.7688 45.6213C41.2062 45.0587 40.8901 44.2957 40.8901 43.5C40.8901 42.7043 41.2062 41.9413 41.7688 41.3787C42.3314 40.8161 43.0945 40.5 43.8901 40.5ZM43.8901 48C45.0836 48 46.2282 47.5259 47.0721 46.682C47.916 45.8381 48.3901 44.6935 48.3901 43.5C48.3901 42.3065 47.916 41.1619 47.0721 40.318C46.2282 39.4741 45.0836 39 43.8901 39C42.6967 39 41.5521 39.4741 40.7082 40.318C39.8642 41.1619 39.3901 42.3065 39.3901 43.5C39.3901 44.6935 39.8642 45.8381 40.7082 46.682C41.5521 47.5259 42.6967 48 43.8901 48Z" fill="#13376B"/>
              </svg>

          </div>
          <h6 class="text-center mt-3">HMRBid.com</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-24 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="lg:mt-3 py-5 rounded-lg shadow-lg border h-[180px] w-[220px] transition-transform transform group-hover:scale-105 ">
          <p class="block mb-2 text-center">03</p>
          <div class="flex justify-center">
            <svg width="74" height="48"  viewBox="0 0 74 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.2308 2.76923C46.2308 1.23462 47.4654 0 49 0H54.85C56.0846 0 57.25 0.484615 58.1154 1.35L68.8808 12.0115C69.7461 12.9808 70.2308 14.1462 70.2308 15.3808V35.0769H73C73.5077 35.0769 73.9231 35.4923 73.9231 36C73.9231 36.5077 73.5077 36.9231 73 36.9231H66.4923C66.5269 37.2231 66.5384 37.5346 66.5384 37.8462C66.5384 43.4538 61.9923 48 56.3846 48C50.7769 48 46.2308 43.4538 46.2308 37.8462C46.2308 37.5346 46.2423 37.2231 46.2769 36.9231H27.7231C27.7577 37.2231 27.7692 37.5346 27.7692 37.8462C27.7692 43.4538 23.2231 48 17.6154 48C12.0077 48 7.46152 43.4538 7.46152 37.8462C7.46152 37.5346 7.47537 37.2231 7.50306 36.9231H0.999981C0.490212 36.9231 0.0769043 36.5077 0.0769043 36C0.0769043 35.4923 0.490212 35.0769 0.999981 35.0769H7.84344C9.04921 30.8192 12.9654 27.6923 17.6154 27.6923C22.2654 27.6923 26.1769 30.8192 27.3884 35.0769H46.2308V2.76923ZM48.0769 32.0077C49.9115 29.4 52.9461 27.6923 56.3846 27.6923C61.0346 27.6923 64.9461 30.8192 66.1577 35.0769H68.3846V15.6923H48.0769V32.0077ZM48.0769 13.8462H67.9231C67.8192 13.6962 67.7038 13.5462 67.4731 13.4192L56.8115 2.65385C56.2923 2.13462 55.5884 1.84615 54.85 1.84615H49C48.4923 1.84615 48.0769 2.26154 48.0769 2.76923V13.8462ZM17.6154 46.1538C22.2077 46.1538 25.9231 42.4385 25.9231 37.8462C25.9231 33.2538 22.2077 29.5385 17.6154 29.5385C13.0231 29.5385 9.30767 33.2538 9.30767 37.8462C9.30767 42.4385 13.0231 46.1538 17.6154 46.1538ZM56.3846 29.5385C51.7923 29.5385 48.0769 33.2538 48.0769 37.8462C48.0769 42.4385 51.7923 46.1538 56.3846 46.1538C60.9769 46.1538 64.6923 42.4385 64.6923 37.8462C64.6923 33.2538 60.9769 29.5385 56.3846 29.5385Z" fill="#13376B"/>
            </svg>

          </div>
          <h6 class="text-center mt-3" >Machinery Auctions</h6>
        </div>
      </li>
      <!-- End Item -->

      <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
        <div class="min-w-7 min-h-7 ml-24 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="lg:mt-3 py-5 rounded-lg shadow-lg border h-[180px] w-[220px] transition-transform transform group-hover:scale-105 ">
          <p class="block mb-2 text-center">04</p>
          <div class="flex justify-center">
            <svg width="48" height="48"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.999 21.7977C47.999 21.3666 47.6467 21.0478 47.2496 21.0478C47.0573 21.0478 46.8651 21.1211 46.719 21.2673L45.6025 22.3838L25.6156 2.39693L26.7321 1.2804C26.8784 1.13415 26.9517 0.942064 26.9517 0.749883C26.9517 0.31874 26.5994 0 26.2022 0C26.01 0 25.8178 0.073329 25.6716 0.219462L12.947 12.948C12.797 13.098 12.722 13.2855 12.722 13.4823C12.722 13.8802 13.0418 14.2319 13.4716 14.2319C13.6638 14.2319 13.8559 14.1586 14.002 14.0124L15.0089 13.0065L24.4679 22.4655L17.4656 29.4662L18.5259 30.5265L25.5297 23.5226L34.9888 32.9817L33.9819 33.9886C33.8357 34.1348 33.7624 34.3269 33.7624 34.519C33.7624 34.9503 34.1154 35.2687 34.512 35.2687C34.7042 35.2687 34.8963 35.1954 35.0424 35.0491L47.7733 22.3183C47.924 22.1821 47.999 21.9852 47.999 21.7977ZM16.0688 11.9449L24.5538 3.45983L26.5159 5.42196L18.0374 13.9042L16.0688 11.9449ZM19.0968 14.9635L27.5818 6.47848L41.522 20.4187L33.037 28.9037L19.0968 14.9635ZM36.0556 31.9318L34.0935 29.9696L42.5786 21.4846L44.5407 23.4467L36.0556 31.9318ZM15.8813 27.8819C15.2907 27.2913 14.5219 27.0007 13.7532 27.0007C12.9858 27.0007 12.2186 27.2937 11.6326 27.8793L0.879855 38.632C0.293936 39.2178 0.000976562 39.9848 0.000976562 40.7526C0.000976562 41.5204 0.293936 42.2872 0.879855 42.8732L5.12191 47.1152C5.70689 47.7094 6.47468 48 7.24247 48C8.01026 48 8.77711 47.707 9.36303 47.1211L20.1158 36.3683C20.7017 35.7824 20.9948 35.0146 20.9948 34.2478C20.9948 33.4805 20.7018 32.7131 20.116 32.1272L15.8813 27.8819ZM19.4155 34.2473C19.4155 34.6313 19.2694 35.0152 18.9772 35.3076L8.22438 46.0604C8.01869 46.3407 7.64277 46.5 7.24247 46.5C6.84208 46.5 6.46559 46.3441 6.18219 46.0606L1.94013 41.8185C1.65674 41.5354 1.50065 41.159 1.50065 40.7592C1.50065 40.3593 1.65664 39.9825 1.94023 39.6989L12.693 28.9461C12.9845 28.66 13.3595 28.5006 13.7532 28.5006C14.1536 28.5006 14.5301 28.6566 14.8135 28.9397L19.0555 33.1818C19.3499 33.4786 19.4155 33.8629 19.4155 34.2473Z" fill="#13376B"/>
            </svg>

          </div>
          <h6 class=" text-center mt-3">Onsite Auction & Demolition</h6>
        </div>
      </li>
      <!-- End Item -->

            <!-- Repeat Item -->
      <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block text">
        <div class="min-w-7 min-h-7 ml-24 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
          <span class="size-7 flex justify-center items-center shrink-0 bg-orange-600 font-medium text-gray-800 rounded-full"></span>
          <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
        </div>
        <div class="lg:mt-3 py-5 rounded-lg shadow-lg border h-[180px] w-[220px] transition-transform transform group-hover:scale-105 ">
          <p class="block mb-2 text-center">05</p>
          <div class="flex justify-center">
            <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5065 17.25C32.7533 17.25 33.7565 18.2531 33.7565 19.5V28.5C33.7565 29.7469 32.7533 30.75 31.5065 30.75H22.5065C21.2596 30.75 20.2565 29.7469 20.2565 28.5V19.5C20.2565 18.2531 21.2596 17.25 22.5065 17.25H31.5065ZM21.7565 28.5C21.7565 28.9125 22.094 29.25 22.5065 29.25H31.5065C31.919 29.25 32.2565 28.9125 32.2565 28.5V19.5C32.2565 19.0875 31.919 18.75 31.5065 18.75H22.5065C22.094 18.75 21.7565 19.0875 21.7565 19.5V28.5ZM26.5096 0.188536C26.7908 -0.0628453 27.2221 -0.0628453 27.5033 0.188536L36.0065 7.71938V5.25C36.0065 4.00782 37.0096 3 38.2565 3H45.7565C47.0033 3 48.0065 4.00782 48.0065 5.25V18.3469L53.7533 23.4375C54.0627 23.7094 54.0908 24.1031 53.7346 24.4969C53.5471 24.8063 53.069 24.8344 52.7596 24.4781L48.0065 20.3531V42C48.0065 45.3094 45.3158 48 42.0065 48H12.0065C8.6924 48 6.00646 45.3094 6.00646 42V20.3531L1.25334 24.4781C0.94368 24.8344 0.46968 24.8063 0.195086 24.4969C-0.0796201 24.1031 -0.0508763 23.7094 0.259211 23.4375L26.5096 0.188536ZM36.0065 9.75V9.72188L27.0065 1.75219L7.50646 19.0219V42C7.50646 44.4844 9.52208 46.5 12.0065 46.5H42.0065C44.4908 46.5 46.5065 44.4844 46.5065 42V19.0219L36.0346 9.66563L36.0065 9.75ZM37.5065 5.25V9.04782L46.5065 17.0156V5.25C46.5065 4.83563 46.169 4.5 45.7565 4.5H38.2565C37.844 4.5 37.5065 4.83563 37.5065 5.25Z" fill="#13376B"/>
            </svg>

          </div>
          <h6 class="text-center mt-3">Real Estates</h6>
        </div>
      </li>
      <!-- End Item -->
    </ul>
    <!-- End Stepper -->
  </div>
</section>

<!-- Mobile -->
  <section class="block md:hidden my-10">
      <div class="flex flex-col justify-center items-start w-full px-4">
        <div class="flex flex-col justify-center items-center w-full space-y-8">
          <!-- First Service -->
          <div class="text-center">
            <img 
              src="/public/images/ourservice.png" 
              alt="List Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>01</p>
            <h5 class="pb-5 font-semibold">Auto Auctions</h5>
          </div>

          <!-- Second Service -->
          <div class="text-center">
            <img 
              src="/public/images/ourservice.png" 
              alt="Selling & Shipping Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>02</p>
            <h5 class="pb-5 font-semibold">HMRBid.com</h5>
          </div>

          <!-- Third Service -->
          <div class="text-center">
            <img 
              src="/public/images/ourservice.png" 
              alt="Sign-up Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>03</p>
            <h5 class="pb-5 font-semibold">Machinery Auctions</h5>
          </div>
          
          <!-- Fourth Service -->
          <div class="text-center">
            <img 
              src="/public/images/ourservice.png" 
              alt="Tailored Analysis Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>04</p>
            <h5 class="pb-5 font-semibold">Onsite Auction & Demolition</h5>
          </div>

          <!-- fifth Service -->
          <div class="text-center">
            <img 
              src="/public/images/ourservice.png" 
              alt="Tailored Analysis Service" 
              class="h-24 w-24 object-contain mx-auto"
            />
            <p>05</p>
            <h5 class="pb-5 font-semibold">Real Estates</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
