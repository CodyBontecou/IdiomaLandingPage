<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" no-gutters>
        <v-col
          class="pa-0 ma-0"
          xs="12"
          sm="5"
          cols="12"
          :class="
            $vuetify.breakpoint.mdAndDown
              ? 'text-center pb-5'
              : 'text-right pr-10'
          "
        >
          <v-avatar size="258" class="pa-0 ma-0">
            <v-img
              :class="$vuetify.breakpoint.mdAndDown ? '' : 'pb-5'"
              contain
              src="/logo.png"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col
          xs="12"
          sm="5"
          cols="12"
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
                  <span class="font-weight-medium">Why us?</span>
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
                class="pt-5 px-5"
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
</template>

<script>
export default {
  data: () => {
    return {
      logo: '~/assets/logo.png',
      highlights: [
        {
          title: 'Learn',
          description:
            "With Spanish being the fourth most spoken language on our planet, it's an excellent time to begin your journey in being able to communicate with some of the most beautiful cultures of the world!",
        },
        {
          title: 'Speak',
          description:
            "We designed our classes to get your speaking. From day one, we'll have you working on pronunciation, conjugations, and more to get you confident in having conversations alongside native speakers.",
        },
        {
          title: 'Connect',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
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
