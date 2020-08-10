<template>
  <div class="px-16">
    <v-avatar size="250" class="mb-10">
      <v-img src="/maribi.jpg"></v-img>
    </v-avatar>
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <div>
      <h3 class="text-h6 font-weight-bold py-5 justify-end">
        Who I am
      </h3>

      <v-divider></v-divider>
      <ul class="pt-5">
        <li v-for="(key, value) in characteristics" :key="key.id" class="py-2">
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
  layout: 'team',
  components: {
    DividedTitle,
  },
  data: () => {
    return {
      title: 'Maribi Garcia',
      subtitle:
        'I am currently a college student in my 7th semester studying Psychology.',
      characteristics: {
        languages: ['Native Mexican Spanish', 'English'],
        hobbies: [
          'Travel',
          'Meeting new people',
          'Enjoying new cultures',
          'Reading',
          'Learning new ways of thought',
        ],
        experience: [
          'Social service with kids and elder people',
          'Volunteered at an organization called “Techo” which main focus is social development and overcoming poverty',
          'I have given workshops on non-violence to young students and also provided psychological help',
        ],
      },
    }
  },
}
</script>

<style scoped></style>
