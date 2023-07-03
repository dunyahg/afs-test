 'use client'
 
 import React from 'react'
import Swal from 'sweetalert2'

const defaultState = {
    messageHistory: []
}

const SweetAlertContext = React.createContext([])

export const SweetAlertProvider = ({children}) => {

    const [state, setState] = React.useState(defaultState)

    const showMessage = (title, message, type='success') => {
        return Swal.fire(title, message, type)
    }

    const showDialogYesOrNo = (sweetAlertOptions, callback=undefined ) => {

        Swal.fire(sweetAlertOptions).then((result) => {
             console.log("Result : ", result)
            if(!(typeof callback == "undefined") && result.value) {
                callback()
            }
        })
    }


    return (
        <SweetAlertContext.Provider value={{ state, showMessage, showDialogYesOrNo, setState }}>
            {children}
        </SweetAlertContext.Provider>
    )
}

export default SweetAlertContext