<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <ul>
            <li v-for="article in articles" :key="article.id">
              <!--              <NuxtLink>-->
              <!--                :to="{ name: 'blog-slug', params: { slug: article.slug } }"-->
              <!--              >-->
              <h1>
                {{ article.title }}
              </h1>
              <!--              </NuxtLink>-->
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>

<style scoped></style>
