<template>
  <div class="cards">
    <Card v-for="pokemon in pokemons" 
    :key="pokemon.id" 
    @click="click(pokemon)"
    :class="{ opace: selectedId && pokemon.id !== selectedId }"
    class="card"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite">
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
    emits: ["chosen"],
    components: {
        Card
    },
    props: {
        pokemons: {
            type: Array,
            default: []
        },
        selectedId: {
            type: Number
        },
    },
    methods: {
        click(pokemon) {
            this.$emit("chosen", pokemon)
        }
    }
}
</script>
<style>
.card:hover {
    opacity: 1;
}
.opace {
    opacity: 0.5;
}
img {
    width: 100%;
}
.cards {
  display: flex;
}
</style>
