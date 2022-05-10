import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Amazing Graph" />
        <meta name="author" content="Douglas Matos da Silva" />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta property="og:site_name" content="Amazing Graph" />
        <meta name="og:title" content="Amazing Graph" />
        <meta property="og:type" content="website" />
        <title>Amazing Graph</title>
      </Head>

      <Component {...pageProps} />
    </ div>
  )
}

export default MyApp
