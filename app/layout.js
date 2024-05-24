import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.variable + ' ' + dm_sans.variable}>
        {children}
      </body>
    </html>
  )
}