<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" xs="12">
          <h1 class="text-uppercase font-weight-black text-h5">
            Simple, transparent pricing.
          </h1>
          <h2 class="text-h5 text-uppercase font-weight-medium py-4">
            Always know what you’ll pay.
          </h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="left">
        <v-col class="text-center" cols="12" xs="12">
          <v-card class="mx-auto" max-width="560">
            <v-card-text class="px-0">
              <div class="text-uppercase primary--text price-card-title">
                Pay as you go
              </div>
              <v-divider class="mb-20"></v-divider>
              <p class="display-1 text--primary">
                $10
              </p>
              <p>Per hour</p>
              <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {
      classTypes: [
        {
          price: '$10/hour',
          name: 'One on one lesson',
          image: '/woman_in_black.jpg',
        },
        { price: '$6/hour', name: 'Group lesson', image: '/group_call.jpg' },
      ],
    }
  },
}
</script>

<style scoped>
.price-background {
  top: calc(50% + 175px);
}

.price-background.updated {
  top: calc(50% + 275px);
}

.price-background .stripe {
  height: 155px;
}

.price-background .s0 {
  height: 5000px;
  bottom: 10px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#4dc076),
    to(#b3e895)
  );
  background: linear-gradient(90deg, #4dc076, #b3e895);
}
.price-card-title {
  font-size: 1.8em;
  font-weight: 500;
  padding: 35px 30px 20px;
  margin: 0 auto 20px;
}
</style>
