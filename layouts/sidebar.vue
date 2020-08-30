<template>
  <v-app
    id="app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <StaticSidebar :navigation="navigation"></StaticSidebar>
    <v-main>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col xs="12" cols="12">
            <div class="pt-6 px-md-16 mr-md-16">
              <Nuxt />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <LocaleChanger />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StaticSidebar from '@/components/StaticSidebar'

export default {
  components: {
    Navbar,
    Sidebar,
    StaticSidebar,
  },
  computed: {
    ...mapGetters(['navigation']),
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
}
</script>
