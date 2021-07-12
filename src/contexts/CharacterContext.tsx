import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react'
import { createContext, useState } from 'react'

type Character = {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

type CharacterContextType = {
  characters: Character[]
  setCharacters: Dispatch<SetStateAction<Character[]>>
  favorited: boolean
  setFavorited: Dispatch<SetStateAction<boolean>>
}

type CharacterContextProps = {
  children: ReactNode
}

export function CharacterContextProvider(props: CharacterContextProps) {
  const local = localStorage.getItem('favorites')
    ? JSON.parse(String(localStorage.getItem('favorites')))
    : []

  const [characters, setCharacters] = useState<Character[]>(local)
  const [favorited, setFavorited] = useState(false)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(characters))
  }, [characters])

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        favorited,
        setFavorited
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  )
}
export const CharacterContext = createContext({} as CharacterContextType)
