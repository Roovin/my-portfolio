import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='relative inline-block w-full bg-[#0e2431] py-[50px]'>
            <div className="container">
                <div className="wrapper text-center max-w-[300px] mr-auto ml-auto">
                    <div className={`logoWrap relative inline-block`}>
                        <Link href={`/`} className='emptyLink'>.</Link>
                        <Image src={'/logo/logo.png'} width={200} height={50} />
                    </div>
                    <div className="socialIcon mt-[30px] relative">
                        <ul className='flex items-center text-black justify-center'>
                            <li className='mr-[10px] relative'>
                                <div className={` iconWrap`}>
                                    <Link href={`/`} className='emptyLink'>.</Link>
                                    <i className='bx bxl-linkedin text-[30px]' ></i>
                                </div>
                            </li>
                            <li className='relative'>
                                <div className="iconWrap">
                                    <Link href={`/`} className='emptyLink'>.</Link>
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
