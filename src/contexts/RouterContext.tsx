import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from 'react'

type RouterContextType = {
  path: string | undefined
  setPath: Dispatch<SetStateAction<string | undefined>>
}

export const RouterContext = createContext({} as RouterContextType)

const Router: React.FC = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname || undefined)

  const value = useMemo(() => ({ path, setPath }), [path, setPath])

  window.onpopstate = () => setPath(window.location.pathname)

  return (
    <RouterContext.Provider {...{ value }}>{children}</RouterContext.Provider>
  )
}

export default Router
