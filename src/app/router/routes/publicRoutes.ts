import { lazy } from 'react'
import type { RouteObject } from 'react-router'

import { MainLayout } from '@base/app/layouts'

import { PUBLIC_ROUTES } from '@base/constants'

const SignInPage = lazy(() => import('@base/pages/SignInPage'))

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTES.HOME.PATH,
    Component: MainLayout,
    children: [
      {
        path: PUBLIC_ROUTES.HOME.PATH,
        Component: SignInPage,
      },
    ],
  },
]
