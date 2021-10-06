import React from 'react'
import star from '../assets/star.svg'

import { useSearch } from '../hooks/useSearchContext'
import useFavoriteCharacters from '../hooks/useFavoriteCharacters'

export const SearchedCard: React.FC = () => {
  const { searchedCharacter } = useSearch()
  const [characters, setCharacters] = useFavoriteCharacters()

  if (!searchedCharacter) return null

  const addToFavorites = () => {
    if (!characters.find(e => searchedCharacter.id === e.id)) {
      setCharacters([...characters, searchedCharacter])
    }
  }

  const cardStyle = { width: 'min(90%, 500px)', height: '10rem' }

  return (
    <section className="flex-row mx-auto rounded " style={cardStyle}>
      {searchedCharacter && (
        <>
          <img src={searchedCharacter.image} alt="Imagem do personagem" />
          <div>
            <h2>{searchedCharacter.name}</h2>

            <h3>Gênero: </h3>
            <span>{searchedCharacter.gender}</span>
            <h3>Espécie: </h3>
            <span>{searchedCharacter.species}</span>

            <span
              onClick={addToFavorites}
              style={{
                position: 'absolute',
                right: '0.25rem',
                top: '0.25rem',
                cursor: 'pointer'
              }}
            >
              <img src={star} alt="Favoritar" width="25" />
            </span>
          </div>
        </>
      )}
    </section>
  )
}
