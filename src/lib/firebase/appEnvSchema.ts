import * as z from 'zod'

export const appFirebaseEnvSchema = z.object({
  apiKey: z.string(),
  authDomain: z.string(),
  projectId: z.string(),
  storageBucket: z.string(),
  messagingSenderId: z.string(),
})

export type AppFirebaseEnv = z.infer<typeof appFirebaseEnvSchema>
