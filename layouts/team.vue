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
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StaticSidebar from '@/components/StaticSidebar'

export default {
  components: {
    Navbar,
    Sidebar,
    StaticSidebar,
  },
  data: () => {
    return {
      navigation: {
        name: 'team',
        navigation: [
          { name: 'Daniela Gonzalez', to: '/team/daniela-gonzalez/' },
          { name: 'Maribi Garcia', to: '/team/maribi-garcia/' },
        ],
      },
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
}
</script>

<style></style>
