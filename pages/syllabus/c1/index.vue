<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <Examples :data="examples"></Examples>
  </div>
</template>

<script>
import Examples from '@/components/Examples'
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'syllabus',
  components: {
    DividedTitle,
    Examples,
  },
  data: () => {
    return {
      title: 'C1',
      subtitle:
        'Can understand a wide range of demanding, longer texts, and recognise implicit meaning. Can express him/herself fluently and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organisational patterns, connectors and cohesive devices.',
      examples: [
        {
          text: 'Ver las cosas de color de rosa',
          translation: 'To see things through rose-tinted glasses.',
        },
        {
          text: '¡Ábrete sésamo!',
          translation: 'Open sesame!',
        },
        {
          text: 'Caminaba como si le doliera la pierna.',
          translation: 'He walked like his leg was in pain.',
        },
        {
          text: 'Estuvimos en la plaza hasta que llegaron.',
          translation: 'We were in the plaza until they arrived.',
        },
        {
          text: 'El banco fue robado por los ladrones',
          translation: 'The bank was robbed by the thieves',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
