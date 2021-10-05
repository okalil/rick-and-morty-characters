import React, { FormEvent } from 'react'

import { useSearch } from '../hooks/useSearchContext'
import { api } from '../services/api'

export const Searchbox: React.FC = () => {
  const { setLoading, setError, setSearchedCharacter } = useSearch()

  const searchCharacter = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target as HTMLFormElement)
    const query = formData.get('field') as string

    try {
      const { data } = await api.get('/character')
      const results: {
        id: number
        name: string
        gender: string
        species: string
        image: string
      }[] = data.results
      const [result] = results.filter(item => {
        const lower = item.name.toLowerCase()
        return (
          lower === query?.toLowerCase() ||
          lower.split(' ')[0] === query?.toLowerCase()
        )
      })

      if (result) {
        setSearchedCharacter(result)
        setError('')
      } else {
        setError('O personagem buscado não existe.')
      }
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
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
