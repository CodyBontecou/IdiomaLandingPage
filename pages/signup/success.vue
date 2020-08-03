<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  name: 'Success',
  layout: 'primary',
  components: {
    DividedTitle,
  },
  data: () => {
    return {
      title: 'Success',
      subtitle:
        'Thank you for taking an interest in Hello Idioma! We have successfully received your email, and will get back to you shortly.',
    }
  },
}
</script>

<style scoped></style>
