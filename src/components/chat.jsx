import React from 'react'
import { Link } from 'react-router-dom'

function Chat({email, id}) {
  return (
    <div className=' my-2 border-b border-notblack shadow-md py-2 px-4 rounded-l-xl'>
      <Link to={'client/' + id} className='flex flex-row space-x-4 items-center w-[80%] p-2 bg-yellow rounded-lg'>
   
        <h4 className='text-xs font-normal'>{id}</h4>
        <h3>{email}</h3>
      </Link>
    </div>
  )
}

export default Chat
