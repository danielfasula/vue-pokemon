<template>
  <div class="pokemon-details-page container-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card text-center pokemon" v-if="state.pokemon.sprites">
          <!-- figure out src image problem -->
          <img
            class="card-img-top"
            :src="state.pokemon.sprites.front_shiny"
            alt="pokemon"
          />
          <div class="card-body">
            <h4 class="card-title">
              {{ state.pokemon.name }}
              <img
                src="../assets/img/pokeball.png"
                alt=""
                height="50"
                width="50"
                @click="catchPokemon"
              />
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'PokemonDetailsPage',
  props: [],
  setup() {
    const route = useRoute()
    const state = reactive({
      pokemon: computed(() => AppState.activePokemon)
    })
    onMounted(async () => {
      await pokemonService.getPokemon(route.params.name)
    })
    return {
      state,
      route,
      catchPokemon() {
        pokemonService.catchPokemon()
      }
    }
  },
  components: {}
}
</script>
