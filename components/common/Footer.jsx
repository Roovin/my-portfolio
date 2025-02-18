import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='relative'>
            <div className="container">
                <div className="wrapper text-center max-w-[300px] mr-auto ml-auto">
                    <div className={`logoWrap relative`}>
                        <Link href={`/`} className='emptyLink'>.</Link>
                        <Image src={'/logo/logo.png'} width={200} height={50} />
                    </div>
                    <div className="socialIcon">
                        <ul className='flex items-center'>
                            <li className='mr-[10px]'>
                                <div className={` iconWrap`}>
                                    <Link href={`/`} className='emptyLink'>.</Link>
                                    <i className='bx bxl-linkedin text-[30px]' ></i>
                                </div>
                            </li>
                            <li>
                                <div className="iconWrap">
                                    <i class='bx bxl-github text-[30px]'></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
