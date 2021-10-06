import { useContext } from 'react'
import { RouterContext } from './contexts/RouterContext'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'

const routes = [
  { path: '/', component: <Home /> },
  { path: '/favorites', component: <Favorites /> }
]

export default function Routes() {
  const { path } = useContext(RouterContext)
  const currentRoute = routes.find(item => item.path === path)

  return currentRoute?.component ?? <NotFound />
}
