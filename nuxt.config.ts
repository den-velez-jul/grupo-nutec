// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-us", localeName: "English" },
      { code: "es", iso: "es-mx", localeName: "Español" },
    ],
    defaultLocale: "es",
    strategy: "prefix",
  },
  image: {
    provider: "ipx",
    dir: "dist",
  },
  prismic: {
    endpoint: "nutec",
    clientConfig: {
      routes: [
        {
          type: "home",
          lang: "en",
          path: "/en",
        },
        {
          type: "home",
          lang: "es",
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
