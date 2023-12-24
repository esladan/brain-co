import { Roboto_Flex } from 'next/font/google'
import './globals.css'

const roboto_flex = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Brian.Co ',
  description: 'Your AI companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <link rel="icon" href="./images/logo.ico" sizes="any" />
      <body className={roboto_flex.className}>{children}</body>
    </html>
  )
}
