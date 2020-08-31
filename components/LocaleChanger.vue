<template>
  <v-footer absolute class="text-right" color="transparent">
    <v-spacer />
    <v-btn
      v-for="locale in availableLocales"
      :key="locale.code"
      fab
      :to="switchLocalePath(locale.code)"
    >
      <v-avatar>
        <v-img
          :src="locale.flag"
          :alt="'A small flag icon of ' + locale.name"
        />
      </v-avatar>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
