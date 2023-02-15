import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <h1 className='text-xl p-4'>Alvaro NextJs 13 🔥</h1>
    </main>
  )
}
