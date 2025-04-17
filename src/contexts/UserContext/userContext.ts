import { createContext, useContext } from 'react'

import type { User } from 'firebase/auth'

import type { Nullable } from '@base/types'

export const UserContext = createContext<Nullable<User>>(null)

export const useUserContext = () => {
  const userContext = useContext(UserContext)

  if (userContext === undefined) {
    throw new Error('useUserContext must be used within UserProvider')
  }

  return userContext
}
