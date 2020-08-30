<template>
  <v-app-bar app color="transparent" flat absolute clipped-left>
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
      v-show="$vuetify.breakpoint.mdAndUp"
      :key="item.id"
      :to="localePath(item.localePath)"
      text
      exact
      class="text-capitalize underlined_button subtitle-1"
    >
      <span class="text--black">{{ item.text }}</span>
    </v-btn>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          text
          class="text-capitalize subtitle-1"
          v-bind="attrs"
          v-on="on"
        >
          <span class="text--black">{{ team.title }}</span>
          <v-icon class="grey--text">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in team.nav"
          :key="index"
          :to="item.localePath"
          exact
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="$vuetify.breakpoint.mdAndUp"
          text
          exact
          class="text-capitalize subtitle-1"
          v-bind="attrs"
          v-on="on"
        >
          <span class="text--black">{{ syllabusNav.title }}</span>
          <v-icon class="grey--text">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in syllabusNav.nav"
          :key="index"
          :to="item.localePath"
          exact
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
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
a {
  text-decoration: none;
}
</style>
