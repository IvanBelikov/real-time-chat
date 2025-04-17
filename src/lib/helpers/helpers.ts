import type { Timestamp } from 'firebase/firestore'

export const timestampToChatDate = (timestamp: Timestamp) => {
  const date = timestamp.toDate()

  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })

  return formattedDate
}
