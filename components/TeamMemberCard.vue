<template>
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
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
