import { Main } from '../layout/Main'

export default function Home() {
  return (
    <>
      <Main />
      <div
        className="absolute inset-0 bg-no-repeat bg-center opacity-90 filter brightness-50 "
        style={{ zIndex: -1 }}
      />
    </>
  )
}
