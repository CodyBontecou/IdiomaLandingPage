<template>
  <v-navigation-drawer v-show="$vuetify.breakpoint.mdAndUp" app clipped>
    <v-list dense nav class="pt-10">
      <v-list-item class="pb-5">
        <nuxt-link to="/syllabus" class="list-title-link">
          <span class="text-h6 font-weight-bold">Syllabus</span>
        </nuxt-link>
      </v-list-item>

      <v-list-item
        v-for="item in syllabus"
        :key="item.id"
        :to="item.to"
        dense
        nuxt
        color="primary"
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
  data: () => {
    return {
      syllabus: [
        { name: 'Basic - A1', to: '/syllabus/a1' },
        { name: 'Basic - A2', to: '/syllabus/a2' },
        { name: 'Independent - B1', to: '/syllabus/b1' },
        { name: 'Independent - B2', to: '/syllabus/b2' },
        { name: 'Proficient - C1', to: '/syllabus/c1' },
        { name: 'Proficient - C2', to: '/syllabus/c2' },
      ],
    }
  },
}
</script>

<style scoped>
.list-title-link {
  text-decoration: none;
  color: inherit;
}
</style>
