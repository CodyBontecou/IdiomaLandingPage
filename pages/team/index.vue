<template>
  <div class="px-16">
    <DividedTitle :title="team.title" :subtitle="team.subtitle"></DividedTitle>
    <v-row align="center" justify="center" class="pt-16">
      <v-col
        v-for="member in team.teamMembers"
        :key="member.id"
        xs="12"
        md=""
        cols="12"
        class="text-center pa-0 ma-0"
      >
        <TeamMemberCard :member="member"></TeamMemberCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'
import TeamMemberCard from '@/components/TeamMemberCard'

export default {
  layout: 'sidebar',
  components: {
    DividedTitle,
    TeamMemberCard,
  },
  computed: {
    team() {
      return this.$t('team')
    },
    teamNav() {
      return this.$t('nav.team')
    },
  },
  mounted() {
    this.$store.commit('setNavigation', this.teamNav)
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.team.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.team.meta.description,
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
