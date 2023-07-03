import React from 'react'
import Sidebar from './Sidebar'
import SubTopbar from './SubTopbar'


function DashboardLayout({children}) {
  return (
    <div className='flex justify-between h-screen'>
          <div className='hidden md:flex w-[250]'>
             <Sidebar />
          </div>
          <div className='flex-1 bg-gray-100 h-screen'>
            {children}
          </div>
    </div>
  )
}

export default DashboardLayout