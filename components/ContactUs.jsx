import React from 'react'
import Link from 'next/link'
import BannerStyle from '../styles/banner.module.css';

export default function ContactUs() {
  return (
    <section className="conatctUs">
      <div className="container">
        <div className="intro text-center">
          <h2 className='text-[#4070f4] bold border-b-[2px] inline-block border-[#4070f4]'>Contact Us</h2>
        </div>
        <div className="formWrapper max-w-[300px] ml-auto mr-auto mt-[50px]">
          <form action="">
            <div className="item mb-[20px]">
              <label htmlFor=""></label>
              <input type="text" name='name' placeholder='Name' className='border-[2px] border-black w-[100%] rounded-[5px] p-[10px] focus:border-black' />
            </div>
            <div className="item mb-[20px]">
              <label htmlFor=""></label>
              <input type="email"  placeholder='Email' className='border-[2px] border-black w-[100%] rounded-[5px] p-[10px] focus:border-black' />
            </div>
            <div className="item mb-[20px]">
              <label htmlFor=""></label>
              <textarea name="" id="" placeholder='Massage...' className='border-[2px] border-black w-[100%] rounded-[5px] p-[10px] focus:border-black'></textarea>
            </div>
            <div className="btn ">
              <button className={`defaultBtn`}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
