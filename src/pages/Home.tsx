import { Searchbox } from '../components/Searchbox'
import { SearchedCard } from '../components/SearchedCard'
import { useSearch } from '../hooks/useSearchContext'

export default function Home() {
  const { loading, error, searchedCharacter } = useSearch()
  return (
    <main className="px-8">
      <div className="max-w-4xl my-16 mx-auto text-center">
        <h1 className="text-5xl font-semibold text-white">Rick and Morty</h1>
        <h2 className="text-xl font-medium mt-3 mb-8 text-white">
          Encontre seus personagens favoritos!!
        </h2>
        <Searchbox />
      </div>

      {loading && <p>Carregando...</p>}
      {(error && <p className="text-center ">{error}</p>) ||
        (searchedCharacter && <SearchedCard />)}

      <h2 className="text-center mt-5">
        {searchedCharacter && 'Clique na estrela para favoritar'}
      </h2>
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-wallpaper bg-cover opacity-50 filter brightness-50"
        style={{ zIndex: -1 }}
      />
    </main>
  )
}
