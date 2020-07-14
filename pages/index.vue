<template>
  <v-app id="inspire">
    <v-app-bar app color="transparent" flat>
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-show="$vuetify.breakpoint.mdAndUp">
        Idioma
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="item in navOptions"
        v-show="$vuetify.breakpoint.lgAndUp"
        :key="item.id"
        text
        class="text-capitalize underlined_button"
      >
        <span class="text--black">{{ item.text }}</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-show="$vuetify.breakpoint.mdAndDown"
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-img max-height="100" contain src="logo.png"></v-img>
          </v-list-item-title>
          <v-list-item-subtitle class="title text-center pt-3">
            Idioma
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in navOptions" :key="item.id" link>
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" no-gutters>
          <v-col class="pa-0 ma-0" xs="12" sm="6">
            <v-img
              :max-height="$vuetify.breakpoint.lgAndUp ? 225 : 150"
              :class="$vuetify.breakpoint.mdAndDown ? '' : 'pb-5'"
              contain
              src="logo.png"
            ></v-img>
          </v-col>
          <v-col
            xs="12"
            sm="6"
            :class="
              $vuetify.breakpoint.mdAndDown
                ? 'text-center'
                : 'text-left pa-5 ma-5'
            "
          >
            <div class="flex-column mb-6">
              <h1
                class="font-weight-thin"
                :class="$vuetify.breakpoint.mdAndDown ? 'title' : 'text-h3'"
              >
                The Progressive
              </h1>
              <h1
                class="font-weight-thin ml-2"
                :class="$vuetify.breakpoint.mdAndDown ? 'title' : 'text-h4'"
              >
                Language Learning Program
              </h1>
            </div>
            <v-dialog
              v-model="dialog"
              :width="$vuetify.breakpoint.lgAndUp ? '1100' : '600'"
            >
              <template v-slot:activator="{ on }">
                <div
                  class="flex-row"
                  :class="[
                    $vuetify.breakpoint.mdAndDown ? 'text-center' : 'text-left',
                  ]"
                >
                  <v-btn
                    rounded
                    v-bind="size"
                    color="primary"
                    class="mr-2"
                    v-on="on"
                  >
                    <v-icon class="pr-2">mdi-play-circle</v-icon>
                    <span class="font-weight-medium">Why Idioma?</span>
                  </v-btn>
                  <v-btn rounded v-bind="size" outlined color="primary">
                    <span class="font-weight-medium">Get Started</span>
                  </v-btn>
                </div>
              </template>
              <v-card>
                <iframe
                  width="100%"
                  :height="$vuetify.breakpoint.lgAndUp ? '600' : '315'"
                  src="https://www.youtube.com/embed/ClZm_osejpQ"
                  class="pa-5"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <v-toolbar bottom flat>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Get Started</v-btn>
                </v-toolbar>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters>
          <v-col
            v-for="info in highlights"
            :key="info.id"
            class="text-center"
            cols="12"
            xs="12"
            sm="3"
          >
            <v-card class="mx-auto" max-width="255" flat>
              <v-card-text class="font-weight-thin">
                <div class="text-h6 primary--text font-weight-medium">
                  {{ info.title }}
                </div>
                <div class="text--primary">{{ info.description }}</div>
              </v-card-text>
            </v-card>
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
      dialog: false,
      navOptions: [
        { text: 'about', icon: 'mdi-forum' },
        { text: 'team', icon: 'mdi-account-group' },
        { text: 'price', icon: 'mdi-reminder' },
        { text: 'help', icon: 'mdi-help-circle-outline' },
      ],
      highlights: [
        {
          title: 'Approachable',
          description:
            'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!',
        },
        {
          title: 'Versatile',
          description:
            'An incrementally adoptable ecosystem that scales between a library and a full-featured framework.',
        },
        {
          title: 'Performant',
          description:
            '20KB min+gzip Runtime\n' +
            'Blazing Fast Virtual DOM\n' +
            'Minimal Optimization Efforts ',
        },
      ],
    }
  },
  computed: {
    size() {
      const size = {
        xs: 'sm',
        sm: 'sm',
        md: 'medium',
        lg: 'large',
        xl: 'x-large',
      }[this.$vuetify.breakpoint.name]
      return size ? { [size]: true } : {}
    },
  },
}
</script>

<style>
.underlined_button:before {
  color: transparent;
}
.underlined_button:hover {
  border-bottom: 2px solid rgb(25, 118, 210);
}
</style>
