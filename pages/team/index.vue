<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="top">
        <v-col class="text-center" cols="12" xs="12">
          <h1 class="text-uppercase font-weight-black text-h2 text-lg-h1">
            Who we are
          </h1>
          <h2 class="text-h5 text-uppercase font-weight-medium py-4">
            A language learning team that's different from the rest
          </h2>
          <v-card class="mx-auto" max-width="800" flat>
            <v-card-text class="text-h6 font-weight-light">
              We are a couple of entrepreneurs, intelligent, and studious women,
              who seek to teach our language in a more colloquial and friendly
              way, following the correct grammatical structure and providing a
              broad and vast vocabulary for a full understanding of the
              language.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
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
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {
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
