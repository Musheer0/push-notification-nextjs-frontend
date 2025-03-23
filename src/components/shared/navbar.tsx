import { BellIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    const isLoggedIn = true
  return (
    <nav className='py-1 border-b flex items-center justify-between'>
        <h1 className='flex items-center gap-1 font-semibold'>
        <BellIcon size={15}/>
            Notifiy
        </h1>
        {
            isLoggedIn ?
            <>
            <div className='w-7  h-7 bg-red-500 rounded-full'></div>
            </>
            :
            <>
            </>
        }
    </nav>
  )
}

export default Navbar