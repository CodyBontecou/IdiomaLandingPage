<template>
  <div>
    <h2 class="text-h4 font-weight-bold pb-5">
      {{ title }}
    </h2>
    <v-divider></v-divider>
    <p class="subtitle-1 pt-5">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DividedTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>
