import { AnchorHTMLAttributes, MouseEventHandler, useContext } from 'react'
import { RouterContext } from '../contexts/RouterContext'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const { setPath } = useContext(RouterContext)
  const handleChangeRoute: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault()
    setPath(href)
    window.history.pushState(null, href, href)
  }
  return (
    <a {...{ href, ...props }} onClick={handleChangeRoute}>
      {children}
    </a>
  )
}

export default Link
