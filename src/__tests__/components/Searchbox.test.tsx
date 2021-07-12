import { fireEvent , render, screen } from '@testing-library/react'
import { Searchbox } from '../../components/Searchbox'

import { api } from '../../services/api'

describe('testing searchbox', () => {
  it('should update the value', () => {
    const { getByPlaceholderText } = render(<Searchbox />)

    const input = getByPlaceholderText('Buscar personagem...')

    fireEvent.change(input, { target: { value: 'morty' } })

    expect(input).toHaveValue('morty')
  })

  it('should search the submitted value', async () => {
    render(
  
        <Searchbox />
    )

    const input = screen.getByPlaceholderText(
      'Buscar personagem...'
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'morty smith' } })

    const response = await api.get('/character')
    const results: { name: string }[] = response.data.results
    const [result] = results.filter(
      character => character.name.toLowerCase() === 'morty smith'
    )

    expect(result.name.toLowerCase()).toMatch(input.value)
  })
})
