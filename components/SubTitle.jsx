import React from 'react'

function SubTitle({title, text}) {
  return (
    <div className='mb-4'>
             <h2 className='text-gray-700 font-semibold mb-1'> {title}</h2>
              <p className='text-gray-500 text-[12px]'>{text}</p>
     </div>
  )
}

export default SubTitle