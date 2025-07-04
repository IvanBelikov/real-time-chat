import { type FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { appFirebaseEnvSchema } from './appEnvSchema'

const firebaseConfig: FirebaseOptions = appFirebaseEnvSchema.parse({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
})

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()
