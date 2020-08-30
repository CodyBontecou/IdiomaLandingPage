<template>
  <div class="px-16">
    <DividedTitle
      :title="signup.title"
      :subtitle="signup.subtitle"
    ></DividedTitle>
    <p class="subtitle-1">
      {{ signup['subtitle-1'] }}
    </p>
    <div class="pr-lg-16 mr-lg-16 pt-8">
      <client-only>
        <v-form
          ref="form"
          v-model="valid"
          name="contact"
          method="POST"
          data-netlify="true"
          :action="signup.localePath"
        >
          <input type="hidden" name="form-name" value="contact" />
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :label="signup.nameForm.label"
            :name="signup.nameForm.name"
            required
            solo
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="signup.emailForm.label"
            :name="signup.emailForm.name"
            required
            solo
          ></v-text-field>

          <v-textarea
            v-model="message"
            :rules="messageRules"
            :counter="300"
            :label="signup.messageForm.label"
            :name="signup.messageForm.name"
            solo
          ></v-textarea>

          <v-col class="text-right">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mt-5"
              type="submit"
              @submit.prevent="handleSubmit"
            >
              {{ signup.submitButton }}
            </v-btn>
          </v-col>
        </v-form>
      </client-only>
    </div>
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
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) =>
          (v && v.length <= 100) || 'Name must be less than 100 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) =>
          (v && v.length <= 100) || 'Email must be less than 100 characters',
      ],
      message: '',
      messageRules: [
        (v) =>
          (v && v.length <= 300) ||
          'Description must be less than 300 characters',
      ],
    }
  },
  computed: {
    signup() {
      return this.$t('signup')
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.$refs.form.submit()
      }
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const that = this
    return {
      title: that.signup.meta.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          property: 'og:description',
          name: 'description',
          content: that.signup.meta.description,
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/logo_no_words.png',
        },
        ...i18nSeo.link,
      ],
    }
  },
}
</script>

<style scoped></style>
