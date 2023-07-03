'use client'

import React,{useEffect, useState} from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { toast } from "react-toastify";
import SubTopbar from '@/components/SubTopbar';
import CustomCard from '@/components/CustomCard'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SubTitle from "@/components/SubTitle"
import {Line} from 'react-chartjs-2';
import data from '@/utils/LineChartData'
import common from '@/utils/index'
import {AdminAuthenticationServiceClient, AdminStatsServiceClient} from '@/protos/admin_service_grpc_web_pb'

function Dashboard() {
  const router =useRouter()
  useEffect(() => {
         const token = sessionStorage.getItem("token")
          if(!token) {
             router.push("/")
          }
          else{
            currentUserInfo()
            getStatisticsFromServer()
          }
  }, [])


  const chartOptions = {
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            display: false, // Hide the y-axis labels
          },
        }
    },
  };

  const [text,setText] = useState("")

  const client = new AdminAuthenticationServiceClient(
    common.BaseUrl,
    null,
    null
  );

  const clientStat = new AdminStatsServiceClient(common.BaseUrl,null,null)

  const currentUserInfo = () => {

    const request = new proto.common.Empty();

    client.get_current_admin(request,common.metadata, (error, response) => {

      if(error) {
        console.log("error : ", error)
        return;
      }
       sessionStorage.setItem("AdminType", response.getUsername())
        setText("Hi "+response.getFullName()+", Welcome back to AFS Dashboard")

    })
        
  }


  const getStatisticsFromServer = () => {
        
     const request = new proto.common.Empty();
    const stream =  clientStat.get_stats(request, common.metadata)
     

      stream.on("data", (response) => {
            console.log("response : ", response)
      })

      stream.on("error", (error) => {
          console.log("errror : ", error)
      })

      stream.on("status", (status) => {
          console.log("status : ", status)
      })
  }

    const moveToRiderPage = () => {
        router.push("/dashboard/riders")
    }

  return (
    <div className='h-screen overflow-y-auto bg-gray-100 md:overflow-hidden'>
        <DashboardLayout>
            <SubTopbar title='Dashboard' />

           <div className='px-8 py-8 h-screen md:overflow-x-auto'>
              <SubTitle title="Dashboard" text={text}/>
              {/* flex flex-col gap-y-4 md:flex-row  items-center justify-between gap-x-4 mb-5 */}
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                  <CustomCard Img='/images/totalorder.svg' amount='300,0000' title='Total orders' />
                  <CustomCard Img='/images/totalcustomer.svg' amount='200,0000' title='Total orders' />
                  <CustomCard Img='/images/totalriders.svg' amount='250,0000' title='Total orders' />
                  <CustomCard Img='/images/totalrental.svg' amount='300,0000' title='Total orders' /> 
             </div>
              
              <div className='flex items-start justify-between px-4 py-4 pt-3 border-2 border-blue-color bg-blue-100 rounded-2xl cursor-pointer mb-10' onClick={moveToRiderPage}>
                  <div className='flex flex-col gap-y-1'>
                      <h2 className='text-sm font-semibold text-blue-color'> New Riders</h2>
                      <p className='text-[12px] text-gray-500'>Review Applicants</p>
                  </div>
                  <div>
                    <Image src='/images/arrow.png' height={15} width={15} alt='arrow' />
                  </div>
              </div>

              <div className='flex flex-col gap-y-4 md:flex-row items-center justify-between gap-x-5 mb-20'>
                  <div className='card w-full md:w-2/3 lg:w-3/5  '>
                       <h2 className='header-two'>Order chart for the week</h2>
                       <Line
                          data={data}
                          width={400}
                          height={160}
                          options={chartOptions}
                        />
                
                  </div>
                  <div className='card w-full md:w-1/3 lg:flex-1'>
                     <div className='flex items-center justify-between pb-8'>
                      <div className='flex flex-col gap-y-2 items-start justify-center'>
                      <h2 className='header-two '>Subscription packages</h2>
                      <p className='text-gray-400 text-xs'>Number of subscriptions paid by riders in a period</p>
                      </div>
                       <input type='date'  />

                     </div>
                     <div className='py-5'>
                       <div className='flex items-center justify-between pb-1'>
                         <p className='text-sm'>24 hour packages</p>
                         <p className='text-sm'>63,506</p>
                       </div>
                      <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-yellow-100">
                        <div className="flex flex-col justify-center overflow-hidden bg-yellow-500 w-[70%]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className=' py-5'>
                    <div className='flex items-center justify-between pb-1'>
                         <p className='text-sm'>24 hour packages</p>
                         <p className='text-sm'>63,506</p>
                       </div>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-purple-100">
                      <div className="flex flex-col justify-center overflow-hidden bg-progress-blue w-[45%]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                   <div className='pt-5'>
                   <div className='flex items-center justify-between pb-1'>
                         <p className='text-sm'>24 hour packages</p>
                         <p className='text-sm'>63,506</p>
                       </div>
                   <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-blue-100">
                      <div className="flex flex-col justify-center overflow-hidden bg-blue-500 w-[60%]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                   </div>
                   
                 
                  </div>
              </div>

           </div>
     
        </DashboardLayout>
    </div>
  )
}

export default Dashboard