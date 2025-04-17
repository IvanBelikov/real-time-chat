import { useMutation } from '@tanstack/react-query'

import { addDoc, collection, Timestamp } from 'firebase/firestore'

import { db } from '@base/lib'
import { useUserContext } from '@base/contexts'
import type { Message } from '@base/schemas'
import { FirestoreCollections, MutationKeys } from '@base/constants'

export const useSendMessage = () => {
  const user = useUserContext()

  if (!user) {
    throw new Error('There is no valid user data!')
  }

  return useMutation({
    mutationKey: [MutationKeys.SendMessage],
    mutationFn: (message: string) =>
      addDoc(collection(db, FirestoreCollections.Messages), {
        displayName: user.displayName,
        createdAt: Timestamp.now(),
        photoURL: user.photoURL,
        text: message,
        uid: user.uid,
      } satisfies Message),
  })
}
