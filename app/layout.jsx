import './globals.css'
import { Inter } from 'next/font/google'
import Toaster from "@/components/Toaster";
import 'react-toastify/dist/ReactToastify.css';
import { SweetAlertProvider } from '@/context/sweetalert.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AFS Dashboard',
  description: 'Delivery service',
}

export default function RootLayout({
  children,
} ) {
  return (
    <html lang="en">    
      <body className={inter.className}>
        <SweetAlertProvider>
        <Toaster />
        {children}
        </SweetAlertProvider>
        
      </body>
    </html>
  )
}
