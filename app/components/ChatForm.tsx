import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sendMessage } from '@/lib/socket-client-actions'
import React from 'react'

const ChatForm = () => {
  return (
    <form className="bg-gray-200 mt-4 p-4 border shadow-md flex flex-row w-full items-center space-x-4" action={sendMessage}>
     <Input className='w-8/12 bg-white'  type="text" name="message" id="message" placeholder="Mensaje" />
     <Button type="submit">Enviar</Button>
    </form>
  )
}

export default ChatForm