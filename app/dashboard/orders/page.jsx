'use client'

import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { useSweetAlert } from '@/hooks/useSweetAlert'
import sweetAlertOptions from '@/utils/sweetAlertOptions'

function Orders() {

  const sweetAlert = useSweetAlert()

  React.useEffect(() => {
    sweetAlert.showDialogYesOrNo(Object.assign({
      text: "Do you know what you're doing????!!!",
      type: "danger"
    }, sweetAlertOptions), () => {
      sweetAlert.showMessage("Nice", "one", "warning")
    })
  }, [])
  return (
     <DashboardLayout>
        <h2> Order page</h2>
     </DashboardLayout>
  )
}

export default Orders