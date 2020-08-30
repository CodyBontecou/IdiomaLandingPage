<template>
  <div class="px-16">
    <DividedTitle
      :title="level.title"
      :subtitle="level.subtitle"
    ></DividedTitle>
    <Examples :data="level.examples"></Examples>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'
import Examples from '@/components/Examples'

export default {
  layout: 'sidebar',
  components: {
    DividedTitle,
    Examples,
  },
  computed: {
    level() {
      return this.$t('syllabusId.levels')[this.$route.params.id]
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
      title: that.level.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.level.meta.description,
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
