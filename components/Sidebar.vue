<template>
  <v-navigation-drawer
    v-show="$vuetify.breakpoint.mdAndDown"
    v-model="drawer"
    disable-resize-watcher
    app
  >
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => {
    return {
      drawer: false,
      brand: { name: 'Hello Idioma' },
      navOptions: [
        { text: 'home', icon: 'mdi-home', to: '/' },
        { text: 'syllabus', icon: 'mdi-forum', to: '/syllabus' },
        { text: 'team', icon: 'mdi-account-group', to: '/team' },
        { text: 'price', icon: 'mdi-reminder', to: '/price' },
        { text: 'blog', icon: 'mdi-microphone', to: '/blog' },
        { text: 'help', icon: 'mdi-help-circle-outline', to: '/help' },
      ],
    }
  },
}
</script>

<style scoped>
.toolbar-title {
  text-decoration: none;
  text-underline: none;
  color: black !important;
}
.underlined_button:before {
  color: transparent;
}

.underlined_button:hover {
  border-bottom: 2px solid #03bdf1;
}
</style>
