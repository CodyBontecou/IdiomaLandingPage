<template>
  <div class="px-16">
    <DividedTitle :title="title" :subtitle="subtitle"></DividedTitle>
    <div class="pr-lg-16 mr-lg-16 pt-16 mt-lg-16">
      <v-form
        ref="form"
        v-model="valid"
        name="contact"
        method="POST"
        data-netlify="true"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          name="name"
          required
          solo
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          name="email"
          required
          solo
        ></v-text-field>

        <v-textarea
          v-model="textArea"
          :rules="textAreaRules"
          :counter="300"
          solo
          name="textArea"
          label="Tell us about yourself"
        ></v-textarea>

        <v-col class="text-right">
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mt-5"
            type="submit"
            @click="validate"
          >
            Send
          </v-btn>
        </v-col>
      </v-form>
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
      title: 'Sign up',
      subtitle: "Please fill out the form below and we'll be in contact soon!",
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        (v) => (v && v.length <= 20) || 'Email must be less than 20 characters',
      ],
      textArea: '',
      textAreaRules: [
        (v) =>
          (v && v.length <= 300) ||
          'Description must be less than 300 characters',
      ],
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$refs.form.submit()
      }
    },
  },
}
</script>

<style scoped></style>
