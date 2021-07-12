import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

export function useCharacters() {
  return useContext(CharacterContext)
}
