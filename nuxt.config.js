const configContentful = require("./.contentful.json");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      meta: [
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          ...i18nHead.meta,
        },
      ],
      link: [
        {
          href: "/favicon.png",
          rel: "shortcut icon",
        },
        {
          href: "/apple-touch-icon.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
        },
        {
          href: "/safari-pinned-tab.svg",
          rel: "mask-icon",
          color: "#5bbad5",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap",
          rel: "stylesheet",
        },
        {
          ...i18nHead.link,
        },
      ],
      script: [],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  env: {
    CTF_SPACE_ID: configContentful.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: configContentful.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: configContentful.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: configContentful.CTF_BLOG_POST_TYPE_ID,

    LANGS: {
      ru: "ru-MD",
      ro: "ro-MD",
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-swiper.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/yandex-metrika",

    ],
    ["vue-scrollto/nuxt", { duration: 1000 }],
    [
      "@nuxtjs/axios",
      {
        baseURL: "https://maroresidence.md/",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "ru",
            iso: "ru-MD",
          },
          {
            code: "ro",
            iso: "ro-MD",
          },
        ],
        defaultLocale: "ru",
        baseUrl: "https://maroresidence.md",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root",
        },
      },
    ],
    [
      "nuxt-mail",
      {
        message: {
          to: "maroresidence@gmail.com",
        },
        smtp: {
          service: "gmail",
          auth: {
            user: "maroresidence@gmail.com",
            pass: "qyiyvffhvscaiuzx",
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
