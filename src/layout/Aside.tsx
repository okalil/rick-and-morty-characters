import React from 'react'

import star from '../assets/star.svg'
import { Container } from 'react-bootstrap'
import { FavoriteCard } from '../components/FavoriteCard'

import { useCharacters } from '../hooks/useCharacters'

export const Aside: React.FC = () => {
  const { characters } = useCharacters()
  return (
    <Container className="bg-success ">
      <h1 className="text-white m-0 pt-2 pb-2 text-center">
        <span className="px-2">
          <img src={star} alt="Favoritos" width="35" />
        </span>
        Favoritos
      </h1>
      <div
        className="overflow-auto"
        style={{
          height: '90%'
        }}
      >
        {characters.length ? (
          characters.map((character, index) => {
            return <FavoriteCard key={index} index={index} />
          })
        ) : (
          <strong className="text-white h4">
            Você não tem nenhum personagem favorito.
          </strong>
        )}
      </div>
    </Container>
  )
}
