<template>
  <v-app id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <StaticSidebar></StaticSidebar>
    <v-main>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col xs="12" cols="12">
            <div class="pt-6 px-16 mr-16">
              <Nuxt />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StaticSidebar from '@/components/StaticSidebar'

export default {
  components: {
    StaticSidebar,
    Navbar,
    Sidebar,
  },
}
</script>

<style scoped></style>
