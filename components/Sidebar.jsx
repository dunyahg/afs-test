import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'



function Sidebar() {
  return (
    <div className=' bg-primary-color h-screen py-6 overflow-y-auto overflow-x-hidden'>
        <div className='bg-white mx-6 py-4 shadow-sm rounded-xl mb-6'>
             <Image src='/images/logo.png' alt='logo' width={70} height={70} className='mx-auto' />
        </div>

        <div className='px-6'>
            <div className='py-3'>
            <SidebarMenuItem Img="/images/home.svg" title='Dashboard' url='/dashboard' />
            </div>
            <div className='py-3'>
            <SidebarMenuItem Img="/images/order.svg" title='Orders' url='/dashboard/orders' />
            </div>
            <div className='py-3'>
            <SidebarMenuItem Img="/images/motobike.svg" title='Riders' url='/dashboard/riders' />
            </div>
         
            <div className='py-3'>
            <SidebarMenuItem Img="/images/customer.svg" title='Customers' url='/customers' />
            </div>
            <div className='py-3'>
            <SidebarMenuItem Img="/images/rental.svg" title='Rentals' url='/rentals' />
            </div>
            <div className='py-3'>
            <SidebarMenuItem Img="/images/chat.svg" title='Customer support' url='/supports' />
            </div>
         
          
         
            
            
     


        </div>
        
    </div>
  )
}

export default Sidebar