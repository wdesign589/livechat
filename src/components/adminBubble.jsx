import logo from '../assets/logo.png'



function AdminBubble({type, value, admin}) {
    if(type == 'text'){
        return (
            <div className={`p-2 flex flex-row${admin? '-reverse gap-2': ''} space-x-2`}>
                <div className='bg-notblack w-8 h-8 items-center p-1 rounded-full'>
                    <img src={logo} alt="" className='w-6 h-6' />
                </div>
                <div className='bg-notblack  max-w-[70vw] rounded-xl p-2'>
                    <p className='text-sm text-wrap truncate font-medium font-sans antialiased text-lightblack'>{value}</p>
                </div>
            </div>
        )
    }

    if(type == 'image'){
        return(
            <div className={`p-2 flex flex-row${admin? '-reverse gap-2': ''} space-x-2`}>
                <div className='bg-notblack w-8 h-8 items-center p-1 rounded-full'>
                    <img src={logo} alt="" className='w-6 h-6' />
                </div>
                <div className='bg-notblack  max-w-[70vw] rounded-xl p-2'>
                    <img src={value} alt="" className='w-[150px]' />
                </div>
            </div>
        )
    }

  
}

export default AdminBubble
