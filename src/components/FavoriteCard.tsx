import React from 'react'
import remove from '../assets/bin.png'
import { Character } from '../types'

interface Props {
  character: Character
  deleteFavorite: (character: Character) => void
}

export const FavoriteCard: React.FC<Props> = ({
  character,
  deleteFavorite
}) => {
  const cardStyle = { width: 'min(90%, 500px)', height: '10rem' }

  return (
    <section className="flex-row mx-auto rounded mt-3 " style={cardStyle}>
      {character && (
        <>
          <img src={character.image} alt="Imagem do personagem" />
          <div>
            <h2> {character.name}</h2>
            <h3>Gênero: </h3>
            <span>{character.gender}</span>
            <h3>Espécie: </h3>
            <span>{character.species}</span>
            <span
              onClick={() => deleteFavorite(character)}
              style={{
                position: 'absolute',
                right: '0.25rem',
                top: '0.05rem',
                cursor: 'pointer'
              }}
            >
              <img src={remove} alt="Deletar" width="20" />
            </span>
          </div>
        </>
      )}
    </section>
  )
}
