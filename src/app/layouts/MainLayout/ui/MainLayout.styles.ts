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

const pageContainer = {
  height: '100%',
}

export default { layoutContainer, page, pageContainer }
