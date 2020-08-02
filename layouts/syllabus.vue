<template>
  <v-app id="app">
    <v-app-bar app color="transparent" flat clipped-left>
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <nuxt-link class="toolbar-title" to="/">
        <v-toolbar-title v-show="$vuetify.breakpoint.mdAndUp">
          <v-img src="/logo_text.png" max-width="200"></v-img>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn
        v-for="item in navOptions"
        v-show="$vuetify.breakpoint.lgAndUp"
        :key="item.id"
        :to="item.to"
        text
        class="text-capitalize underlined_button subtitle-1"
      >
        <span class="text--black">{{ item.text }}</span>
      </v-btn>
    </v-app-bar>
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
        <v-list-item
          v-for="item in navOptions"
          :key="item.id"
          link
          :to="item.to"
        >
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
    <v-navigation-drawer app permanent clipped>
      <v-list dense nav class="pt-10">
        <v-list-item class="pb-5">
          <nuxt-link to="/syllabus" class="list-title-link">
            <span class="text-h6 font-weight-bold">Syllabus</span>
          </nuxt-link>
        </v-list-item>

        <v-list-item
          v-for="item in syllabus"
          :key="item.id"
          :to="item.to"
          dense
          nuxt
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title class="text-capitalize subtitle-1">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col xs="12" cols="12">
            <div class="pt-6 px-16 mr-16">
              <Nuxt />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
      brand: { name: 'Hello Idioma' },
      syllabus: [
        { name: 'Basic - A1', to: '/syllabus/a1' },
        { name: 'Basic - A2', to: '/syllabus/a2' },
        { name: 'Independent - B1', to: '/syllabus/b1' },
        { name: 'Independent - B2', to: '/syllabus/b2' },
        { name: 'Proficient - C1', to: '/syllabus/c1' },
        { name: 'Proficient - C2', to: '/syllabus/c2' },
      ],
      navOptions: [
        { text: 'home', icon: 'mdi-home', to: '/' },
        { text: 'syllabus', icon: 'mdi-forum', to: '/syllabus' },
        { text: 'team', icon: 'mdi-account-group', to: '/team' },
        { text: 'price', icon: 'mdi-reminder', to: '/price' },
        { text: 'blog', icon: 'mdi-microphone', to: '/blog' },
        { text: 'help', icon: 'mdi-help-circle-outline', to: '/help' },
      ],
      logo: '~/assets/logo.png',
    }
  },
}
</script>

<style scoped>
.list-title-link {
  text-decoration: none;
  color: inherit;
}
</style>
