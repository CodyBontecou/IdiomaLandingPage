<template>
  <v-app-bar app color="transparent" flat clipped-left hide-on-scroll>
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

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <nuxt-link to="/syllabus">
          <v-btn
            v-show="$vuetify.breakpoint.mdAndUp"
            text
            class="text-capitalize subtitle-1"
            v-bind="attrs"
            v-on="on"
          >
            <span class="text--black">Syllabus</span>
            <v-icon class="grey--text">mdi-menu-down</v-icon>
          </v-btn>
        </nuxt-link>
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      navOptions: [
        { text: 'home', icon: 'mdi-home', to: '/' },
        // { text: 'syllabus', icon: 'mdi-forum', to: '/syllabus' },
        { text: 'team', icon: 'mdi-account-group', to: '/team' },
        { text: 'price', icon: 'mdi-reminder', to: '/price' },
        { text: 'blog', icon: 'mdi-microphone', to: '/blog' },
        { text: 'help', icon: 'mdi-help-circle-outline', to: '/help' },
      ],
      syllabus: [
        { name: 'Basic - A1', to: '/syllabus/a1' },
        { name: 'Basic - A2', to: '/syllabus/a2' },
        { name: 'Independent - B1', to: '/syllabus/b1' },
        { name: 'Independent - B2', to: '/syllabus/b2' },
        { name: 'Proficient - C1', to: '/syllabus/c1' },
        { name: 'Proficient - C2', to: '/syllabus/c2' },
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
a {
  text-decoration: none;
}
</style>
