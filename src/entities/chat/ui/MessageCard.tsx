import type { FC } from 'react'

import {
  Avatar,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography,
} from '@mui/material'

import { Timestamp } from 'firebase/firestore'

import { timestampToChatDate } from '@base/lib'

import type { MessageCardProps } from './MessageCard.props'

import styles from './MessageCard.styles'

export const MessageCard: FC<MessageCardProps> = ({ user, message }) => {
  return (
    <ListItem sx={message.uid === user.uid ? styles.cardUser : styles.card}>
      {message.uid !== user.uid && (
        <ListItemAvatar sx={styles.avatar}>
          <Avatar src={message.photoURL || ''} />
        </ListItemAvatar>
      )}
      <Paper
        sx={message.uid === user.uid ? styles.cardBodyUser : styles.cardBody}
      >
        {message.uid !== user.uid && (
          <Typography variant={'caption'} display={'block'} gutterBottom>
            {message.displayName}
          </Typography>
        )}
        <Typography>{message.text}</Typography>
        <Typography
          variant={'caption'}
          display={'block'}
          textAlign={'right'}
          sx={message.uid === user.uid ? styles.userText : styles.text}
        >
          {timestampToChatDate(
            new Timestamp(
              message.createdAt.seconds,
              message.createdAt.nanoseconds,
            ),
          )}
        </Typography>
      </Paper>
      {message.uid === user.uid && (
        <ListItemAvatar sx={styles.avatarUser}>
          <Avatar src={message.photoURL || ''} />
        </ListItemAvatar>
      )}
    </ListItem>
  )
}
