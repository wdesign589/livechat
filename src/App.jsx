import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase} from '../utils/supabase'

import Header from './components/header'
import TextBox from './components/textBox'
import Body from './components/body'
import AdminBubble from './components/adminBubble'
import ClientBubble from './components/clientBubble'


function App() {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const clear = supabase.removeAllChannels()

  const handleClick = async () => {
    setEmail(email.toLowerCase())
    console.log(email)
    setLoading(true)
    if(email == 'admin@binance.com'){
      //admin
      navigate('/admin')

    }else{
      const { data, error } = await supabase
      .from('chats')
      .select()
      .eq('email', email)
       
        if(data.length == 0){
          const { data, error } = await supabase
          .from('chats')
          .insert({ email: email }).select('id')

          //new user
          if(error == null) navigate('/client/' + data[0].id);

        }else{
          //old user
          navigate('/client/' + data[0].id );
        }
    }

      setLoading(false)
  }

  return (
    <div className='bg-white'>
      <Header />
      
        <div className=' w-full h-[100vh] rounded-3xl mx-auto items-center justify-center p-4 '>
          <div className='w-[70vw] mx-auto h-[35%] mb-32 p-4 rounded-2xl bg-slate-200 my-32 items-center justify-center flex flex-col space-y-4'> 
            <h1 className='text-lg font-bold'>Connect With Us</h1>
            <p className='text-xs text-center'>Enter your email address to receive updates on your inquiry.</p>
            <input
              className='rounded-md mx-auto w-[80%] text-xs font-medium p-2 text-center focus:outline focus:outline-yellow'
              placeholder='Enter your email address'
              onKeyUp={(e) => setEmail(e.target.value.toLowerCase())}
            />
    
            <button disabled={loading? true: false}
              className={`${loading? 'bg-gray':'bg-yellow'} w-[80%] p-1 rounded-md text-base font-semibold `}
               onClick={handleClick}
              >Start Chat</button>
          </div>
        </div>
        
      
     
    </div>
  )
}

export default App
