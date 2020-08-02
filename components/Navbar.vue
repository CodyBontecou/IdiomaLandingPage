<template>
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
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
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

<style scoped></style>
