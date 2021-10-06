import { FavoriteCard } from '../components/FavoriteCard'
import useFavoriteCharacters from '../hooks/useFavoriteCharacters'

interface Character {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

export default function Favorites() {
  const [characters, setCharacters] = useFavoriteCharacters()

  const deleteFavorite = (character: Character) =>
    setCharacters(characters.filter(e => e.id !== character.id))

  return (
    <main>
      {characters.map(character => (
        <FavoriteCard {...{ character, deleteFavorite, key: character.id }} />
      ))}
    </main>
  )
}
