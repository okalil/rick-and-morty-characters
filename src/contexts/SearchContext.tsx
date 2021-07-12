import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type Character = {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

type SearchContextType = {
  error: string
  setError: Dispatch<SetStateAction<string>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  searchedCharacter: Character | undefined
  setSearchedCharacter: Dispatch<SetStateAction<Character | undefined>>
  favorited: boolean
  setFavorited: Dispatch<SetStateAction<boolean>>
}

type SearchContextProps = {
  children: ReactNode
}

export function SearchContextProvider(props: SearchContextProps) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [favorited, setFavorited] = useState(false)
  const [searchedCharacter, setSearchedCharacter] = useState<Character>()

  return (
    <SearchContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        searchedCharacter,
        setSearchedCharacter,
        favorited,
        setFavorited
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
export const SearchContext = createContext({} as SearchContextType)
