<template>
  <v-app id="inspire">
    <v-app-bar app color="transparent" flat>
      <v-toolbar-title>Idioma</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="nav in navOptions"
        :key="nav.id"
        text
        class="text-capitalize underlined_button"
      >
        <span class="text--black">{{ nav.text }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" no-gutters>
          <v-col class="pa-0 ma-0">
            <v-img
              :max-height="[$vuetify.breakpoint.lgAndUp ? 225 : 150]"
              contain
              src="logo.png"
            ></v-img>
          </v-col>
          <v-col
            :class="[
              $vuetify.breakpoint.mdAndDown ? 'text-center' : 'text-left',
            ]"
          >
            <div
              class="flex-column mb-6"
              :class="[$vuetify.breakpoint.mdAndDown ? 'title' : 'text-h3']"
            >
              <h1
                class="font-weight-thin"
                :class="[$vuetify.breakpoint.mdAndDown ? 'title' : 'text-h3']"
              >
                The Progressive
              </h1>
              <h1
                class="font-weight-thin ml-2"
                :class="[$vuetify.breakpoint.mdAndDown ? 'title' : 'text-h4']"
              >
                Language Learning Program
              </h1>
            </div>
            <v-dialog
              v-model="dialog"
              :width="[$vuetify.breakpoint.lgAndUp ? '1100' : '600']"
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
                  :height="[$vuetify.breakpoint.lgAndUp ? '600' : '315']"
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
                <p class="text-h6 primary--text font-weight-medium">
                  {{ info.title }}
                </p>
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
      dialog: false,
      navOptions: [
        { text: 'about' },
        { text: 'team' },
        { text: 'price' },
        { text: 'help' },
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
        xs: 'medium',
        sm: 'medium',
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
