import * as z from 'zod'

const TimestampSchema = z.object({
  seconds: z.number(),
  nanoseconds: z.number(),
})

export const MessageSchema = z.object({
  createdAt: TimestampSchema,
  displayName: z.string().nullable(),
  photoURL: z.string().url().nullable(),
  text: z.string().nonempty(),
  uid: z.string(),
})

export type Message = z.infer<typeof MessageSchema>
