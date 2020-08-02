<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <Examples :data="examples"></Examples>
  </div>
</template>

<script>
import { Examples } from '@/.nuxt/components'
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'syllabus',
  components: {
    DividedTitle,
    Examples,
  },
  data: () => {
    return {
      title: 'B1',
      subtitle:
        'Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise whilst travelling in an area where the language is spoken.  Can produce simple connected text on topics which are familiar or of personal interest. Can describe experiences and events, dreams, hopes & ambitions and briefly give reasons and explanations for opinions and plans.',
      examples: [
        { text: 'El tiempo es oro', translation: 'Time is money.' },
        {
          text: 'Nos dio unas revistas.',
          translation: 'He gave us some magazines.',
        },
        {
          text: '¿Cuántas veces has estado en Francia?',
          translation: 'How many times have you been to France?',
        },
        {
          text: 'Mi hermano me lleva 2 años.',
          translation: 'My brother is 2 years older than me.',
        },
        {
          text: '¿Para qué lo quieres?',
          translation: 'What do you want it for?',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
