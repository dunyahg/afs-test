'use client'
import React,{useEffect,useState} from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { toast } from 'react-toastify'
import {AdminUserServiceClient} from "@/protos/admin_service_grpc_web_pb"
import common from '@/utils/index'
import SubTopbar from '@/components/SubTopbar'
import SubTitle from '@/components/SubTitle'
import {FiSearch} from 'react-icons/fi'
import DataTable from "react-data-table-component";
import { useRouter } from 'next/navigation'
import styled from 'styled-components';


function Riders() {
   const client = new AdminUserServiceClient(common.BaseUrl,
    null,
    null);

    const [riderData, setRiderData] = useState([])
    const [riderDataHistory, setRiderDataHistory] = useState([])
    const [showLoader, setShowLoader] = useState("");

    const router = useRouter()

   useEffect(() => {

    const token = sessionStorage.getItem("token")
    if(!token) {
       router.push("/")
    }else {
      GetRiders();
    }
   }, [])


   const viewRiderClickHandler = (e,rowId) => {
       console.log("row id : ", rowId)
   }

   const columns = [
      {
        name: "Name",
        selector: (row) => row.getFullName(),
        sortable: true,
      },
      {
        name: "Phone number",
        selector: (row) => row.getPhoneNumber(),
      },
      {
        name: "Status",
        cell: (row) => (
          <div className="flex items-center justify-between w-full">
            <button
              onClick={(e) => clickHandler(e, row.id)}
              className="bg-pending-bg-color px-4 py-2 text-pending-color rounded-full"
            >
              Pending
            </button>
          </div>
        ),
      },
      {
        name: "",
        cell: (row) => (
            <div className="px-1">
              <a
                onClick={(e) => viewRiderClickHandler(e, row.getId())}
                className=" px-4 py-2 text-view-color rounded-lg font-bold cursor-pointer"
              >
                View details
              </a>
            </div>
        ),
      }
   ]


  const GetRiders = () => {
         const request = new proto.Empty();

    let stream =  client.get_new_riders(request,common.metadata)
     stream.on("data",(response) => {
           setShowLoader(true)
            setRiderData(response.getAccountsList())
            setRiderDataHistory(response.getAccountsList())
            setShowLoader(false)
     })

  }

  const getFilteredData = (event) => {

    const searchResult = riderDataHistory.filter((row) => {
      return (
        row.getPhoneNumber().toLowerCase().includes(event.target.value.toLowerCase()) 
      );
    });

     setRiderData(searchResult)
  }

  return (
    <DashboardLayout>
      <SubTopbar title="Approvals" />
      <div className='px-8 py-8 h-screen overflow-x-auto'>
         <SubTitle title="Approvals" text="List of all riders who need review and approvals" />

        <div className=' flex bg-white items-center justify-end py-4 px-8 mb-6'> 
            <div className='flex bg-gray-100 items-center justify-center py-1 pl-2 pr-1 gap-x-1 rounded-md'>
              <FiSearch className='h-6 w-6 text-gray-300' />
              <input type='text' className='bg-gray-100 outline-none text-xs text-gray-600 w-full' placeholder='search by phone number' onChange={getFilteredData} />
            </div>
        </div>

        <div className='flex items-center'>
             <DataTable columns={columns} data={riderData} selectableRows="true" striped customStyles={{
                rows: {
                    style: {
                        border: 'none !important'
                    },
                },
            }} 
            // pagination
            // paginationServer
            // paginationTotalRows={riderData.length}
            // paginationPerPage={10}
            // paginationComponentOptions={{
            //   rowsPerPageText: 'Rows per page:',
            //   rangeSeparatorText: 'of',
            //   noRowsPerPage: false,
            //   selectAllRowsItem: false,
            //   selectAllRowsItemText: 'All',
            // }}
            />
         </div>

        
      </div>

    </DashboardLayout>
  )
}

export default Riders