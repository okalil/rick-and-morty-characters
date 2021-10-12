import { Character } from '../types'
import useFavoriteCharacters from '../hooks/useFavoriteCharacters'

import { Card } from '../components/Card'
import remove from '../assets/bin.png'

export default function Favorites() {
  const [characters, setCharacters] = useFavoriteCharacters()

  const deleteFavorite = (character: Character) =>
    setCharacters(characters.filter(e => e.id !== character.id))

  // const cardStyle = { width: 'min(90%, 500px)', height: '10rem' }

  return (
    <main>
      {characters.length ? (
        characters.map(character => (
          <Card
            characterData={character}
            action={() => deleteFavorite(character)}
            icon={{ src: remove, alt: 'Deletar', width: 20 }}
            className="mb-4"
          />
        ))
      ) : (
        <div>
          <h1 className="text-white font-semibold text-center text-3xl mt-12">
            Você não tem nenhum personagem favorito ainda
          </h1>
        </div>
      )}
    </main>
  )
}
