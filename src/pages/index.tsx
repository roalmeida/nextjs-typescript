import Head from 'next/head'
import SVG from 'react-inlinesvg'

import logo from '../assets/images/nextjs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SVG src={logo} />
      <p className="p">NextJs application made with Typecript and SASS</p>
    </>
  )
}
