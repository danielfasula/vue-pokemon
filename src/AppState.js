import { reactive } from 'vue'

export const AppState = reactive({
  pokemon: [],
  activePokemon: {},
  next: '',
  prev: ''
})
