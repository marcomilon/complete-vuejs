import { ref, computed, watch } from "vue";

export function useNumbers() {
  const a = ref(0);
  const b = ref(0);
  const history = ref([]);

  const total = computed(() => {
    return a.value + b.value
  });

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`${oldA} -> ${newA}`);
      console.log(`${oldA} -> ${newA}`);
    }

    if (newB !== oldB) {
      console.log(`${oldB} -> ${newB}`);
      history.value.push(`${oldB} -> ${newB}`);
    }
  });

  return {
    a, b, history, total
  }

}
