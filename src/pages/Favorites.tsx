import { FavoriteCard } from '../components/FavoriteCard'
import useFavoriteCharacters from '../hooks/useFavoriteCharacters'

export default function Favorites() {
  const [characters] = useFavoriteCharacters()
  return (
    <main>
      {characters.map(({ id }, i) => (
        <FavoriteCard key={id} index={i} />
      ))}
    </main>
  )
}
