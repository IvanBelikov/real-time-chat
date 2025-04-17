import { useMutation } from '@tanstack/react-query'
import { signInAnonymously, updateProfile } from 'firebase/auth'

import { auth } from '@base/lib'
import { MutationKeys } from '@base/constants'

export const useGuestAuth = () =>
  useMutation({
    mutationKey: [MutationKeys.GuestAuth],
    mutationFn: (guestName: string) =>
      signInAnonymously(auth).then((userCredential) => {
        const user = userCredential.user

        return updateProfile(user, {
          displayName: guestName,
        })
      }),
  })
