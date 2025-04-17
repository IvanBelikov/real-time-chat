import { CircularProgress } from '@mui/material'

import styles from './PageLoader.styles'

export const PageLoader = () => (
  <CircularProgress sx={styles.loader} color={'inherit'} />
)
