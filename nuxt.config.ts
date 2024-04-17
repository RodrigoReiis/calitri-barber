// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', "@nuxtjs/tailwindcss", "shadcn-nuxt", '@pinia/nuxt'],  
  css: ["./assets/css/tailwind.css"],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  }
})