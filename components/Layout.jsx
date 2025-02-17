// import { main } from 'cli'
import React from 'react'
import Header from './common/Header'

export default function Layout({children, dir}) {
  return (
    <>
    <Header />
    <main dir={dir}>
        { children }
    </main>
    </>
  )
}
