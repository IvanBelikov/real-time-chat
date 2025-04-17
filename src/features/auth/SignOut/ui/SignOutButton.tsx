import { useSignOut } from '@base/entities'
import { CircularProgress, IconButton } from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout'

export const SignOutButton = () => {
  const { mutate, isPending } = useSignOut()

  const handleClick = () => mutate()

  return (
    <IconButton onClick={handleClick}>
      {isPending ? <CircularProgress /> : <LogoutIcon />}
    </IconButton>
  )
}
