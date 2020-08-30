<template>
  <div class="px-16">
    <v-avatar size="250" class="mb-10">
      <v-img :src="member.image"></v-img>
    </v-avatar>
    <DividedTitle :title="member.title" :subtitle="member.subtitle" />
    <div>
      <h3 class="text-h6 font-weight-bold py-5 justify-end">
        {{ $t('team.who') }}
      </h3>

      <v-divider></v-divider>
      <ul class="pt-5">
        <li
          v-for="(key, value) in member.characteristics"
          :key="key.id"
          class="py-2"
        >
          <div v-if="Array.isArray(key) === true">
            <span class="subtitle-1 text-capitalize">
              {{ value }}
            </span>
            <ul>
              <li v-for="item in key" :key="item.id" class="py-1">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
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
    teamNav() {
      return this.$t('nav.team')
    },
    member() {
      const teamMemberSlug = this.$route.params.id
      return this.$t('team.teamMembers').find((x) => x.slug === teamMemberSlug)
    },
  },
  mounted() {
    this.$store.commit('setNavigation', this.teamNav)
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.member.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.member.meta.description,
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
