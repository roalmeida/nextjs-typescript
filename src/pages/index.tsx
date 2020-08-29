import React from 'react'
import Head from 'next/head'

import Logo from '../assets/images/vercel.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <p className="p">NextJs application made with Typecript and SASS</p>
    </>
  )
}
