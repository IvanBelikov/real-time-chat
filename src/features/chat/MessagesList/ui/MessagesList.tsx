import { useEffect, useRef, type FC } from 'react'
import { Navigate } from 'react-router'

import { List } from '@mui/material'

import { Timestamp } from 'firebase/firestore'

import { MessageCard } from '@base/entities'
import { useUserContext } from '@base/contexts'
import { PUBLIC_ROUTES } from '@base/constants'

import type { MessagesListProps } from './MessagesList.props'
import styles from './MessagesList.styles'

export const MessagesList: FC<MessagesListProps> = ({ messages }) => {
  const user = useUserContext()

  const bottomRef = useRef<HTMLDivElement>(null)

  if (user === null) {
    return <Navigate to={PUBLIC_ROUTES.HOME.PATH} />
  }

  useEffect(() => {
    if (messages && bottomRef.current) {
      bottomRef.current.scrollIntoView()
    }
  }, [messages])

  return (
    <List sx={styles.listContainer}>
      {messages.map((message) => (
        <MessageCard
          key={new Timestamp(
            message.createdAt.seconds,
            message.createdAt.nanoseconds,
          )
            .toDate()
            .getTime()}
          user={user}
          message={message}
        />
      ))}
      <div id={'bottomRef'} ref={bottomRef} />
    </List>
  )
}
