import { createBrowserRouter, RouterProvider } from 'react-router'

import { publicRoutes } from '../routes'

export const PublicRouterProvider = () => {
  const router = createBrowserRouter(publicRoutes)

  return <RouterProvider router={router} />
}
