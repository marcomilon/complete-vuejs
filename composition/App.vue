<template>
  <button @click="increment">{{ count }}</button>
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>{{ total }}</p>
  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import { useNumbers } from "./useNumbers.js";

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    const { a, b, total, history } = useNumbers();

    return {
      a,
      b,
      count,
      increment,
      total,
      history,
    };
  },
};
</script>

<style scoped></style>
