import type { SxProps } from '@mui/material'

const layoutContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const page: SxProps = {
  flex: 1,
  overflow: 'auto',
}

const pageContainer: SxProps = {
  height: '100%',
  overflow: 'hidden',
}

export default { layoutContainer, page, pageContainer }
