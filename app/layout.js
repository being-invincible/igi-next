import './globals.css'
import { Inter } from 'next/font/google'

import { Roboto } from "next/font/google";

// const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IGI',
  description: 'Imran Gulf Industries. F. Co',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
