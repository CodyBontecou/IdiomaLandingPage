<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'primary',
  components: {
    DividedTitle,
  },
  data: () => {
    return {
      title: 'Sign up',
      subtitle: "Please fill out the form below and we'll be in contact soon!",
    }
  },
}
</script>

<style scoped></style>
