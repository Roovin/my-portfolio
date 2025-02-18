// import { main } from 'cli'
import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function Layout({children, dir}) {
  return (
    <>
      <Header />
      <main className='h-full bg-[#f5f3f5] inline-block'>
        {children}
      </main>
      <Footer />
    </>
  )
}
