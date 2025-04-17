import { useEffect } from 'react'

import { Box } from '@mui/material'

import { AUTH_ROUTES } from '@base/constants'
import { ChatWidget } from '@base/widgets'

export const ChatPage = () => {
  useEffect(() => {
    document.title = AUTH_ROUTES.HOME.TITLE
  }, [])

  return (
    <Box sx={{ height: '100%' }}>
      <ChatWidget />
    </Box>
  )
}
