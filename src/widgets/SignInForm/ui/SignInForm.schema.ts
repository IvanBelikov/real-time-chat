import * as z from 'zod'

export const signInFormSchema = z.object({
  guestName: z.string().min(3),
})

export type SignInCredentials = z.infer<typeof signInFormSchema>
