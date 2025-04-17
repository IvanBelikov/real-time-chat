import type { SxProps } from '@mui/material'

const headerContainer: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 3,
  py: 1,
  borderBottom: 1,
  borderColor: 'GrayText',
}

const logoText: SxProps = {
  fontSize: 16,
}

const controls: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 3,
}

export default { headerContainer, logoText, controls }
