import React from 'react'
import Image from 'next/image'

function SubTopbar({title}) {
const LogoutEvent = () => {
    console.log('Im out')
}

  return (
    <div className='flex items-center justify-between bg-white w-full py-4 px-8 sticky top-0 z-50'>
        <div className='font-bold text-gray-950'>{title}</div>
        <div className='cursor-pointer' onClick={LogoutEvent}>
            <Image src='/images/bell.png' alt='Logout' width={30} height={30} />
        </div>
    </div>
  )
}

export default SubTopbar