import Link from './Link'

const navigation = [
  { key: 'Home', href: '/' },
  { key: 'Favoritos', href: '/favorites' }
]

export default function Header() {
  return (
    <header className="flex justify-between px-2 py-2 ">
      <img src="" alt="Rick n Morty" />
      <nav className="flex">
        {navigation.map(({ href, key }) => (
          <Link className="mx-3 text-white font-medium" {...{ href, key }}>
            {key.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  )
}
