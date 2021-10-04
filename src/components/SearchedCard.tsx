import React from 'react'

import star from '../assets/star.svg'

import { useCharacters } from '../hooks/useCharacters'
import { useSearch } from '../hooks/useSearchContext'

export const SearchedCard: React.FC = () => {
  const { searchedCharacter, setFavorited } = useSearch()
  const { setCharacters, characters } = useCharacters()

  const addToFavorites = () => {
    if (searchedCharacter && !characters.includes(searchedCharacter)) {
      setCharacters([...characters, searchedCharacter])
      setFavorited(true)
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
