import React from 'react'
import Image from 'next/image'
import headerStyle from '../../styles/header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={`${headerStyle.header}`}>
        <div className="container">
            <div className={`main-nav ${headerStyle.mainNav}`}>
                <div className={`${headerStyle.logoWrap} `}>
                    <Link href={`/`} className='emptyLink'>.</Link>
                    <Image src={'/logo/logo.png'} width={200} height={50} />
                </div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link href="" >Home</Link>
                        </li>
                        <li>
                            <Link href="">About</Link>
                        </li>
                        <li>
                            <Link href="">Skills</Link>
                        </li>
                        <li>
                            <Link href="">Work</Link>
                        </li>
                        <li>
                            <Link href="">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
