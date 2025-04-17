import { Box, Typography } from '@mui/material'

import { SignOutButton } from '@base/features'
import { ThemeSwitcher } from '@base/ui'
import { useUserContext } from '@base/contexts'

import styles from './MainHeader.styles'

export const MainHeader = () => {
  const user = useUserContext()

  return (
    <Box sx={styles.headerContainer}>
      <Typography sx={styles.logoText} variant={'overline'}>
        Real-Time chat
      </Typography>
      <Box sx={styles.controls}>
        <ThemeSwitcher />
        {user && <SignOutButton />}
      </Box>
    </Box>
  )
}
