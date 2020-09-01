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
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'logo_no_words.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
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
    '@nuxtjs/vuetify',
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
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    'nuxtjs-mdi-font',
  ],

  generate: {
    routes: [
      '/team/daniela-gonzalez',
      '/team/maribi-garcia',
      'es/equipo/daniela-gonzalez',
      'es/equipo/maribi-garcia',
      '/syllabus/a1',
      '/syllabus/a2',
      '/syllabus/b1',
      '/syllabus/b2',
      'es/silaba/a1',
      'es/silaba/a2',
      'es/silaba/b1',
      'es/silaba/b2',
    ],
  },

  // TODO: Generate proper sitemap for dynamic routes.
  sitemap: {
    hostname: 'https://helloidioma.com',
    routes: [
      '/team/daniela-gonzalez',
      '/team/maribi-garcia',
      'es/equipo/daniela-gonzalez',
      'es/equipo/maribi-garcia',
      '/syllabus/a1',
      '/syllabus/a2',
      '/syllabus/b1',
      '/syllabus/b2',
      'es/silaba/a1',
      'es/silaba/a2',
      'es/silaba/b1',
      'es/silaba/b2',
    ],
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

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      themes: {
        light: {
          primary: '#03BDF1',
          'primary-200': '#02A6C3',
          'secondary-100': '#D5DF20',
          'secondary-200': '#EBEF90',
          background: '#f3f3f3',
        },
        dark: {
          background: '#f3f3f3',
        },
      },
    },
  },
}
