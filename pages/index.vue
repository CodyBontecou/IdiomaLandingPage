<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col
          class="text-md-right pr-md-5 text-center pb-10 pb-md-0"
          xs="12"
          sm="5"
          cols="12"
        >
          <v-avatar size="258">
            <v-img class="" contain src="/logo_no_words.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col
          xs="12"
          sm="5"
          cols="12"
          class="text-center text-md-left pa-md-5 ma-md-5"
        >
          <div class="flex-column mb-6">
            <h1 class="font-weight-regular title text-md-h3">
              {{ $t('landingPage.title') }}
            </h1>
            <h1 class="font-weight-regular ml-2 title text-md-h4">
              {{ $t('landingPage.subtitle') }}
            </h1>
          </div>
          <v-dialog
            v-model="dialog"
            :width="$vuetify.breakpoint.lgAndUp ? '1100' : '600'"
          >
            <template v-slot:activator="{ on }">
              <div class="flex-row text-center text-md-left">
                <v-btn
                  dark
                  rounded
                  v-bind="size"
                  color="primaryTwo"
                  class="mr-2"
                  v-on="on"
                >
                  <v-icon class="pr-2">mdi-play-circle</v-icon>
                  <span class="font-weight-medium">
                    {{ $t('landingPage.whyUs') }}
                  </span>
                </v-btn>
                <v-btn
                  rounded
                  v-bind="size"
                  outlined
                  color="primaryTwo"
                  nuxt
                  :to="localePath('signup')"
                >
                  <span class="font-weight-medium">
                    {{ $t('getStarted') }}
                  </span>
                </v-btn>
              </div>
            </template>
            <v-card>
              <iframe
                width="100%"
                :height="$vuetify.breakpoint.lgAndUp ? '600' : '315'"
                src="https://www.youtube.com/embed/Q3xvmc1gVVE"
                class="pt-5 px-5"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <v-toolbar bottom flat>
                <v-spacer></v-spacer>
                <v-btn color="primaryTwo" dark :to="localePath('signup')">
                  {{ $t('getStarted') }}
                </v-btn>
              </v-toolbar>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col
          v-for="highlight in highlights"
          :key="highlight.id"
          class="text-center"
          cols="12"
          xs="12"
          sm="3"
        >
          <v-card class="mx-auto" max-width="255" flat color="background">
            <v-card-text>
              <div class="text-h6 font-weight-medium text-capitalize">
                {{ highlight.title }}
              </div>
              <div class="text--secondary">
                {{ highlight.content }}
              </div>
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
      dialog: false,
      logo: '~/assets/logo.png',
    }
  },
  computed: {
    highlights() {
      return this.$t('landingPage.highlights')
    },
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
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.$t('landingPage.meta.title'),
      htmlAttrs: {
        myAttribute: 'My Value',
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.$t('landingPage.meta.description'),
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/logo_no_words.png',
        },
        ...i18nSeo.link,
      ],
    }
  },
}
</script>
