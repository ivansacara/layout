export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          href: "/logo.svg",
          rel: "shortcut icon",
        },
        {
          href: "/logo.svg",
          rel: "icon",
          type: "image/svg",
          sizes: "32x32",
        },
        {
          href: "/logo.svg",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" ,
          rel: "stylesheet",
        },
        ...i18nHead.link,

      ],
      script: [],
    };
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  env: {
    CTF_SPACE_ID: "ylxy9hn813el",
    CTF_CDA_ACCESS_TOKEN: "vaTFetgNoyh2zpe5ffQ-5g74p0t8CHFCNMn4zJ9WDoE",

    LANGS: {
      en: "en-EN"
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
      'nuxt-chatra-module'
    ],
    [
      "@nuxtjs/yandex-metrika",

    ],
    ["vue-scrollto/nuxt", { duration: 1000 }],
    [
      "@nuxtjs/axios",
      {
        baseURL: "https://layout.md/",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            code: "ru",
            iso: "ru-MD",
            file: "ru.js",
          },
          {
            code: "ro",
            iso: "ro-MD",
            file: "ro.js",
          },
          {
            code: "en",
            iso: "en-EN",
            file: "en.js",
          },
        ],
        langDir: "static/i18n/",
        defaultLocale: "ru",
        baseUrl:  "http://localhost:3000",
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
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'nuxt-chatra-module'],
  },

  chatra: {
    id: 'DK65oECdyXFxaTMBR',
  },
  router: {
    // scrollBehavior: function (to, from, savedPosition) {
    //   return savedPosition
    // }
  },
};
