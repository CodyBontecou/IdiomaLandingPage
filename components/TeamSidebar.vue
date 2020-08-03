<template>
  <v-navigation-drawer v-show="$vuetify.breakpoint.mdAndUp" app clipped>
    <v-list dense nav class="pt-10">
      <v-list-item class="pb-5">
        <nuxt-link to="/team" class="list-title-link">
          <span class="text-h6 font-weight-bold">Team</span>
        </nuxt-link>
      </v-list-item>

      <v-list-item
        v-for="item in team"
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
  name: 'TeamSidebar',
  data: () => {
    return {
      team: [
        {
          name: 'Daniela Gonzalez Barron',
          description: '',
          image: '/daniela.jpg',
          role: 'Founder',
          to: '/team/daniela',
        },
        {
          name: 'Maribi Garcia',
          description: '',
          image: '/maribi.jpg',
          role: 'Founder',
          to: '/team/maribi',
        },
        {
          name: 'Cody Bontecou',
          description: '',
          image: '/cody.jpeg',
          role: 'Software & Marketing',
          to: '/team/cody',
        },
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
