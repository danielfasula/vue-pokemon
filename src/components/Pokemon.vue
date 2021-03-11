<template>
  <router-link
    :to="{ name: 'PokemonDetailsPage', params: { name: pokemon.name } }"
  >
    <li>{{ pokemon.name }}</li>
  </router-link>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>
