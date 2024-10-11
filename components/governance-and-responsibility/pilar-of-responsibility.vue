<template>
  <div>
    <section>
      <div class="container mx-auto flex flex-wrap p-5">
        <div class="grid grid-cols-1 lg:grid-cols-1 lg:block w-full">
          <img ref="image1" src="/public/images/gnr.png" alt="Image 1" class="w-full h-[460px] object-cover rounded-lg"  />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 my-10 gap-3">
          <div>
            <h4 ref="title1" class="mb-2">Social Corporate Responsibility</h4>
          </div>
          <div class="flex-col lg:text-left"></div>
          <div class="flex-col lg:text-left leading-[36px]">
            <p ref="paragraph1">
              HMR’s Social Corporate Responsibility is a core management concept encompassing concerns of both HMR’s local communities and of broader society, helping to achieve a balance of economic, environmental, and social goals. For us, Social Corporate Responsibility starts with simple acts of doing, but within a coherent framework of strategic social and environmental projects that are add value to relevant  communities.
            </p>
          </div>
          <div class="flex flex-col lg:text-left leading-[36px]">
            <p ref="paragraph2">
              HMR’s shareholders recognize the importance of Social Corporate Responsibility practices such as charitab le sponsorship, community programs, and philanthropy as a way of enhancing the good standing of our brand and conveying the values of trust and respect to consumers. HMR regularly engages in the following:
            </p>
          </div>
        </div>
        <div class="mb-10">
          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <li 
              v-for="(item, index) in listItems" 
              :key="index" 
              ref="listItem"
              class="flex items-center mb-2 lg:mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-sm lg:text-base text-gray-700">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>


      <div class="container mx-auto flex flex-wrap p-5">
        <div class="grid grid-cols-1 lg:grid-cols-1 lg:block w-full">
          <img ref="image2" src="/public/images/gnr2.png" alt="Image 2" class="w-full h-[460px] object-cover rounded-lg" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 my-10 gap-3">
          <div>
            <h4 ref="title2" class="mb-2">Social Corporate Responsibility</h4>
          </div>
          <div class="flex-col lg:text-left"></div>
          <div class="flex-col lg:text-left leading-[36px]">
            <p ref="paragraph3">
              Another fundamental pillar of our governance is our people. At HMR, we are well-known in the Philippines to take care of our own. Through dedicated career succession, we give ample opportunity to everyone at HMR to acquire new skills, grow and share these principles in society for common prosperity
            </p>
            <p ref="paragraph4" class="py-5">
              For us, empowering our employees means both supporting their growth and development, but also ensuring they feel respected and appreciated whatever their role may be. 
            </p>
          </div>
          <div class="flex flex-col lg:text-left leading-[36px]">
            <p ref="paragraph5">
              As a group that spans multiple business fields and covers the entire reverse logistics value chain, this empowerment structure drives initiative and creativity..
            </p>
            <ul>
              <li 
                v-for="(item, index) in laborStandardsItems" 
                :key="index" 
                ref="laborStandardsItem"
                class="flex items-center mb-2 lg:mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-sm lg:text-base text-gray-700">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="container mx-auto flex flex-wrap  p-5">
        <div class="grid grid-cols-1 lg:grid-cols-1 lg:block w-full">
          <img ref="image3" src="/public/images/gnr3.png" alt="Image 3" class="w-full h-[460px] object-cover rounded-lg" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 my-10 gap-3">
          <div>
            <h4 ref="title3" class="mb-2">Sustainable Governance</h4>
          </div>
          <div class="flex-col lg:text-left"></div>
          <div class="flex-col lg:text-left leading-[36px]">
            <p ref="paragraph6">
              Finally, after our other pillars addressed our external stakeholders and our people, this pillar focuses on ensuring HMR’s corporate conduct and high-level strategy is aligned with our vision of the circular economy.
            </p>
            <p ref="paragraph7" class="py-5">
              At the core of our Sustainable Governance practices lies a modern corporate structure that aims for effective decision making and efficiency in operations to reduce waste and redundancy. We have implemented Corporate Governance handbooks that regulate relations within the HMR group according to international best practices. Furthermore, the strategic direction of the businesses consciously supports and promotes decision-making and objectives such as:
            </p>
          </div>
          <div class="flex flex-col lg:text-left leading-[36px]">
            <ul>
              <li 
                v-for="(item, index) in valueChainItems" 
                :key="index" 
                ref="valueChainItem"
                class="flex items-center mb-2 lg:mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-sm lg:text-base text-gray-700">{{ item }}</p>
              </li>
            </ul>
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
const title1 = ref(null);
const title2 = ref(null);
const title3 = ref(null);
const paragraph1 = ref(null);
const paragraph2 = ref(null);
const paragraph3 = ref(null);
const paragraph4 = ref(null);
const paragraph5 = ref(null);
const paragraph6 = ref(null);
const paragraph7 = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const listItem = ref([]);
const laborStandardsItem = ref([]);
const valueChainItem = ref([]);


const listItems = ref([
  'Charitable giving.',
  'Volunteering in the community.',
  'Participating in Fairtrade.',
  'Socially and environmentally conscious investments.',
  'Corporate policies that benefit the environment.'
]);

const laborStandardsItems = ref([
  'Career advancement and succession planning.',
  'Best in class labor standards and working conditions.',
  'Constant review and improvement of labor policies.',
  'Promotion of employee – community relations.',
  'Social equality and gender balance.'
]);

const valueChainItems = ref([
  'Circular value chain, maximizing the utility of stock while minimizing waste (giving assets a second life).',
  'Transparency and accountability in group decision making.',
  'Responsible sourcing and active engagement with suppliers.',
  'Environmentally conscious management aiming to increase eco-efficiency and reduce emissions.',
  'Compliance, certification, and anti-corruption measures.'
]);

setupAnimations([
  {
    element: image1,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: image2,
    props: { x: ['100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
  },
  {
    element: image3,
    props: { x: ['-100%', '0%'], opacity: [0, 1] },
    options: { duration: 0.7, easing: 'ease-out' }
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
    element: paragraph1,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph2,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph3,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph4,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph5,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph6,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },
  {
    element: paragraph7,
    props: { x: [50, 0], opacity: [0, 1] },
    options: { duration: 0.8, easing: 'ease-out', delay: 0.2 }
  },

  {
    elements: listItem.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: laborStandardsItem.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
  {
    elements: valueChainItem.value,
    props: { y: [100, 0], opacity: [0, 1] },
    options: { duration: 1, stagger: 0.15, easing: 'ease-out' }
  },
])

</script>