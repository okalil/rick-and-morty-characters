import React, { FormEvent } from 'react'

import { useSearch } from '../hooks/useSearchContext'
import { api } from '../services/api'
import { Character } from '../types'

export const Searchbox: React.FC = () => {
  const { setSearch } = useSearch()

  const searchCharacter = async (event: FormEvent) => {
    event.preventDefault()
    setSearch(s => ({ ...s, loading: true }))

    const formData = new FormData(event.target as HTMLFormElement)
    const query = formData.get('field') as string

    try {
      const { data } = await api.get('/character')
      const results: Character[] = data.results

      let r = results.filter(({ name }) =>
        name.toLowerCase().split(' ')[0].includes(query?.toLowerCase())
      )

      if (!r[0])
        r = results.filter(({ name }) =>
          name.toLowerCase().includes(query?.toLowerCase())
        )

      const [result] = r

      if (result) {
        setSearch({ data: result, loading: false, error: null })
      } else {
        setSearch(s => ({
          ...s,
          error: 'O personagem buscado não existe.',
          loading: false
        }))
      }
    } catch (err) {
      console.error(err)
      setSearch(s => ({ ...s, error: 'Erro no servidor' }))
    }
  }

  return (
    <form
      onSubmit={searchCharacter}
      className="flex rounded max-w-screen-sm mx-auto"
    >
      <input
        type="text"
        placeholder="Buscar personagem..."
        name="field"
        className="rounded-l p-4 flex-auto border border-green-500 border-solid outline-none"
      />
      <button
        type="submit"
        className="text-white font-medium rounded-r cursor-pointer w-1/6 bg-green-brand"
      >
        Buscar
      </button>
    </form>
  )
}
