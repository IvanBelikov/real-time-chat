import { createBrowserRouter, RouterProvider } from 'react-router'

import { authorizedRoutes } from '../routes'

export const AuthorizedRouterProvider = () => {
  const router = createBrowserRouter(authorizedRoutes)

  return <RouterProvider router={router} />
}
