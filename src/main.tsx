import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { App } from './app'

import { theme } from '@base/app/theme'

const rootElem = document.getElementById('root')

if (!rootElem) {
  throw new Error('There is now elem with id root')
}

createRoot(rootElem).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
