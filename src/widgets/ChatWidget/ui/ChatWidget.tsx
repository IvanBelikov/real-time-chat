import { Box, TextField, InputAdornment, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { PageLoader } from '@base/ui'
import { MessagesList } from '@base/features'
import { useMessages, useSendMessage } from '@base/entities'

import { ChatMessageSchema, type ChatMessage } from './ChatWidget.schema'
import styles from './ChatWidget.styles'

export const ChatWidget = () => {
  const { messages, isLoading } = useMessages()
  const { mutate } = useSendMessage()

  const { register, resetField, handleSubmit } = useForm({
    resolver: zodResolver(ChatMessageSchema),
  })

  const sendMessage = async (message: ChatMessage) => {
    mutate(message.text)

    resetField('text')
  }

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <Box sx={styles.formContainer}>
      <MessagesList messages={messages} />
      <Box
        component={'form'}
        onSubmit={handleSubmit(sendMessage)}
        autoComplete={'off'}
        sx={styles.inputContainer}
      >
        <TextField
          {...register('text')}
          fullWidth
          autoFocus
          variant={'outlined'}
          placeholder={'Enter the message...'}
          sx={styles.input}
        />
        <InputAdornment position={'end'}>
          <IconButton type={'submit'} edge={'end'} color={'primary'}>
            <SendIcon />
          </IconButton>
        </InputAdornment>
      </Box>
    </Box>
  )
}
