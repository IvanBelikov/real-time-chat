import type { FC } from 'react'

import { Box, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'

import { auth } from '@base/lib'

import type { GithubProviderProps } from './GithubProvider.props'
import styles from './GithubProvider.styles'

export const GithubProvider: FC<GithubProviderProps> = ({ isDisabled }) => {
  const provider = new GithubAuthProvider()

  const handleClick = () => signInWithPopup(auth, provider)

  return (
    <Button
      fullWidth
      color={'inherit'}
      variant={'outlined'}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <Box sx={styles.buttonContent}>
        <GitHubIcon />
        Github
      </Box>
    </Button>
  )
}
