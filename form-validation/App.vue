<template>
  <form @submit.prevent="submit">
    <MyInput
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />

    <MyInput
      name="Password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      :error="password.error"
      type="password"
      @update="update"
    />

    <MyButton background="darkslateblue" color="white" :disabled="!valid" />
  </form>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";

export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      username: {
        value: "user",
        error: "",
      },
      password: {
        value: "password",
        error: "",
      },
    };
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    },
  },
  methods: {
    submit() {
      console.log("submit")
    },
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>

<style scoped></style>
