<template>
  <div class="px-16">
    <v-avatar size="250" class="mb-10">
      <v-img src="/daniela.jpg"></v-img>
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
          <!--          <span v-else class="subtitle-1">-->
          <!--            {{ key }}-->
          <!--          </span>-->
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
      title: 'Daniela Gonzalez',
      subtitle:
        'I’m a Spanish teacher and photographer and I want to share with you a piece of my language and my culture.',
      characteristics: {
        languages: [
          'Native Mexican Spanish',
          'English',
          'French',
          'Portuguese',
        ],
        hobbies: [
          'Travel',
          'Graphic Design',
          'Learning new languages',
          'Meeting new people',
          'Enjoying new cultures',
        ],
        experience: [
          'Social service with kids.',
          'Volunteering at CISV, which "aims to educate and inspire action for a more just and peaceful world."',
        ],
      },
    }
  },
}
</script>

<style scoped></style>
