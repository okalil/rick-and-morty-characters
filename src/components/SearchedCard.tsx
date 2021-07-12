import React from 'react'

import star from '../assets/star.svg'
import { Card } from 'react-bootstrap'

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
    <Card className="flex-row mx-auto rounded " style={cardStyle}>
      {searchedCharacter && (
        <>
          <img src={searchedCharacter.image} alt="Imagem do personagem" />
          <Card.Body>
            <Card.Title>{searchedCharacter.name}</Card.Title>

            <Card.Subtitle>Gênero: </Card.Subtitle>
            <span>{searchedCharacter.gender}</span>
            <Card.Subtitle>Espécie: </Card.Subtitle>
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
          </Card.Body>
        </>
      )}
    </Card>
  )
}
