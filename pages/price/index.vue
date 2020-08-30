<template>
  <div class="px-16">
    <DividedTitle
      :title="price.title"
      :subtitle="price.subtitle"
    ></DividedTitle>
    <v-row align="center" justify="center" class="pb-16">
      <v-col
        v-for="c in price.classes"
        :key="c.id"
        xs="12"
        md=""
        cols="12"
        class="text-center"
      >
        <v-card class="mx-auto" max-width="450">
          <v-card-text>
            <div class="text-uppercase py-5 text-h6">
              {{ c.type }}
            </div>
            <v-divider></v-divider>
            <p class="pt-5">
              <span class="display-1">${{ c.price }}</span> / hour
              <span v-if="c.price === '6'"> per student.</span>
            </p>
            <v-list>
              <v-list-item
                v-for="highlight in c.highlights"
                :key="highlight.id"
              >
                <v-list-item-icon>
                  <v-icon color="primary">{{ highlight.icon }}</v-icon>
                </v-list-item-icon>
                <span style="font-size: 1.2em; color: rgba(0, 0, 0, 0.6);">
                  {{ highlight.text }}
                </span>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              rounded
              v-bind="size"
              color="primary"
              text
              :to="localePath('signup')"
            >
              <span class="font-weight-medium">Get Started</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <DividedTitle
      :title="price.discountsTitle"
      :subtitle="price.discountsSubtitle"
    ></DividedTitle>
    <v-data-table
      :headers="price.headers"
      :items="price.discounts"
      disable-filtering
      disable-pagination
      class="elevation-1 mt-16"
    ></v-data-table>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'primary',
  components: {
    DividedTitle,
  },
  computed: {
    price() {
      return this.$t('price')
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
      title: that.price.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.price.meta.description,
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

<style scoped></style>
