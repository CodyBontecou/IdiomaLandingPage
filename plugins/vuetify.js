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
          // primary: colors.red.accent1,
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
