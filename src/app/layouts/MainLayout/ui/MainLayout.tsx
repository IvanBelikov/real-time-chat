import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { Box, Container } from '@mui/material'

import { MainHeader } from '@base/widgets'
import { PageLoader } from '@base/ui'

import styles from './MainLayout.styles'

export const MainLayout = () => (
  <Box sx={styles.layoutContainer}>
    <MainHeader />
    <Box sx={styles.page}>
      <Container sx={styles.pageContainer}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  </Box>
)
