import Router from './contexts/RouterContext'
import { SearchContextProvider } from './contexts/SearchContext'

import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <SearchContextProvider>
      <Router>
        <Header />
        <Routes />
      </Router>
    </SearchContextProvider>
  )
}

export default App
