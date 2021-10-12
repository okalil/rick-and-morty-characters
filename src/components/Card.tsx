import { HTMLAttributes } from 'react'
import { Character } from '../types'

interface Props extends HTMLAttributes<HTMLElement> {
  action: () => void
  characterData: Character
  icon: { src: string; alt: string; width?: number }
}

export const Card: React.FC<Props> = ({
  icon,
  characterData,
  action,
  className,
  style,
  ...rest
}) => {
  const { name, image, gender, species } = characterData

  const styles = {
    container: 'flex mx-auto rounded-lg h-40 relative text-black max-w-2xl',
    icon: 'absolute right-2 top-2 cursor-pointer'
  }

  if (className) styles.container = styles.container + ' ' + className

  return (
    <section className={styles.container} {...rest}>
      <img src={image} alt="Imagem do personagem" className="rounded-l-lg" />
      <div className="bg-white flex-1 p-4 rounded-r-lg">
        <h2 className="font-semibold text-xl">{name}</h2>
        <div>
          <span className="font-semibold">Gênero: </span>
          <span>{gender}</span>
        </div>
        <div>
          <span className="font-semibold">Espécie: </span>
          <span>{species}</span>
        </div>

        <span onClick={action} className={styles.icon}>
          <img src={icon.src} alt={icon.alt} width={icon.width ?? 25} />
        </span>
      </div>
    </section>
  )
}
