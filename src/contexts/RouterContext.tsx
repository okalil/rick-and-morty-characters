import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from 'react'

type RouterContextType = {
  path: string
  setPath: Dispatch<SetStateAction<string>>
}

export const RouterContext = createContext({} as RouterContextType)

const Router: React.FC = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname)

  window.onpopstate = () => setPath(window.location.pathname)

  const value = useMemo(() => ({ path, setPath }), [path, setPath])

  return (
    <RouterContext.Provider {...{ value }}>{children}</RouterContext.Provider>
  )
}

export default Router
