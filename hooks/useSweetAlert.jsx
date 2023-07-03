import { useContext } from 'react'
import SweetAlertContext from '@/context/sweetalert.context'

export const useSweetAlert = () => useContext(SweetAlertContext)
