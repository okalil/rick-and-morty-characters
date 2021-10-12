import { Loader } from '../components/Loader'
import { Searchbox } from '../components/Searchbox'
import { SearchedCard } from '../components/SearchedCard'
import { useSearch } from '../hooks/useSearchContext'

export default function Home() {
  const { search } = useSearch()

  const { data, loading, error } = search

  return (
    <main className="px-8">
      <div className="max-w-4xl my-16 mx-auto text-center">
        <h1 className="text-5xl font-semibold text-white">Rick and Morty</h1>
        <h2 className="text-xl font-medium mt-3 mb-8 text-white">
          Encontre seus personagens favoritos!!
        </h2>
        <Searchbox />
      </div>

      {loading && <Loader />}
      {(error && <p className="text-center text-white">{error}</p>) ||
        (data && <SearchedCard />)}

      <h2 className="text-center text-white text-lg font-medium mt-5">
        {!error && data && 'Clique na estrela para favoritar'}
      </h2>

      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-wallpaper bg-cover opacity-50 filter brightness-50"
        style={{ zIndex: -1 }}
      />
    </main>
  )
}
