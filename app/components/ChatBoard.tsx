import React from 'react'
import ChatMessages from './ChatMessages'
import ChatForm from './ChatForm'

const ChatBoard = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <ChatMessages />
        <ChatForm />
    </div>
  )
}

export default ChatBoard