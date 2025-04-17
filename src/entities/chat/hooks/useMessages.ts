import { useEffect, useState } from 'react'

import {
  type QueryDocumentSnapshot,
  type DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'

import { db } from '@base/lib'
import { FirestoreCollections } from '@base/constants'
import type { Nullable } from '@base/types'
import { MessageSchema, type Message } from '@base/schemas'

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [lastDoc, setLastDoc] =
    useState<Nullable<QueryDocumentSnapshot<DocumentData, DocumentData>>>(null)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, FirestoreCollections.Messages),
        orderBy('createdAt', 'desc'),
      ),
      (documentSnapshots) => {
        const validatedMessages = documentSnapshots.docs.map((doc) =>
          MessageSchema.parse(doc.data()),
        )

        setLastDoc(documentSnapshots.docs[documentSnapshots.docs.length - 1])
        setMessages(validatedMessages.reverse())
        setIsLoading(false)
      },
    )

    return () => unsubscribe()
  }, [])

  return { messages, isLoading, lastDoc }
}
