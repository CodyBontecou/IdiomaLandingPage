<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <v-row align="center" justify="center" class="pb-16">
      <v-col
        v-for="c in classes"
        :key="c.id"
        xs="12"
        md=""
        cols="12"
        class="text-center"
      >
        <v-card class="mx-auto" max-width="450">
          <v-card-text>
            <div class="text-uppercase py-5 text-h6">
              {{ c.type }}
            </div>
            <v-divider></v-divider>
            <p class="pt-5">
              <span class="display-1">${{ c.price }}</span> / hour
              <span v-if="c.price === '6'"> per student.</span>
            </p>
            <v-list>
              <v-list-item
                v-for="highlight in c.highlights"
                :key="highlight.id"
              >
                <v-list-item-icon>
                  <v-icon color="primary">{{ highlight.icon }}</v-icon>
                </v-list-item-icon>
                {{ highlight.text }}
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded v-bind="size" color="primary" text>
              <span class="font-weight-medium">Get Started</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <DividedTitle
      :title="discountsTitle"
      :subtitle="discountsSubtitle"
    ></DividedTitle>
    <v-data-table
      :headers="headers"
      :items="discounts"
      class="elevation-1 mt-16"
    ></v-data-table>
  </div>
</template>

<script>
import DividedTitle from '@/components/DividedTitle'

export default {
  layout: 'primary',
  components: {
    DividedTitle,
  },
  data: () => {
    return {
      title: 'Simple, flexible pricing.',
      subtitle: '',
      discountsTitle: 'Discounts',
      discountsSubtitle:
        'A discount will be applied to your total invoice if you pay for at least 4 classes in advanced.',
      classes: [
        {
          type: 'Private class',
          price: '10',
          highlights: [
            {
              icon: 'mdi-notebook',
              text: 'One on one classes.',
            },
            {
              icon: 'mdi-star-circle',
              text: 'Specialized for you.',
            },
            {
              icon: 'mdi-arrow-down-circle',
              text: 'At your own rhythm.',
            },
          ],
        },
        {
          type: 'Group classes',
          price: '6',
          highlights: [
            {
              icon: 'mdi-notebook',
              text: '2 - 4 students.',
            },
            {
              icon: 'mdi-star-circle',
              text: 'Learn in a group environment.',
            },
            {
              icon: 'mdi-arrow-down-circle',
              text: 'Converse and connect with one another.',
            },
          ],
        },
      ],
      headers: [
        {
          text: '# of classes',
          align: 'start',
          sortable: false,
          value: 'numClasses',
        },
        { text: 'Normal Price', value: 'normalPrice' },
        { text: 'Discount', value: 'discount' },
        { text: 'New Price', value: 'newPrice' },
      ],
      discounts: [
        {
          numClasses: '16 classes or more',
          normalPrice: '$160',
          discount: '20%',
          newPrice: '$128',
        },
        {
          numClasses: '8 classes or more',
          normalPrice: '$80',
          discount: '15%',
          newPrice: '$68',
        },
        {
          numClasses: '4 classes or more',
          normalPrice: '$40',
          discount: '10%',
          newPrice: '$36',
        },
      ],
    }
  },
  computed: {
    size() {
      const size = {
        xs: 'sm',
        sm: 'sm',
        md: 'medium',
        lg: 'large',
        xl: 'x-large',
      }[this.$vuetify.breakpoint.name]
      return size ? { [size]: true } : {}
    },
  },
}
</script>

<style scoped></style>
