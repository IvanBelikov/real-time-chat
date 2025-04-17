import { lazy } from 'react'
import type { RouteObject } from 'react-router'

import { MainLayout } from '@base/app/layouts'

import { AUTH_ROUTES } from '@base/constants'

const ChatPage = lazy(() => import('@base/pages/ChatPage'))

export const authorizedRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.HOME.PATH,
    Component: MainLayout,
    children: [
      {
        path: AUTH_ROUTES.HOME.PATH,
        Component: ChatPage,
      },
    ],
  },
]
