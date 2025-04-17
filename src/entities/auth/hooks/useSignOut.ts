import { useMutation } from '@tanstack/react-query'
import { signOut } from 'firebase/auth'

import { auth } from '@base/lib'
import { MutationKeys } from '@base/constants'

export const useSignOut = () =>
  useMutation({
    mutationKey: [MutationKeys.SignOut],
    mutationFn: () => signOut(auth),
  })
