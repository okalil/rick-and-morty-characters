import React from 'react'
import { Container } from 'react-bootstrap'

import { SearchedCard } from '../components/SearchedCard'
import { Searchbox } from '../components/Searchbox'
import { useSearch } from '../hooks/useSearchContext'

export const Main: React.FC = () => {
  const { loading, error, searchedCharacter } = useSearch()

  return (
    <Container className="bg-light">
      <Searchbox />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        (error && <p className="text-center">{error}</p>) ||
        (searchedCharacter && <SearchedCard />)
      )}

      <h2 className="text-center mt-5">
        {searchedCharacter
          ? 'Clique na estrela para favoritar'
          : 'Encontre seus personagens favoritos!'}
      </h2>

    </Container>
  )
}
