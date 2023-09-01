// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  app: {
    baseURL: "/init-apo-quiz",
    head: {
      title: "Quiz Initiation APO",
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.simplecss.org/simple.min.css'
      }]
    }
  },
})
