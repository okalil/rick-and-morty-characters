import React from 'react'
import star from '../assets/star.svg'

import { useSearch } from '../hooks/useSearchContext'
import useFavoriteCharacters from '../hooks/useFavoriteCharacters'
import { Card } from './Card'

export const SearchedCard: React.FC = () => {
  const { search } = useSearch()
  const [characters, setCharacters] = useFavoriteCharacters()

  const searchedCharacter = search.data

  if (!searchedCharacter) return null

  const addToFavorites = () => {
    if (!characters.some(e => searchedCharacter.id === e.id)) {
      setCharacters([...characters, searchedCharacter])
    }
  }

  return (
    <Card
      action={addToFavorites}
      characterData={searchedCharacter}
      icon={{ src: star, alt: 'Favoritar' }}
    />
  )
}
