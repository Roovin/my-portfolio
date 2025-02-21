import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';
import BannerStyle from '../styles/banner.module.css';
// import 'boxicons';

export default function HeroBanner() {
  return (
   <section className={`heroBanner ${BannerStyle.heroBanner}`}>
    <div className="container">
        <div className={`${BannerStyle.wrapper} wrapper`}>
          <div className={`colOne ${BannerStyle.colOne}`}>
            <h1 className='font-bold text-black'>Hi, <br/>
                I'm <span className="text-[#4070f4]">Roovin</span><br/>
                Web Frontend Developer</h1>
            <div className="linkWrap">
              <Link href="" className={`${BannerStyle.defaultBtn} font-bold`}>Contact Us</Link>
            </div>
            <div className={`socialIconWrap ${BannerStyle.socialIconWrap}`}>
              <ul>
                <li>
                  <div className={`${BannerStyle.iconWrap} iconWrap text-black`}>
                    <Link href={`/`} className='emptyLink'>.</Link>
                    <i className='bx bxl-linkedin text-[30px]' ></i>  
                  </div>
                </li>
                <li>
                  <div className={`${BannerStyle.iconWrap} iconWrap text-black`}>
                    <Link href={`/`} className='emptyLink'>.</Link>
                    <i class='bx bxl-github text-[30px]' ></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`colOne ${BannerStyle.colOne}`}>
            <div className={`imageWrapper ${BannerStyle.imageWrapper}`}>
              <Image src={'/banner/self-pic.jpg'}  width={200} height={200} alt='Self Image' />
            </div>
          </div>
        </div>
    </div>
   </section>
  )
}
