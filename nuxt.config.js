export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Learn, Speak, and Connect in a new language | Hello Idioma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lorem Ipsum Descriptsum',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'logo_no_words.png',
      },
    ],
  },
  generate: {
    routes: ['/syllabus/a1', '/syllabus/a2', '/syllabus/b1', '/syllabus/b2'],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~plugins/vuetify.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-162353805-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
  ],

  // TODO: Generate proper sitemap for dynamic routes.
  sitemap: {
    hostname: 'https://helloidioma.com',
  },

  i18n: {
    baseUrl: 'https://helloidioma.com',
    lazy: true,
    seo: false,
    detectBrowserLanguage: {
      useCookie: true,
    },
    langDir: 'lang/',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.js',
        flag:
          'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-ES',
        file: 'es-ES.js',
        flag:
          'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
      },
    ],
    defaultLocale: 'en',
    parsePages: false,
    pages: {
      'signup/index': {
        en: '/signup', // -> accessible at /signup (no prefix since it's the default locale)
        es: '/registrar', // -> accessible at /es/registrar
      },
      'signup/success': {
        en: '/signup/success',
        es: '/registrar/success',
      },
      'price/index': {
        en: '/price',
        es: '/precio',
      },
      'syllabus/index': {
        en: '/syllabus',
        es: '/silaba',
      },
      'syllabus/_id': {
        en: '/syllabus/:id',
        es: '/silaba/:id',
      },
      'team/index': {
        en: '/team',
        es: '/equipo',
      },
      'team/_id': {
        en: '/team/:id',
        es: '/equipo/:id',
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
