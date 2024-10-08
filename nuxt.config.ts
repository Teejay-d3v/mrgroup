export default defineNuxtConfig({
  css: ['~/assets/css/main.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/global.css',
      ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-10-07',
})