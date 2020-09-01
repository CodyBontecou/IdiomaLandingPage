<template>
  <div class="px-16">
    <DividedTitle
      :title="syllabus.title"
      :subtitle="syllabus.subtitle"
    ></DividedTitle>

    <h3 class="text-h6 font-weight-bold pt-16 pb-5 justify-end">
      {{ syllabus.secondaryTitle }}
    </h3>

    <v-divider></v-divider>

    <p class="subtitle-1 pt-5">
      {{ syllabus.secondarySubtitle }}
    </p>

    <div class="text-left pt-16">
      <v-btn
        v-bind="size"
        rounded
        dark
        color="primaryTwo"
        class="mr-2"
        :to="localePath('signup')"
      >
        <span class="font-weight-medium">{{ $t('getStarted') }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'sidebar',
  components: {
    DividedTitle,
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
    syllabus() {
      return this.$t('syllabus')
    },
    syllabusNav() {
      return this.$t('nav.syllabus')
    },
  },
  mounted() {
    this.$store.commit('setNavigation', this.syllabusNav)
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.syllabus.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'facebook-description',
          property: 'og:description',
          name: 'description',
          content: that.syllabus.meta.description,
        },
        {
          hid: 'facebook-image',
          property: 'og:image',
          name: 'image',
          content: '/logo_no_words.png',
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
