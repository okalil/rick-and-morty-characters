import usePersistedState from './usePersistedState'

interface Character {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

export default function useFavoriteCharacters(): [
  Character[],
  (value: Character[]) => void
] {
  const [characters, setCharacters] = usePersistedState<Character>('characters')

  return [characters, setCharacters]
}
