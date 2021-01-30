import { SinglePokemonData, EvolutionStage } from '../app/Types'

export interface Props {
  singlePokemonData: SinglePokemonData | null
  active: number | null
  activeEvolutionChain: EvolutionStage[]
  handleActive: (active: number) => void
  handleClose: () => void
}