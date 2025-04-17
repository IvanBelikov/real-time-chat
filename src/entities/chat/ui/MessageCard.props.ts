import type { User } from 'firebase/auth'
import type { Message } from '@base/schemas'

export interface MessageCardProps {
  user: User
  message: Message
}
