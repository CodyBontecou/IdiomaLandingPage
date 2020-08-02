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
      title: 'A2',
      subtitle:
        'Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.  Can describe in simple terms aspects of his/her background, immediate environment and matters in areas of immediate need.',
      examples: [
        { text: 'Te amo.', translation: 'I love you.' },
        {
          text: '¿Dónde podemos quedar?',
          translation: 'Where can we meet?',
        },
        {
          text: 'Primera (Segunda/Tercera/Cuarta) planta.',
          translation: 'First (second/third/fourth) floor.',
        },
        {
          text: '¿Dónde puedo aparcar el coche?',
          translation: 'Where can I park my car?',
        },
        {
          text: '¿Puede decirme a qué se refiere este concepto?',
          translation: 'Could you tell me what this charge is for?',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
