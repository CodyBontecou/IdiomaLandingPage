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
      <!--  navOptions list items -->
      <v-list-item
        v-for="item in navOptions"
        :key="item.id"
        link
        :to="localePath(item.localePath)"
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

      <!--  Team dropdown -->
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
                {{ team.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in team.nav"
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

      <!--  Syllabus dropdown -->
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
                {{ syllabusNav.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in syllabusNav.nav"
              :key="index"
              :to="item.localePath"
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
  computed: {
    brand() {
      return this.$t('brand')
    },
    navOptions() {
      return this.$t('nav.navOptions')
    },
    syllabusNav() {
      return this.$t('nav.syllabus')
    },
    team() {
      return this.$t('nav.team')
    },
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
