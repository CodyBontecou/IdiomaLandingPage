<template>
  <v-app id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <v-main>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col xs="12" cols="12">
            <div class="pt-6 px-md-16 mr-md-16">
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

export default {
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<style></style>
