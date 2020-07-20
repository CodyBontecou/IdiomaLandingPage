<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="top">
        <v-col class="text-center" cols="12" xs="12">
          <h1 class="text-uppercase font-weight-black text-h2 text-lg-h1">
            Who we are
          </h1>
          <h2 class="text-h5 text-uppercase font-weight-medium py-4">
            A language learning program that's different from the rest
          </h2>
          <v-card class="mx-auto" max-width="800" flat>
            <v-card-text class="text-h6 font-weight-light">
              Language World Online is a fully remote language teaching school
              that specializes in helping you learn Spanish. We are passionate
              about what we do, and we are determined to achieve incredible
              results using our collective years of expertise to bring you
              content that is built with your needs in mind.
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
              <v-avatar size="150" class="text-center">
                <v-img contain :src="member.image"></v-img>
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
                <!--                <div>{{ member.description }}</div>-->
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
          name: 'Armando Low',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image:
            'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/106398180_2744630562440388_6713117895982563052_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFTFF-ebeYU5Q_N9VumpS5mbqSuUSVZa6VupK5RJVlrpR0dX3r7pHAeNGxRy8fxCGEV1nNZRbv6N_2hurdg_-F3&_nc_ohc=8jkVTXGmc0IAX_q1ggI&_nc_ht=scontent.fpbc2-1.fna&oh=5db09f24c0a6e0457bfddd30ff9fc85a&oe=5F39C96B',
          role: 'Founder',
        },
        {
          name: 'Aysha Hamdan',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image:
            'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/107956657_10157811732486137_8484639057063673728_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeE14tlwKIQ4vFyhalXRry06GCp2VJE2QFEYKnZUkTZAUTAAulKAxsxdbZYo7Gazwz0SK0NdjTORN9Zstk9wDo13&_nc_ohc=wTaWYa3njBcAX-nPn6X&_nc_ht=scontent.fpbc2-1.fna&oh=d7f6c844221e21411a576aeefb5bff6e&oe=5F3948D5',
          role: 'Teacher',
        },
        {
          name: 'Cody Bontecou',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image:
            'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/82890324_2874614005934476_4738784464472113152_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeGpLkswzqSnNvWdSV229VHu09Z3WnWNtNrT1ndadY202i9rG9nwUYz7T7Q290d8_jl9bq4ZPW_lWhszie5aB7cu&_nc_ohc=jYRAJMeloN8AX8PDJZC&_nc_ht=scontent.fpbc2-1.fna&oh=fc489e4095500b113c086f7367d4391b&oe=5F3AE8DF',
          role: 'Software Developer',
        },
        {
          name: 'Daniela Gonzalez Barron',
          description:
            'Language World Online is designed to expose and teach you from our diverse team of professionals. We are flexible in our classroom sizes, adapting to what works best for you.',
          image:
            'https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.0-9/83896594_10218826212984788_8484557238680158208_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEQro_HkueHVnX6ZAXD2Zm2lvQ1sGhS3_2W9DWwaFLf_Q8UttJabCJ3MdRAO7JHZwYf-Ud2xYZM_sSi42qR3w9N&_nc_ohc=o-hnnCfsMgYAX_pMaDZ&_nc_ht=scontent.fpbc2-1.fna&oh=48c3c2a991374e5da63f464f0a74e0fe&oe=5F38F6CA',
          role: 'Teacher',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
