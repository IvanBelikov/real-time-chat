import * as z from 'zod'

export const ChatMessageSchema = z.object({
  text: z.string().nonempty(),
})

export type ChatMessage = z.infer<typeof ChatMessageSchema>
