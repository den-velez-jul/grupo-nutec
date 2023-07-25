// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic", "@nuxt/image"],

  prismic: {
    endpoint: "nutec",
    clientConfig: {
      routes: [
        {
          type: "home",
          path: "/",
        },
        {
          type: "home",
          lang: "es-mx",
          path: "/es",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
