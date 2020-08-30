<template>
  <div class="px-16">
    <DividedTitle
      :title="signupSuccess.title"
      :subtitle="signupSuccess.subtitle"
    ></DividedTitle>
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
    signupSuccess() {
      return this.$t('signupSuccess')
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.signupSuccess.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.signupSuccess.meta.description,
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
