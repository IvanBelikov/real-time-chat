import { Backdrop, CircularProgress } from '@mui/material'

export const FSLoader = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" size={60} thickness={4} />
    </Backdrop>
  )
}
