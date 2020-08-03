<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>

    <h3 class="text-h6 font-weight-bold pt-16 pb-5 justify-end">
      Placement exam
    </h3>

    <v-divider></v-divider>

    <p class="subtitle-1 pt-5">
      Our first class will be free, and purely built in a way that gauges your
      skill level according to the CEFR. Based off of that, we will specially
      build a course to achieve your language goals in the most effective way
      possible.
    </p>

    <div class="text-left pt-16">
      <v-btn rounded v-bind="size" color="primary" class="mr-2" to="/signup/">
        <span class="font-weight-medium">Get Started</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'syllabus',
  components: {
    DividedTitle,
  },
  data: () => {
    return {
      title: 'Method',
      subtitle:
        'We teach various levels, starting from A1 - C2 as defined by the Common European Framework of Reference for Languages (CEFR). Our classes are interactive,\n' +
        '                we have extensive material consisting of presentations,\n' +
        '                exercises, videos, and conversations. We adapt to the rhythm of\n' +
        '                each student and we are attentive to the feedback of the\n' +
        '                students to improve teaching methods.',
    }
  },
  computed: {
    size() {
      const size = {
        xs: 'sm',
        sm: 'sm',
        md: 'medium',
        lg: 'large',
        xl: 'x-large',
      }[this.$vuetify.breakpoint.name]
      return size ? { [size]: true } : {}
    },
  },
}
</script>

<style scoped></style>
