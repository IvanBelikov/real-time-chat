import type { SxProps } from '@mui/material'

const container: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

const credentialsContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}

const submitButton: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
}

export default { container, credentialsContainer, submitButton }
