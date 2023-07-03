import React from 'react'
import Image from 'next/image'

function CustomCard({Img,amount,title}) {
  return (
    <div className='flex items-start gap-x-2 shadow-sm bg-white pl-4 py-6 rounded-md w-full'>
      <div>
         {Img && (
            <Image src={Img} width={50} height={50} alt='dashboard images' />
         )}
      </div>
      <div className='flex flex-col items-start gap-y-1'>
          <div className='font-bold '>{amount}</div>
          <div className='text-[13px] text-gray-500'>{title}</div>
      </div>
    </div>
  )
}

export default CustomCard