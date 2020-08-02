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
      title: 'C2',
      subtitle:
        'Can understand with ease virtually everything heard or read. Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. Can express him/herself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in more complex situations.',
      examples: [
        {
          text:
            'Como no encuentres el número de teléfono de María, no podrás ponerte en contacto con ella.',
          translation:
            "Like if you don't find marias phone, you won't be able to get in contact with her.",
        },
        {
          text: 'Hasta hace poco tiempo, nunca había estado en un lugar así.',
          translation: "Until recently, I've never been in a play like this.",
        },
        {
          text: 'No vengas por mí.',
          translation: "Don't come for me.",
        },
        {
          text:
            'Llegué tarde a la entrevista, así que no me dieran el trabajo.',
          translation:
            "I arrived late to the interview, therefore, they didn't give me the job.",
        },
        {
          text:
            'Mi vecina siempre escucha detrás de la puerta, es una chismosa.',
          translation:
            "My neighbor always listens behind the door, she's a gossiper.",
        },
      ],
    }
  },
}
</script>

<style scoped></style>
