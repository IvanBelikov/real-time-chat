import type { SxProps } from '@mui/material'

const formContainer: SxProps = {
  flexGrow: 1,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}

const inputContainer: SxProps = {
  p: 2,
  borderTop: '1px solid #e0e0e0',
  bgcolor: 'background.paper',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const input: SxProps = {
  borderRadius: 4,
}

export default { formContainer, inputContainer, input }
