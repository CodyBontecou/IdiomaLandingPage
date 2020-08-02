import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
// import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#03BDF1',
          'primary-200': '#02A6C3',
          'secondary-100': '#D5DF20',
          'secondary-200': '#EBEF90',
        },
        dark: {
          // colors
        },
      },
    },
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
