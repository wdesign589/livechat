import React from 'react'

function TextBox() {
  return (
    <div className=' flex flex-row fixed bottom-0 border border-gray w-full p-4 max-h-16 rounded-b-lg bg-white justify-between items-center'>
        <textarea className=' bg-notblack w-full min-h-[16px] mt-4 focus:outline-0 text-sm font-semibold'
            placeholder='Enter and select your question'
            
        />
        <div className='flex flex-row items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 text-gray active:text-yellow">
            <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 text-gray active:text-yellow">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
        </svg>
        </div>
        

    </div>
  )
}

export default TextBox
