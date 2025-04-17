import { QueryClientProvider } from '@tanstack/react-query'

import { useAuth } from '@base/entities'
import { UserContext } from '@base/contexts'
import { queryClient } from '@base/lib'
import { FSLoader } from '@base/ui'

import { PublicRouterProvider, AuthorizedRouterProvider } from './router'

export const App = () => {
  const user = useAuth()

  if (user === undefined) {
    return <FSLoader />
  }
  const RouterProvider = user ? AuthorizedRouterProvider : PublicRouterProvider

  return (
    <UserContext.Provider value={user}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider />
      </QueryClientProvider>
    </UserContext.Provider>
  )
}
