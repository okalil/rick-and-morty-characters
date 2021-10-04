import React, { FormEvent, useState } from 'react'

import { useSearch } from '../hooks/useSearchContext'
import { api } from '../services/api'

export const Searchbox: React.FC = () => {
  const { setLoading, setError, setSearchedCharacter } = useSearch()
  const [name, setName] = useState('')

  const searchCharacter = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

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
          lower === name.toLowerCase() ||
          lower.split(' ')[0] === name.toLowerCase()
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

  const formStyle = { width: 'min(60%, 400px)' }

  return (
    <form
      onSubmit={searchCharacter}
      className="mx-auto mt-5 mb-3"
      style={formStyle}
    >
      <div>
        <input
          type="text"
          placeholder="Buscar personagem..."
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  )
}
