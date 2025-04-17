import { useEffect, useState } from 'react'

import { onAuthStateChanged, type User } from 'firebase/auth'

import { auth } from '@base/lib'
import type { Nullable } from '@base/types'

export const useAuth = () => {
  const [user, setUser] = useState<Nullable<User>>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentState) => {
      setUser(currentState)
    })

    return unsubscribe
  }, [])

  return user
}
