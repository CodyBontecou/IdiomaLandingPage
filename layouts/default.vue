<template>
  <v-app id="app">
    <v-app-bar app color="transparent" flat>
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <nuxt-link id="toolbar-title" to="/">
        <v-toolbar-title v-show="$vuetify.breakpoint.mdAndUp">
          {{ brand.name }}
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
              <v-img
                contain
                src="https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/98830035_120189929685996_7457383322709131264_n.png?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHc5USt-zqQ5aqhuNE8LqyX-B3tmZK48yz4He2ZkrjzLNI-aWaUUmA6Hh8oojM9D7ao_BiIpjR72GuhDcuWQjtY&_nc_oc=AQmT-5LpDCvzRwnMJyy71cmp3Bvgk_oMvBSz8E9PEWPmEQxNp6ug2qxAsDkG_I3xLIo&_nc_ht=scontent.fpbc2-1.fna&oh=cd889f318ef91dd14530bb9591ee75f2&oe=5F344BC6"
              ></v-img>
            </v-avatar>
          </v-list-item-title>
          <v-list-item-subtitle class="title text-center pt-3">
            {{ brand.name }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
      dialog: false,
      brand: { name: 'Language World Online' },
      navOptions: [
        { text: 'blog', icon: 'mdi-microphone', to: '/blog' },
        { text: 'syllabus', icon: 'mdi-forum', to: '/syllabus' },
        { text: 'team', icon: 'mdi-account-group', to: '/team' },
        { text: 'price', icon: 'mdi-reminder', to: '/price' },
        { text: 'help', icon: 'mdi-help-circle-outline', to: '/help' },
      ],
    }
  },
}
</script>

<style>
#toolbar-title {
  text-decoration: none;
  text-underline: none;
  color: black;
}
.underlined_button:before {
  color: transparent;
}

.underlined_button:hover {
  border-bottom: 2px solid #ffb91b;
}
</style>
