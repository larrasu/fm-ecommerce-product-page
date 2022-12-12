// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Frontend Mentor | E-commerce Product Page",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  googleFonts: {
    families: {
      "Kumbh+Sans": [400, 700],
    },
  },
});
