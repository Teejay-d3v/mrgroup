<template>
  <div class="grid grid-cols-12 gap-6 bg-blue-900 text-white ">
    <div class="custom-bg col-span-12 py-24 p-10">
      <div class="grid grid-cols-12 gap-4 md:gap-8 mx-2 md:mx-10">

        <div class="col-span-12 p-5">
          <div>
            <h3 ref="title1" class="leading-[36px] text-left mb-10">
              Tech Focused Regenerative Circular Supply Chain Company
            </h3>
            <p ref="paragraph1" class="leading-[36px] font-normal">
              HMR is at the forefront of reverse logistics and the circular economy, dedicated to helping companies achieve their Environmental, Social, and Governance (ESG) goals while reducing greenhouse gas (GHG) emissions. By transforming traditional supply chains into circular systems, HMR enables businesses to minimize waste and carbon footprint, enhancing sustainability. Their expertise in managing the return and reuse of products not only aids in environmental conservation but also supports clients in realizing economic and reputational benefits. HMR stands as a key ally for businesses striving towards a greener, more sustainable future.
            </p>
          </div>
        </div>

        <div ref="sectionRef" class="col-span-12 grid grid-cols-12 gap-4 md:gap-8 pt-4 md:py-10 p-5 md:p-0">
          <div class="flex flex-col md:flex-row col-span-12 md:col-span-4 mb-4 md:mb-0"> 
            <div class="text-center md:text-left mb-4 md:mb-0">
              <h2 ref="achievementCounter1" class="font-bold text-[40px] md:text-[56px] leading-[1]">0</h2>
              <p>Tonnes</p>
            </div>
            <div class="text-center md:text-left mb-4 md:mb-0 md:mx-8"> 
              <h2 ref="achievementCounter2" class="font-bold text-[40px] md:text-[56px] leading-[1]">0</h2>
              <p>Metric Tonnes CO2e prevented</p>
            </div>
          </div>
          <div class="col-span-12 md:col-span-7 mb-4 md:mb-0 pr-32">
            <h4 ref="title2" class="">
              Waste prevented from being dumped in landfills through HMR’s regenerative circular supply chain
            </h4>
          </div>
        </div>


        <!-- Three  -->
        <div class="col-span-12 grid grid-cols-12 gap-4 p-5 md:p-0">
          <div class="col-span-12 md:col-span-4 mb-4">
            <h5 ref="title3">Eco-Friendly Sharing and Disposal</h5>
            <p ref="paragraph2" class="leading-[36px] font-normal">
              We assist in managing your disposable requirements with our leading expertise in asset disposal, offering a range of environmentally conscious options that align with your company’s ESGF objectives.
            </p>
          </div>
          <div class="col-span-12 md:col-span-4 mb-4">
            <h5 ref="title4">Collaborative Liquidation Solutions</h5>
            <p ref="paragraph3" class="leading-[36px] font-normal">
              By thoroughly analyzing your supply chains and collaborating closely with your team, we identify opportunities to jointly tackle your unique liquidation challenges. Our approach not only saves you money but also prioritizes environmental sustainability.
            </p>
          </div>
          <div class="col-span-12 md:col-span-4 mb-4">
            <h5 ref="title5">Commitment to Sustainability and Excellence</h5>
            <p ref="paragraph4" class="leading-[36px] font-normal">
              Collaborating with HMR connects you with our top-tier professionals specializing in circular supply chains. Our dedication to sustainable practices is widely acknowledged, offering significant eco-friendly advantages and credentials to our client.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
const title1= ref(null)
const title2 = ref(null)
const title3 = ref(null)
const title4 = ref(null)
const title5 = ref(null)
const paragraph1 = ref(null)
const paragraph2 = ref(null)
const paragraph3 = ref(null)
const paragraph4 = ref(null)
const sectionRef = ref(null)
const achievementCounter1 = ref(null)
const achievementCounter2 = ref(null)
const { setupAnimations } = useAnimations()


const animateNumber = (element, end, duration = 1000) => {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const easedProgress = progress * progress * (3 - 2 * progress); 
    element.textContent = Math.floor(easedProgress * end).toLocaleString(); 
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};


setupAnimations([
  {
    element: sectionRef,
    customFn: () => {
      animateNumber(achievementCounter1.value, 14000, 2000)
      animateNumber(achievementCounter2.value, 5228, 2000)
    }
  },
  {
    element: title1,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title2,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title3,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title4,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: title5,
    props: { y: [-20, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out' }
  },
  {
    element: paragraph1,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out', delay: 0.3 }
  },
  {
    element: paragraph3,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out', delay: 0.4 }
  },
  {
    element: paragraph4,
    props: { x: [100, 0], opacity: [0, 1] },
    options: { duration: 1, easing: 'ease-out', delay: 0.5 }
  },

])
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
  background-size: contain; 
  background-position: center; 
  width: 100%; 
  height: auto; 
  min-height: 460px; 
}


</style>
