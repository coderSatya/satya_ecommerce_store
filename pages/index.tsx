import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Products from '@/components/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
   <Banner />
   <Products />
   </div>
  )
}
