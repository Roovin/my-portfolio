import React from 'react'
import Image from 'next/image'
import BannerStyle from '../styles/banner.module.css';

export default function HeroBanner() {
  return (
   <section className={`heroBanner ${BannerStyle.heroBanner}`}>
    <div className="container">
        <div className={`${BannerStyle.wrapper} wrapper`}>
          <div className={`colOne ${BannerStyle.colOne}`}>
            <h1>Hi, <br/>
                I'm <span className="text-[#4070f4]">Roovin</span><br/>
                Web Designer</h1>
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
