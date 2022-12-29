import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Featured from './components/Featured'
import ProductList from './components/ProductList'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomato</title>
        <meta name="description" content="Best online food ordering web-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </>
  )
}
