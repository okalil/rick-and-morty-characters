import Link from './Link'
import logo from '../assets/rick-and-morty.png'
const navigation = [
  { key: 'Home', href: '/' },
  { key: 'Favoritos', href: '/favorites' }
]

export default function Header() {
  return (
    <header
      className="flex justify-between items-center px-2 mx-auto h-20"
      style={{ width: 'min(100vw, 1104px)' }}
    >
      <img src={logo} alt="Rick n Morty" className="max-h-full" />
      <nav className="flex py-2">
        {navigation.map(({ href, key }) => (
          <div className="relative mx-3" key={key}>
            <Link className="text-white font-medium nav-link" {...{ href }}>
              {key.toUpperCase()}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
