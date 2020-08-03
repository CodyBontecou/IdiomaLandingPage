<template>
  <v-main>
    <v-container fluid>
      <v-row align="start" justify="center">
        <v-col xs="12" cols="12">
          <div class="pt-6 px-md-16 mr-md-16">
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
                  <v-card class="mx-auto" max-width="255" flat>
                    <v-row align="center" justify="center" class="pa-0 ma-0">
                      <v-avatar size="150">
                        <v-img :src="member.image"></v-img>
                      </v-avatar>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-card-text class="font-weight-thin">
                        <h3 class="text-h5 font-weight-bold">
                          {{ member.name }}
                        </h3>
                        <h3 class="text-h6 font-weight-bold primary--text">
                          {{ member.role }}
                        </h3>
                      </v-card-text>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  components: {
    DividedTitle,
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
