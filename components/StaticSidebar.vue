<template>
  <v-navigation-drawer
    v-show="$vuetify.breakpoint.mdAndUp"
    app
    clipped
    color="background"
  >
    <v-list dense nav class="pt-10">
      <v-list-item class="pb-5">
        <nuxt-link :to="localePath('/')" class="list-title-link">
          <span class="text-h6 font-weight-bold text-capitalize">
            {{ navigation.title }}
          </span>
        </nuxt-link>
      </v-list-item>

      <v-list-item
        v-for="item in navigation.nav"
        :key="item.id"
        :to="localePath(item.localePath)"
        dense
        nuxt
        exact
        color="primaryTwo"
      >
        <v-list-item-content>
          <v-list-item-title class="text-capitalize subtitle-1">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'StaticSidebar',
  props: {
    navigation: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.list-title-link {
  text-decoration: none;
  color: inherit;
}
</style>
