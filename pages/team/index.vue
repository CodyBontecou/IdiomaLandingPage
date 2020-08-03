<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <v-row align="center" justify="center" class="pt-16">
      <v-col
        v-for="member in team"
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
  layout: 'primary',
  components: {
    DividedTitle,
    TeamMemberCard,
  },
  data: () => {
    return {
      title: 'Who we are',
      'title-2': "A language learning team that's different from the rest",
      subtitle:
        'We are a couple of entrepreneurs, intelligent, and studious people,\n' +
        '              who seek to teach our language in a more colloquial and friendly\n' +
        '              way, following the correct grammatical structure and providing a\n' +
        '              broad and vast vocabulary for a full understanding of the\n' +
        '              language.',
      team: [
        {
          name: 'Daniela Gonzalez Barron',
          description: '',
          image: '/daniela.jpg',
          role: 'Founder',
        },
        {
          name: 'Maribi Garcia',
          description: '',
          image: '/maribi.jpg',
          role: 'Founder',
        },
        {
          name: 'Cody Bontecou',
          description: '',
          image: '/cody.jpeg',
          role: 'Software & Marketing',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
