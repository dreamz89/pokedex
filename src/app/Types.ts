export interface PokemonUrl {
  name: string
  url: string
}

export interface PokemonListAPI {
  count: number
  next: string
  previous: string
  results: PokemonUrl[]
}

interface Ability {
  ability: PokemonUrl
  is_hidden: boolean
  slot: number
}

interface Move {
  move: PokemonUrl
  version_group_details: {
    level_learned_at: number
    move_learn_method: PokemonUrl
    version_group: PokemonUrl
  }[]
}

interface Sprite {
  other: {
    dream_world: {
      front_default: string
    }
  }
}

interface Stat {
  base_stat: number
  effort: number
  stat: PokemonUrl
}

export interface Type {
  slot: number
  type: PokemonUrl
}

export interface SinglePokemonData {
  abilities: Ability[]
  id: number
  moves: Move[]
  name: string
  order: number
  sprites: Sprite
  stats: Stat[]
  types: Type[]
}

export interface EvolutionChainAPI {
  count: number
  next: string
  previous: string
  results: {
    url: string
  }[]
}

export interface EvolutionStageAPI {
  evolution_details: []
  evolves_to: EvolutionStageAPI[]
  is_baby: boolean
  species: PokemonUrl
}

export interface SingleEvolutionData {
  baby_trigger_item: null
  chain: EvolutionStageAPI
  id: number
}

export interface EvolutionStage {
  name: string
  id: number
  image: string | undefined
}