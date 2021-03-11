import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { pokeApi } from './AxiosService'

class PokemonService {
  async getAllPokemon() {
    try {
      const res = await pokeApi.get('pokemon')
      logger.log(res.data)
      AppState.pokemon = res.data.results
      AppState.next = res.data.next
      AppState.prev = res.data.prev
    } catch (error) {
      logger.error(error)
    }
  }

  async getPokemon(name) {
    try {
      const res = await pokeApi.get('pokemon/' + name)
      AppState.activePokemon = res.data
      logger.log(AppState.activePokemon)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const pokemonService = new PokemonService()
