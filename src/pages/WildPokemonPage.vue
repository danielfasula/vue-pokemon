<template>
  <div class="wild-pokemon container">
    <h1 class="text-dark">Wild Pokemon Page</h1>
    <div class="row">
      <ul>
        <Pokemon
          v-for="pokemon in state.pokemon"
          :key="pokemon.name"
          :pokemon="pokemon"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'

export default {
  name: 'WildPokemonPage',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon)
    })

    onMounted(async () => {
      await pokemonService.getAllPokemon()
    })
    return {
      state
    }
  }
}
</script>
