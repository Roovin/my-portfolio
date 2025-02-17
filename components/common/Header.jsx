import React from 'react'
import Image from 'next/image'
import headerStyle from '../../styles/header.module.css'

export default function Header() {
  return (
    <header className={`${headerStyle.header}`}>
        <div className="container">
            <div className={`main-nav ${headerStyle.mainNav}`}>
                <div className="logo-wrap">
                    <Image src={'/'} width={200} height={50} />
                </div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <a href="" >Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Skills</a>
                        </li>
                        <li>
                            <a href="">Work</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}
