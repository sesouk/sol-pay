import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Jada's Mochi Donuts</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
