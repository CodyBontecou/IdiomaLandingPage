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
      title: 'B2',
      subtitle:
        'Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in his/her field of specialisation. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.',
      examples: [
        { text: 'Un ticket de parking.', translation: 'A parking ticket.' },
        {
          text: '¡No me eches la culpa a mí!',
          translation: "Don't put the blame on me!",
        },
        {
          text: 'Tiene los ojos marrones.',
          translation: 'She has brown eyes.',
        },
        {
          text: 'Mientras me pague, no me importa.',
          translation: "As long as he pays me, I don't mind.",
        },
        {
          text: '¡Qué me dejes en paz!',
          translation: 'Just leave me alone!',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
