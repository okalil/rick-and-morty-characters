import React from 'react'

import star from '../assets/star.svg'
import { FavoriteCard } from '../components/FavoriteCard'

import { useCharacters } from '../hooks/useCharacters'

export const Aside: React.FC = () => {
  const { characters } = useCharacters()
  return (
    <div className="bg-success ">
      <h1 className="text-white m-0 pt-2 pb-2 text-center">
        <span className="px-2">
          <img src={star} alt="Favoritos" width="35" />
        </span>
        Favoritos
      </h1>
      <div className="flex">
        <p>flex</p>
        <p>flex</p>
      </div>

      {characters.length ? (
        <div
          className="overflow-auto"
          style={{
            height: '90%'
          }}
        >
          {characters.map((character, index) => {
            return <FavoriteCard key={index} index={index} />
          })}
        </div>
      ) : (
        <p className="text-white h4 text-center">
          Você não tem nenhum personagem favorito.
        </p>
      )}
    </div>
  )
}
