

function ClientBubble({type, value}) {
  
    if(type == 'text'){
        return (
            <div className={`p-2 flex flex-row space-x-2 justify-end place-content-end`}>
                <div className='bg-notblack  max-w-[70vw] rounded-xl p-2 justify-end '>
                    <p className='justify-end text-sm text-wrap truncate font-medium font-sans antialiased text-lightblack'>{value}</p>
                </div>
            </div>
        )
    }

    if(type == 'image'){
        return(
            <div className={`p-2 flex flex-row space-x-2 justify-end place-content-end`}>
                <div className='bg-notblack  max-w-[70vw] rounded-xl p-2 justify-end '>
                <img src={value} alt="" className='w-[150px]' />
                </div>
            </div>
        )
        
    }


  
}

export default ClientBubble
