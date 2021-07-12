import React from 'react'

import remove from '../assets/bin.png'
import { Card } from 'react-bootstrap'

import { useCharacters } from '../hooks/useCharacters'

interface CharacterCardProps {
  index: number
}

export const FavoriteCard: React.FC<CharacterCardProps> = ({
  index
}: CharacterCardProps) => {
  const { setCharacters, characters } = useCharacters()

  const character = characters[index]

  const deleteFavorite = () => {
    const index = characters.indexOf(character)
    const [removed] = characters.splice(index, index + 1)
    setCharacters(characters => characters.filter(item => item !== removed))
  }

  const cardStyle = { width: 'min(90%, 500px)', height: '10rem' }

  return (
    <Card className="flex-row mx-auto rounded mt-3 " style={cardStyle}>
      {character && (
        <>
          <img src={character.image} alt="Imagem do personagem" />
          <Card.Body>
            <Card.Title> {character.name}</Card.Title>
            <Card.Subtitle>Gênero: </Card.Subtitle>
            <span>{character.gender}</span>
            <Card.Subtitle>Espécie: </Card.Subtitle>
            <span>{character.species}</span>
            <span
              onClick={deleteFavorite}
              style={{
                position: 'absolute',
                right: '0.25rem',
                top: '0.05rem',
                cursor: 'pointer'
              }}
            >
              <img src={remove} alt="Deletar" width="20" />
            </span>
          </Card.Body>
        </>
      )}
    </Card>
  )
}
