<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" xs="12">
          <h1>Our Team</h1>
        </v-col>
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
              <v-avatar size="100" class="text-center">
                <v-img contain src="/logo.png"></v-img>
              </v-avatar>
            </v-row>
            <v-row align="center" justify="center">
              <v-card-text class="font-weight-thin">
                <div class="text-h6 primary--text font-weight-medium">
                  {{ member.name }}
                </div>
                <div class="text--primary">{{ member.description }}</div>
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
          name: 'Armando',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image: '/favicon.png',
        },
        {
          name: 'Ayesha',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image: '/favicon.png',
        },
        {
          name: 'Cody',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image: '/favicon.png',
        },
        {
          name: 'Daniela',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image: '/favicon.png',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
