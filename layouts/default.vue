<template>
  <v-app id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Nuxt />
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
