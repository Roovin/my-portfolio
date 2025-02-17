import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="main-nav">
                <div className="logo-wrap">
                    <Image src={'/'} width={200} height={200} />
                </div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <a href="">Home</a>
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
