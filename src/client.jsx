import { useState, useEffect, useRef } from 'react'
import { supabase} from '../utils/supabase'
import { useParams } from 'react-router-dom'

import Header from './components/header'
import TextBox from './components/textBox'
import Body from './components/body'
import AdminBubble from './components/adminBubble'
import ClientBubble from './components/clientBubble'


function Client() {

  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const input = useRef(null)
  const lastBox = useRef(null)
  const upload = useRef(null)
  const params = useParams()
  //console.log(params)

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


  useEffect(() => {
    getMessages();
    }, []);



  const getMessages = async () => {
    const { data } = await supabase
    .from('messages')
    .select()
    .eq('chat_id', params.id) 
    if(data) {
      setMessages(data)
      lastBox.current.scrollIntoView()
    }
      //console.log(messages) 
  }


  
  const channels = supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'messages' },
    (payload) => {
      //console.log('Change received!', payload)
      getMessages();
    }
  ).subscribe()



  const HandleClick = async () => {
    if(text != ''){
      const { data, error } = await supabase
          .from('messages')
          .insert({ chat_id: params.id, type: 'text', value: text, sender: 'client' })

          if(error == null) {
            input.current.value = ''
          }
    }
    
  }

  const insertImage = async (value) => {
      const { data, error } = await supabase
          .from('messages')
          .insert({ chat_id: params.id, type: 'image', value: value, sender: 'client' })

          if(error == null) {
            input.current.value = ''
          }
  }



  //file uplaod
  const uploadFile = async(event) => {
    setLoading(true)

    const file = event.target.files[0]

    const name = params.id +'/' + randomNumberInRange(1, 20000);
    const { data, error } = await supabase
      .storage
      .from('pict')
      .upload(name, file, {
        cacheControl: '3600',
        upsert: false
      })

    if(data) {
        console.log('upload success')

        const { data } = supabase
        .storage
        .from('pict')
        .getPublicUrl(name)

        if(data){
          insertImage(data.publicUrl)
          console.log(data.publicUrl)
        }
    }
    
    setLoading(false)
  }


  return (
    <div className='bg-black'>
      <Header text={'Support'}/>
      <Body>
        <AdminBubble 
          type = 'text'
          value='Hi, please enter your question or click "+" to uplaod an image'
          admin={false}
        />
        {messages.map((message) => {
          if(message.sender == 'client'){
            return(
              <ClientBubble 
                key={message.id}
                type = {message.type}
                value = {message.value} 
              
              />
            )
          }

          if(message.sender == 'admin'){
            return(
              <AdminBubble 
                key={message.id}
                type = {message.type}
                value= {message.value}
                
              />
            )
          }
        })}
        
    <div ref={lastBox} className='my-8 h-4'/>
        
      </Body>
      
      <div className=' flex flex-row fixed bottom-0 border border-gray w-full p-4 max-h-16 rounded-b-lg bg-white justify-between items-center'>
        <textarea className=' bg-notblack w-full min-h-[16px] mt-4 focus:outline-0 text-sm font-semibold p-2'
            placeholder='Enter and select your question'
            onKeyUp={(e) => {setText(e.target.value)}}
            ref={input}
        />
        <div className='flex flex-row items-center space-x-2'  >
          <button disabled={loading? true: false} onClick={HandleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 text-gray active:text-yellow">
              <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
            </svg>
          </button>

          <input ref={upload} type='file' accept='image/*' id='fileInput' onChange={(e) => uploadFile(e)} hidden/>
          
          <button disabled={loading? true: false} onClick={() => {document.querySelector('#fileInput').click()}}> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 text-gray active:text-yellow">
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
            </svg>
          </button>
        
        </div>
        

    </div>

    </div>
  )
  
}

export default Client
