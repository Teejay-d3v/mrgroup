<template>
  <section>
    <div class=" mx-auto " style="width: 1600px; height: 891px; display: flex; justify-content: center; align-items: center; ">
        <div ref="title" style="width: 1300px">
          <h1 class="shadow-text " 
          style="width: 1188px; font-family: DM Sans;
          font-size: 96px;
          font-weight: 600;
          line-height: 106px;
          text-align: center;
          width: 100%;
          ">
            Maximize the Value of
          surplus with HMR Reverse 
                 Logistics
          </h1>
          <p ref="paragraph1" class="text-center mx-auto mb-[24px] mt-[12px]" 
          style="font-family: Poppins;
            font-size: 18px;
            font-weight: 400;
            line-height: 36px;
            text-align: center;
            width: 506px;
            height: 72px;
            ">
            Transforming Excess Inventory into Valuable Assets with 
            Innovative Solutions and Sustainable Practices.
          </p>
          <div class="flex space-x-4 justify-center">
            <button 
              style="
              width: 178px;
              height: 60px;
              padding: 12px 32px 12px 32px;
              gap: 8px;
              border-radius: 8px ;
              background: #FD7936;
              ">
              Discover More 
            </button>
            <button 
            
            style="
              border: 1px solid;
              width: 178px;
              height: 60px;
              padding: 12px 32px 12px 32px;
              gap: 8px;
              border-radius: 8px ;
              ">
              Read More
            </button>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import Card from '@/components/Card.vue'
const title = ref(null)
const paragraph1 = ref(null)


const { setupAnimations } = useAnimations()

setupAnimations([
  {
    element: title,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { x: [-50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  }
])
</script>

<style scoped>
.cusotm-bg-image {
    height: 1000px;
    background-color: rgb(0, 0, 63);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>