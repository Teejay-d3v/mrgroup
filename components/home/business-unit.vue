<template>
  <section style="">
  <div class="flex flex-col items-center justify-center text-white text-center ">
    <div class="text-gray-600 body-font">
      <div class="px-[64px] pt-[80px] pb-[160px] mx-auto">

      <div class="grid grid-cols-2 gap-4 text-left">
        <div>
          <span style="font-family: DM Sans; 
            font-size: 14px; 
            font-weight: 700; 
            line-height: 18.23px; 
            color: #DB5F2A; 
            position: relative;">
            <a href="" style="text-decoration: none; color: inherit; position: relative; display: inline-block;">
              HOME
            </a>
              <span style="content: ''; 
                position: absolute; 
                left: 0; 
                bottom: -6px; 
                height: 2px; 
                width: 50%; 
                background-color: #DB5F2A; 
              ">
            </span>
          </span>
          <h1 class="mt-[8px]" ref="header" 
              style="font-family: DM Sans;
                    font-size: 56px;
                    font-weight: 600;
                    line-height: 64px;
                    color:#000000;">
            HMR Group Business Units
          </h1>
        </div>

        <div class="mt-auto justify-self-end">
          <button 
            style="width: 223.97px;
                  height: 60px;
                  padding: 12px 32px;
                  border-radius: 8px;
                  border: 1px solid;
                  display: flex; 
                  align-items: center; 
                  justify-content: center;
                  opacity: 1; 
                  ">
                  <span style="font-family: Poppins;
                      font-size: 16px;
                      font-weight: 600;
                      line-height: 36px;
                      text-align: center;
                      ">
                    View All Services
                  </span>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
              <path d="M7 17l10-10M17 17V7h-10" />
            </svg>
          </button>
        </div>
      </div>



      <section  class="my-10">
        <div class="grid grid-cols-1 lg:grid-cols-3  ">
          <div ref="card1" class="flex flex-col  items-center md:items-start  border text-left shadow-md mr-[24px]" 
          style="
            height: 616px;
            padding: 52px 64px 52px 64px;
            gap: 16px;
            border-radius: 12px ;
            ">
            <p style="font-family: Poppins;
              font-size: 20px;
              font-weight: 600;
              line-height: 36px;
              text-align: center;
              ">01.</p>
            <div class="flex justify-left mb-4">
              <svg width="125" height="100" viewBox="0 0 125 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.625 12.5V18.75H42.1875C43.0469 18.75 43.75 19.4492 43.75 20.3125C43.75 21.1719 43.0469 21.875 42.1875 21.875H1.5625C0.699609 21.875 0 21.1719 0 20.3125C0 19.4492 0.699609 18.75 1.5625 18.75H12.5V12.5C12.5 5.5957 18.0957 0 25 0H68.75C75.6445 0 81.25 5.5957 81.25 12.5V18.75H92.7148C94.8047 18.75 96.7773 19.5703 98.2422 21.0352L116.465 39.082C117.93 40.7227 118.75 42.6953 118.75 44.7852V78.125H123.438C124.297 78.125 125 78.8281 125 79.6875C125 80.5469 124.297 81.25 123.438 81.25H112.422C112.48 81.7578 112.5 82.2852 112.5 82.8125C112.5 92.3047 104.805 100 95.3125 100C85.8203 100 78.125 92.3047 78.125 82.8125C78.125 82.2852 78.1445 81.7578 78.2031 81.25H46.7969C46.8555 81.7578 46.875 82.2852 46.875 82.8125C46.875 92.3047 39.1797 100 29.6875 100C20.1953 100 12.5 92.3047 12.5 82.8125C12.5 82.2852 12.5234 81.7578 12.5703 81.25H12.5V56.25H15.625V72.9297C18.7363 68.5156 23.8672 65.625 29.6875 65.625C37.5586 65.625 44.1797 70.918 46.2305 78.125H78.125V12.5C78.125 7.32227 73.9258 3.125 68.75 3.125H25C19.8242 3.125 15.625 7.32227 15.625 12.5ZM114.844 42.1875C114.668 41.9336 114.473 41.6797 114.082 41.4648L96.0352 23.2422C95.1562 22.3633 93.9648 21.875 92.7148 21.875H81.25V42.1875H114.844ZM81.25 45.3125V72.9297C84.3555 68.5156 89.4922 65.625 95.3125 65.625C103.184 65.625 109.805 70.918 111.855 78.125H115.625V45.3125H81.25ZM29.6875 68.75C21.9141 68.75 15.625 75.0391 15.625 82.8125C15.625 90.5859 21.9141 96.875 29.6875 96.875C37.4609 96.875 43.75 90.5859 43.75 82.8125C43.75 75.0391 37.4609 68.75 29.6875 68.75ZM95.3125 96.875C103.086 96.875 109.375 90.5859 109.375 82.8125C109.375 75.0391 103.086 68.75 95.3125 68.75C87.5391 68.75 81.25 75.0391 81.25 82.8125C81.25 90.5859 87.5391 96.875 95.3125 96.875ZM54.6875 31.25C55.5469 31.25 56.25 31.9531 56.25 32.8125C56.25 33.6719 55.5469 34.375 54.6875 34.375H7.8125C6.94922 34.375 6.25 33.6719 6.25 32.8125C6.25 31.9531 6.94922 31.25 7.8125 31.25H54.6875ZM42.1875 43.75C43.0469 43.75 43.75 44.4531 43.75 45.3125C43.75 46.1719 43.0469 46.875 42.1875 46.875H1.5625C0.699609 46.875 0 46.1719 0 45.3125C0 44.4531 0.699609 43.75 1.5625 43.75H42.1875Z" fill="black"/>
                </svg>

            </div>
            <div class="text-center md:text-left">
              <h4 class="mb-[12px]" style="font-family: DM Sans;
                font-size: 28px;
                font-weight: 600;
                line-height: 36px;
                color: #000000;
                ">Reverse Logistics</h4>
              <p style="font-family: Poppins;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 36px;
                  text-align: left;
                  width: 389.33px;
                  height: 180px;
                  ">At HMR Reverse Logistics, we specialize in transforming surplus and returned products into valuable assets through efficient and sustainable reverse logistics solutions.</p>
            </div>
            <div>
              <a class="text-orange-500 inline-flex items-center border-t-2" style="width: 389.33px;
                  height: 56px;
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  border: 1px 0px 0px 0px solid;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;
                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

          <div ref="card2" class="flex flex-col  items-center md:items-start  border text-left shadow-md mr-[24px]"          
          style="
            height: 616px;
            padding: 52px 64px 52px 64px;
            gap: 16px;
            border-radius: 12px ;
            ">
            <p style="font-family: Poppins;
              font-size: 20px;
              font-weight: 600;
              line-height: 36px;
              text-align: center;
              ">02.</p>
            <div class="flex justify-left mb-4">
              <svg width="113" height="100" viewBox="0 0 113 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.2083 3.125C77.384 3.125 81.5833 7.32422 81.5833 12.5V37.5C81.5833 38.5938 81.3879 39.6484 81.0559 40.625H84.3176C84.5715 39.6289 84.7083 38.5742 84.7083 37.5V12.5C84.7083 5.60547 79.1028 0 72.2083 0H62.8333H50.3333H40.9583C34.0637 0 28.4583 5.60547 28.4583 12.5V37.5C28.4583 38.5742 28.595 39.6289 28.8489 40.625H32.1106C31.759 39.6484 31.5833 38.5938 31.5833 37.5V12.5C31.5833 7.32422 35.7825 3.125 40.9583 3.125H47.2083V15.625C47.2083 19.082 50.0012 21.875 53.4583 21.875H59.7083C63.1653 21.875 65.9583 19.082 65.9583 15.625V3.125H72.2083ZM50.3333 3.125H62.8333V15.625C62.8333 17.3438 61.427 18.75 59.7083 18.75H53.4583C51.7395 18.75 50.3333 17.3438 50.3333 15.625V3.125ZM60.4895 96.582C62.7356 98.7109 65.7629 100 69.0833 100H100.333C107.228 100 112.833 94.3945 112.833 87.5V59.375C112.833 52.4805 107.228 46.875 100.333 46.875H94.0833H90.9583H78.4583H75.3333H69.0833C65.1379 46.875 61.6028 48.7109 59.3176 51.5625C59.9817 52.4805 60.5676 53.4766 61.0559 54.5117C62.6965 51.7969 65.6848 49.9805 69.0833 49.9805H75.3333V62.4805C75.3333 65.9375 78.1262 68.7305 81.5833 68.7305H87.8333C91.2903 68.7305 94.0833 65.9375 94.0833 62.4805V50H100.333C105.509 50 109.708 54.1992 109.708 59.375V87.5C109.708 92.6758 105.509 96.875 100.333 96.875H69.0833C66.1731 96.875 63.5754 95.5469 61.8567 93.4766C61.4856 94.5508 61.0364 95.6055 60.4895 96.582ZM78.4583 50H90.9583V62.5C90.9583 64.2188 89.552 65.625 87.8333 65.625H81.5833C79.8645 65.625 78.4583 64.2188 78.4583 62.5V50ZM53.4583 59.375V87.5C53.4583 92.6758 49.259 96.875 44.0833 96.875H12.8333C7.65747 96.875 3.45825 92.6758 3.45825 87.5V59.375C3.45825 54.1992 7.65747 50 12.8333 50H19.0833V62.5C19.0833 65.957 21.8762 68.75 25.3333 68.75H31.5833C35.0403 68.75 37.8333 65.957 37.8333 62.5V50H44.0833C49.259 50 53.4583 54.1992 53.4583 59.375ZM22.2083 62.5V50H34.7083V62.5C34.7083 64.2188 33.302 65.625 31.5833 65.625H25.3333C23.6145 65.625 22.2083 64.2188 22.2083 62.5ZM44.0833 46.875H37.8333H34.7083H22.2083H19.0833H12.8333C5.93872 46.875 0.333252 52.4805 0.333252 59.375V87.5C0.333252 94.3945 5.93872 100 12.8333 100H44.0833C50.9778 100 56.5833 94.3945 56.5833 87.5V59.375C56.5833 52.4805 50.9778 46.875 44.0833 46.875Z" fill="black"/>
              </svg>

            </div>
            <div class="text-center md:text-left">
              <h4 class="mb-[12px]" style="font-family: DM Sans;
                font-size: 28px;
                font-weight: 600;
                line-height: 36px;
                color: #000000;
                ">Trading Haus</h4>
              <p style="font-family: Poppins;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 36px;
                  text-align: left;
                  width: 389.33px;
                  height: 180px;
                  ">Our Trading Haus store offers a wide range of general merchandise, providing quality products to meet your retail needs at competitive prices with exceptional service.</p>
            </div>
            <div>
              <a class="text-orange-500 inline-flex items-center border-t-2" style="width: 389.33px;
                  height: 56px;
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  border: 1px 0px 0px 0px solid;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;

                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

          <div ref="card3" class="flex flex-col  items-center md:items-start  border text-left shadow-md mr-[24px]"          
          style="
            height: 616px;
            padding: 52px 64px 52px 64px;
            gap: 16px;
            border-radius: 12px ;
            ">
            <p style="font-family: Poppins;
              font-size: 20px;
              font-weight: 600;
              line-height: 36px;
              text-align: center;
              ">03.</p>
            <div class="flex justify-left mb-4">
              <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.663 45.4119C100.663 44.5137 99.9287 43.8496 99.1014 43.8496C98.7008 43.8496 98.3004 44.0024 97.9959 44.3068L95.6698 46.6329L54.0305 4.99359L56.3566 2.66749C56.6613 2.36282 56.814 1.96263 56.814 1.56226C56.814 0.664042 56.0801 0 55.2527 0C54.8522 0 54.4518 0.152769 54.1473 0.457212L27.6376 26.9749C27.3251 27.2874 27.1688 27.678 27.1688 28.0882C27.1688 28.9171 27.835 29.6499 28.7305 29.6499C29.1309 29.6499 29.5311 29.4971 29.8356 29.1924L31.9332 27.0968L51.6396 46.8032L37.0514 61.3879L39.2603 63.5968L53.8516 49.0055L73.558 68.7119L71.4604 70.8095C71.1558 71.1142 71.003 71.5144 71.003 71.9146C71.003 72.8132 71.7386 73.4764 72.5647 73.4764C72.9651 73.4764 73.3653 73.3236 73.6697 73.019L100.192 46.4964C100.506 46.2126 100.663 45.8025 100.663 45.4119ZM34.1413 24.8852L51.8185 7.20798L55.9062 11.2957L38.2427 28.9671L34.1413 24.8852ZM40.4497 31.174L58.1269 13.4968L87.1689 42.5389L69.4917 60.2161L40.4497 31.174ZM75.7806 66.5245L71.6929 62.4367L89.37 44.7595L93.4578 48.8473L75.7806 66.5245ZM33.7507 58.0872C32.5202 56.8568 30.9187 56.2514 29.3172 56.2514C27.7184 56.2514 26.1201 56.8619 24.8994 58.0818L2.49775 80.4834C1.27708 81.7037 0.666748 83.3017 0.666748 84.9013C0.666748 86.5008 1.27708 88.0984 2.49775 89.3191L11.3354 98.1567C12.5541 99.3946 14.1536 100 15.7532 100C17.3528 100 18.9504 99.3897 20.171 98.169L42.5727 75.7674C43.7933 74.5467 44.4039 72.9471 44.4039 71.3495C44.4039 69.7509 43.7935 68.1524 42.5731 66.9317L33.7507 58.0872ZM41.1137 71.3485C41.1137 72.1485 40.8092 72.9483 40.2005 73.5575L17.7988 95.9591C17.3703 96.5431 16.5872 96.8751 15.7532 96.8751C14.919 96.8751 14.1347 96.5501 13.5443 95.9595L4.70666 87.1219C4.11625 86.5321 3.79106 85.7479 3.79106 84.9149C3.79106 84.0819 4.11605 83.2968 4.70686 82.706L27.1085 60.3044C27.7157 59.7083 28.4969 59.3763 29.3172 59.3763C30.1514 59.3763 30.9357 59.7013 31.5261 60.2911L40.3638 69.1287C40.977 69.747 41.1137 70.5478 41.1137 71.3485Z" fill="black"/>
                </svg>

            </div>
            <div class="text-center md:text-left">
              <h4 class="mb-[12px]" style="font-family: DM Sans;
                font-size: 28px;
                font-weight: 600;
                line-height: 36px;
                color: #000000;
                ">Auctions</h4>
              <p style="font-family: Poppins;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 36px;
                  text-align: left;
                  width: 389.33px;
                  height: 180px;
                  ">HMR Auction facilitates the sale of items, including automotive and machinery, through a transparent and efficient auction process.</p>
            </div>
            <div>
              <a class=" inline-flex items-center border-t-2" style="width: 389.33px;
                  height: 56px;
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  border: 1px 0px 0px 0px solid;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;

                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section  class="mt-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7">
          <div ref="card4" class="flex flex-col col-span-12 lg:col-span-4 h-auto items-center md:items-start p-5 lg:p-12  gap-4 border rounded-[12px] text-left shadow-md"          
          style="
            padding: 52px 64px 52px 64px;
            gap: 16px;
            border-radius: 12px ;
            ">
            <p style="font-family: Poppins;
              font-size: 20px;
              font-weight: 600;
              line-height: 36px;
              text-align: center;
              ">04.</p>
            <div class="flex justify-left mb-4">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.3222 6.01509L75.0269 40.7996L58.7403 38.1272C57.784 37.9554 56.9155 38.6155 56.7605 39.5483C56.6057 40.4877 57.2454 41.3735 58.1881 41.5284L78.1278 44.8022C78.417 44.6336 78.5032 44.8276 78.5894 44.8276C78.8924 44.8276 79.1954 44.7501 79.4715 44.5851C79.5123 44.5607 79.5123 44.5068 79.5502 44.4795C79.7901 44.3132 79.9257 44.0683 80.0565 43.7984C80.1141 43.6772 80.2215 43.5964 80.2497 43.4659C80.2551 43.4406 80.2816 43.4289 80.2863 43.4032L83.6807 24.1747C83.849 23.2385 83.2227 22.3428 82.2867 22.1778C81.2296 21.9892 80.455 22.6459 80.2867 23.5752L77.6983 38.2347L57.4656 4.24759C55.8739 1.58621 53.0722 0 49.9903 0C46.9084 0 44.1066 1.58621 42.5118 4.23922L36.2403 14.625C35.7446 15.4397 36.0032 16.5086 36.8222 16.9828C37.637 17.4744 38.6941 17.2151 39.1864 16.4002L45.4622 6.01444C47.4041 2.79741 52.3825 2.80819 54.3222 6.01509ZM98.5032 72.4784L87.0355 53.4828C86.5439 52.6679 85.4799 52.4153 84.6713 52.9002C83.8564 53.3918 83.5939 54.4526 84.0855 55.2666L95.5532 74.2623C96.5836 75.9662 96.6172 78.0209 95.634 79.758C94.6777 81.4552 92.953 82.4713 91.0219 82.4713H47.4041L58.3394 71.9239C59.0196 71.264 59.0398 70.1728 58.3798 69.4864C57.7199 68.8062 56.6358 68.786 55.9423 69.446L42.1239 82.7802C41.5582 83.0634 41.1071 83.5366 41.1071 84.2106C41.1071 84.2661 41.1614 84.299 41.1664 84.3533C41.1756 84.3966 41.111 84.4397 41.111 84.4828C41.111 84.9543 41.2995 85.3987 41.6362 85.722L55.9379 99.5151C56.2834 99.8491 56.7144 100 57.1454 100C57.5965 100 58.0478 99.8249 58.3844 99.4746C59.0444 98.7875 59.0241 97.6966 58.344 97.0371L46.8225 85.925H91.0251C94.2169 85.925 97.066 84.2547 98.6414 81.453C100.421 78.6207 100.378 75.2586 98.5032 72.4784ZM29.6885 28.0388C29.5592 28.1034 29.5377 27.9095 29.3653 27.8233C29.3437 27.8017 29.3006 27.8233 29.2791 27.8017C29.0724 27.6935 28.8472 27.7251 28.6116 27.7079C28.3954 27.694 28.2015 27.6293 27.8135 27.694C27.9644 27.694 27.9428 27.6724 27.8997 27.694L9.00104 34.6121C8.10664 34.9569 7.64759 35.9483 7.97733 36.8319C8.30729 37.7276 9.29048 38.1789 10.1864 37.8591L24.598 32.5767L1.30061 72.469C-0.382798 75.2578 -0.436677 78.6112 1.16593 81.4474C2.74158 84.2491 5.5905 85.9194 8.78231 85.9194H28.5463C29.4959 85.9194 30.2702 85.1448 30.2702 84.1953C30.2702 83.2457 29.4959 82.4711 28.5463 82.4711H8.77259C6.84005 82.4711 5.11526 81.4541 4.16052 79.7578C3.17733 78.0203 3.21095 75.9668 4.25479 74.2362L28.1988 33.2448L34.0845 48.1759C34.3437 48.8578 34.9903 49.2672 35.6799 49.2672C35.8887 49.2672 36.1041 49.2302 36.3129 49.146C37.195 48.7992 37.6327 47.7956 37.2825 46.9089L30.0972 28.674C30.0334 28.4698 29.8178 28.3836 29.6885 28.0388Z" fill="black"/>
                </svg>

            </div>
            <div class="text-center md:text-left">
              <h4 class="mb-[12px]" style="font-family: DM Sans;
                font-size: 28px;
                font-weight: 600;
                line-height: 36px;
                color: #000000;
                ">Envirocycle</h4>
              <p style="font-family: Poppins;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 36px;
                  text-align: left;
                  width: 389.33px;
                  height: 180px;
                  ">Envirocycle service, we ensure the responsible destruction of items, minimizing environmental impact and promoting sustainability.</p>
            </div>
            <div>
              <a class="inline-flex items-center border-t-2" style="width: 389.33px;
                  height: 56px;
                  padding: 20px 0px 0px 0px;
                  gap: 12px;
                  border: 1px 0px 0px 0px solid;
                  color:#DB5F2A;
                  font-family: Poppins;
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 36px;
                  text-align: center;

                  ">
                Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M7 17l10-10M17 17V7h-10" />
                </svg>
              </a>
            </div>
          </div>

            <div class="col-span-12 lg:col-span-8 relative mb-16 lg:mb-0 order-2 lg:order-1">
              <div class="relative z-20">
                <img
                  ref="firstImage"
                  src="/public/images/enviro1.png"
                  class="w-[90%]  h-auto rounded-lg shadow-lg opacity-100"  
                  alt="Environment Image 1"

                />
   
                <img
                  ref="secondImage"
                  src="/public/images/enviro2.png"
                  class="w-[40%] h-[60%] max-w-[418px] rounded-lg shadow-lg absolute top-[320px] right-[10%] transform translate-x-[25%] -translate-y-1/5 opacity-100" 
                  alt="Environment Image 2"

                />
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>



</section>
</template>
  
<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import { animate } from 'motion'

const { setupAnimations } = useAnimations()
const header = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)
const firstImage = ref(null)
const secondImage = ref(null)

setupAnimations([
  {
    element: header,
    props: { y: [-100, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out' }
  },
  {
    element: firstImage,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: secondImage,
    props: { translateX: ['100%', '25%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: card1,
    props: { x: [-100, 0], opacity: [0, 1] },
    options: { duration: 0.6, easing: 'ease-out' }
  },
  {
    element: card2,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 0.6,  easing: 'ease-out' }
  },
  {
    element: card3,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 0.6,  easing: 'ease-out' }
  },
  {
    element: card4,
    props: { y: [50, 0], opacity: [0, 1] },
    options: { duration: 0.6, stagger: 0.15, easing: 'ease-out' }
  },
])



</script>
<style scoped>
.p-custom {
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  text-align: left;
}

.border-radius-custom {
  border-radius: 12px; 
}

.inner-border {
  border-radius: 12px; /* Ensure the image has a border radius */
  box-shadow: inset 4px #ff0000; /* Inner border effect; adjust thickness and color as needed */
}
</style>