import { Box, Button, CircularProgress, TextField } from '@mui/material'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useGuestAuth } from '@base/entities'
import { GithubProvider } from '@base/features'

import { type SignInCredentials, signInFormSchema } from './SignInForm.schema'
import styles from './SignInForm.styles'

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  })

  const { mutate, isPending } = useGuestAuth()

  const onSubmit = (credentials: SignInCredentials) =>
    mutate(credentials.guestName)

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={'form'}
      sx={styles.container}
    >
      <Box sx={styles.credentialsContainer}>
        <TextField
          {...register('guestName')}
          error={Boolean(errors.guestName)}
          helperText={errors.guestName?.message}
          disabled={isPending}
          label={'Guest Name'}
          variant={'outlined'}
        />
        <Button
          disabled={isPending}
          sx={styles.submitButton}
          type={'submit'}
          variant={'contained'}
        >
          {isPending && <CircularProgress size={16} color={'inherit'} />}
          Submit
        </Button>
      </Box>
      <GithubProvider isDisabled={isPending} />
    </Box>
  )
}
