import type { SxProps } from '@mui/material'

const card: SxProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  mb: 1,
}

const cardUser: SxProps = {
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  mb: 1,
}

const cardBody = {
  p: 1.5,
  ml: 0,
  mr: 1,
  maxWidth: '70%',
  backgroundColor: 'background.paper',
  color: 'text.primary',
  borderRadius: '18px 18px 18px 0',
}

const cardBodyUser = {
  p: 1.5,
  ml: 1,
  mr: 0,
  maxWidth: '70%',
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  borderRadius: '18px 18px 0 18px',
}

const text: SxProps = {
  color: 'text.secondary',
  mt: 0.5,
}

const userText: SxProps = {
  color: 'text.contrastText',
  mt: 0.5,
}

const avatar = { alignSelf: 'flex-end', minWidth: 40 }

const avatarUser = { alignSelf: 'flex-start', minWidth: 40 }

export default {
  card,
  cardUser,
  cardBody,
  cardBodyUser,
  avatar,
  avatarUser,
  text,
  userText,
}
