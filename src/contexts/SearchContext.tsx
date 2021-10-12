import { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState } from 'react'

type Character = {
  id: number
  name: string
  gender: string
  species: string
  image: string
}

type Search = {
  data: Character | null
  loading: boolean
  error: string | null
}

type SearchContextType = {
  search: Search
  setSearch: Dispatch<SetStateAction<Search>>
}

type SearchContextProps = {
  children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProps) {
  const [search, setSearch] = useState<Search>({
    data: null,
    loading: false,
    error: null
  })

  const value = { search, setSearch }

  return <SearchContext.Provider {...{ value, children }} />
}
