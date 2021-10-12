import { useState } from 'react'

export default function usePersistedState<T>(
  key: string
): [T[], (value: T[]) => void] {
  const saved = localStorage.getItem(key)
  const [array, setArray] = useState<T[]>(saved ? JSON.parse(saved) : [])

  function updateArray(value: T[]) {
    setArray(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [array, updateArray]
}
