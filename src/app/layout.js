import { Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tharun Balaji | Portfolio',
  description: 'Designed and Developed with love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
