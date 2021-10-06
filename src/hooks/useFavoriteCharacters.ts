import usePersistedState from './usePersistedState'
import { Character } from '../types'

export default function useFavoriteCharacters(): [
  Character[],
  (value: Character[]) => void
] {
  const [characters, setCharacters] = usePersistedState<Character>('characters')

  return [characters, setCharacters]
}
