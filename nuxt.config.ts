// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/simple-portfolio-template/' : '/'
  },
  modules: [
    '@unocss/nuxt',
    'nuxt-aos',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],
  googleFonts: {
    families: {
      Nunito: '400..900',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})