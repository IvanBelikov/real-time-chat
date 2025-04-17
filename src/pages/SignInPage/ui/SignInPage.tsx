import { SignInForm } from '@base/widgets'
import { Box } from '@mui/material'

import styles from './SignInPage.styles'

export const SignInPage = () => {
  return (
    <Box sx={styles.page}>
      <Box sx={styles.formContainer}>
        <SignInForm />
      </Box>
    </Box>
  )
}
