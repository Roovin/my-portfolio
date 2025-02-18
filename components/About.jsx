import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
   <section className="about">
    <div className="container">
        <div className="intro text-center">
            <h2 className='text-[#4070f4] bold border-b-[2px] inline-block border-[#4070f4]'>About</h2>
        </div>
        <div className="wrapper flex w-[calc(100%+30px)] ml-[-15px] mt-[30px] items-center">
            <div className="colTwo w-[calc(50%-30px)] mr-[30px]">
                <div className="imgWrapper ml-auto mr-auto max-w-[350px] ">
                    <Image src={'/banner/self-pic.jpg'} alt='Self pic' className='rounded-[5px]' width={300} height={500}/>
                </div>
            </div>
            <div className="colTwo w-[calc(50%-30px)] mr-[30px]">
                <div className="textWrap">
                    <h3>I'm Roovin</h3>
                    <p>As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}
