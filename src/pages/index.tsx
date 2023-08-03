import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import Header from '../component/Header'
import SideMenu from '../component/SideMenu/SideMenu'
import { useSession } from 'next-auth/react' 
import LoginComp from '../component/Login/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } =useSession()

  return (
    <>
      <Head>
        <title>Modern DashboardUI</title>
        <meta name="description" content="Data dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <Header/>
        { 
          session && (
            <>
              <SideMenu/>
              <Dashboard/>
            </>
        ) 
      }
        <LoginComp/>
      </main>
    </>
  )
}
