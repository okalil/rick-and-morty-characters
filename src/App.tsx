import { Main } from './layout/Main'
import { Aside } from './layout/Aside'
import { CharacterContextProvider } from './contexts/CharacterContext'
import { SearchContextProvider } from './contexts/SearchContext'

function App() {
  return (
    <CharacterContextProvider>
      <div className="d-flex vh-100">
        <Aside />
        <SearchContextProvider>
          <Main />
        </SearchContextProvider>
      </div>
    </CharacterContextProvider>
  )
}

export default App
