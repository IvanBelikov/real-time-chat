import { useEffect } from 'react'

import { Box } from '@mui/material'

import { PUBLIC_ROUTES } from '@base/constants'
import { SignInForm } from '@base/widgets'

import styles from './SignInPage.styles'

export const SignInPage = () => {
  useEffect(() => {
    document.title = PUBLIC_ROUTES.HOME.TITLE
  }, [])

  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <SignInForm />
      </Box>
    </Box>
  )
}
