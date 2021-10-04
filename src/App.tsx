import Router from './contexts/RouterContext'
import { CharacterContextProvider } from './contexts/CharacterContext'
import { SearchContextProvider } from './contexts/SearchContext'

import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <CharacterContextProvider>
      <SearchContextProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </SearchContextProvider>
    </CharacterContextProvider>
  )
}

export default App
