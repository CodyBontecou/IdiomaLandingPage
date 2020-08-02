<template>
  <div>
    <h3 class="text-h6 font-weight-bold pt-16 pb-5 justify-end">
      Examples
    </h3>

    <v-divider></v-divider>
    <ul class="pt-5">
      <li v-for="example in data" :key="example.id">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <span class="subtitle-1" v-bind="attrs" v-on="on">
              {{ example.text }}
            </span>
          </template>
          <span>{{ example.translation }}</span>
        </v-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Examples',
  props: {
    data: {
      type: [String],
      required: true,
    },
  },
}
</script>

<style scoped></style>
