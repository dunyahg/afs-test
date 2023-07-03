'use client'
import React, { useEffect } from 'react'
import { useRouter,usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';


function SidebarMenuItem({Img, title, url}) {


  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
     console.log(" react path : ", pathname)
  })

  return (
    <div className={pathname === url ? "bg-deep-red py-2 rounded-md" : ""}>
       <Link href={url}>
         <div className='flex items-center gap-x-3 text-white px-2'>
           <div>
           {Img && (
              // <Icon className='h-5 w-5 text-white ' />
              <Image src={Img} alt='' width={20} height={20} />
                )}
           </div>
           <div>
              <div>
              {title}
              </div>
             
          
           </div>
         </div>
           </Link>
    </div>
  )
}

export default SidebarMenuItem