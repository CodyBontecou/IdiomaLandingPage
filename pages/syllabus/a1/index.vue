<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <Examples :data="examples"></Examples>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'
import Examples from '@/components/Examples'

export default {
  layout: 'syllabus',
  components: {
    DividedTitle,
    Examples,
  },
  data: () => {
    return {
      title: 'A1',
      subtitle:
        'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce him/herself and others and can ask and answer questions about personal details such as where he/she lives, people he/she knows and things he/she has. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.',
      examples: [
        { text: 'No quiero más.', translation: "I don't want any more." },
        {
          text: '¿Puedes hablar más despacio?',
          translation: 'Can you speak more slowly?',
        },
        {
          text: '¿Estás lista? ¿Estás listo?',
          translation: 'Are you Ready? (Changes if male or female)',
        },
        { text: 'Creo que si.', translation: 'I think so.' },
        { text: '¿Hablas inglés?', translation: 'Do you speak English?' },
      ],
    }
  },
}
</script>

<style scoped></style>
