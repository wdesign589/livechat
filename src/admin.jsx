import { useState, useEffect, useRef } from 'react'
import { supabase} from '../utils/supabase'
import Header from "./components/header"
import Chat from './components/chat'
import Body from './components/body'

function Admin() {

  const [chats, setChats] = useState([])

  useEffect(() => {
    getChats();
    }, []);


 
  const getChats = async () => {
    const { data } = await supabase
    .from('chats')
    .select()
 
    if(data) {
      setChats(data)
      console.log(chats) 
    }
      
  }


  return (
    <div className='bg-white'>
      <Header text={'Admin'}/>

      <Body>
        {
          chats.map((chat) => {
            return(
              <Chat email={chat.email} id={chat.id}/>
            )
          })
        }
      </Body>
      
    </div>
  )
}

export default Admin
