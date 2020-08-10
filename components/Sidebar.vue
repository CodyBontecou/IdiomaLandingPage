<template>
  <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
    <v-list-item>
      <v-list-item-content class="text-center">
        <v-list-item-title>
          <v-avatar size="100" class="pa-0 ma-0">
            <v-img contain src="/logo_no_words.png"></v-img>
          </v-avatar>
        </v-list-item-title>
        <nuxt-link class="toolbar-title" to="/">
          <v-list-item-subtitle class="title text-center pt-3">
            {{ brand.name }}
          </v-list-item-subtitle>
        </nuxt-link>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav>
      <v-list-item v-for="item in navOptions" :key="item.id" link :to="item.to">
        <v-list-item-icon>
          <v-icon color="primary">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize subtitle-1">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">mdi-account-group</v-icon>
        </v-list-item-icon>
        <v-menu offset-y open-on-hover close-delay="200">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-content>
              <v-list-item-title
                class="text-capitalize subtitle-1"
                v-bind="attrs"
                v-on="on"
              >
                Team
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in team"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item-icon>
          <v-icon color="primary">mdi-menu-down</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="primary">mdi-forum</v-icon>
        </v-list-item-icon>
        <v-menu offset-y open-on-hover close-delay="200">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-content>
              <v-list-item-title
                class="text-capitalize subtitle-1"
                v-bind="attrs"
                v-on="on"
              >
                Syllabus
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in syllabus"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-list-item-icon>
          <v-icon color="primary">mdi-menu-down</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => {
    return {
      brand: { name: 'Hello Idioma' },
      navOptions: [
        { text: 'home', icon: 'mdi-home', to: '/' },
        { text: 'sign up', icon: 'mdi-play-circle', to: '/signup/' },
        { text: 'price', icon: 'mdi-reminder', to: '/price/' },
      ],
      syllabus: [
        { name: 'Information', to: '/syllabus/' },
        { name: 'Basic - A1', to: '/syllabus/a1/' },
        { name: 'Basic - A2', to: '/syllabus/a2/' },
        { name: 'Independent - B1', to: '/syllabus/b1/' },
        { name: 'Independent - B2', to: '/syllabus/b2/' },
      ],
      team: [
        { name: 'Information', to: '/team/' },
        { name: 'Daniela Gonzalez', to: '/team/daniela-gonzalez/' },
        { name: 'Maribi Garcia', to: '/team/maribi-garcia/' },
      ],
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
}
</script>

<style scoped>
.toolbar-title {
  text-decoration: none;
  text-underline: none;
  color: black !important;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
