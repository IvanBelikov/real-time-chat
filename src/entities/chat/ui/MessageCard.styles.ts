import type { SxProps } from '@mui/material'

const card: SxProps = {
  display: 'flex',
  gap: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  mb: 1,
}

const cardUser: SxProps = {
  display: 'flex',
  gap: 1,
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  mb: 1,
}

const cardBody: SxProps = {
  p: 1.5,
  ml: 0,
  mr: 1,
  maxWidth: '70%',
  backgroundColor: 'background.paper',
  color: 'text.primary',
  borderRadius: '8px 8px 8px 0',
}

const cardBodyUser: SxProps = {
  p: 1.5,
  ml: 1,
  mr: 0,
  maxWidth: '70%',
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  borderRadius: '8px 8px 0 8px',
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
