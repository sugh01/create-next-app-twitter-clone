import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone by SG</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello from SG</h1>
        </div>
      </main>
    </>
  )
}
