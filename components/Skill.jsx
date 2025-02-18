import React from 'react'
import Image from 'next/image'

export default function Skill() {
  return (
    <section className="skill">
        <div className="container">
            <div className="intro text-center">
                <h2 className='text-[#4070f4] bold border-b-[2px] inline-block border-[#4070f4]'>Skills</h2>
            </div>
            <div className="wrapper flex w-[calc(100%+30px)] ml-[-15px] mt-[30px] items-center">
                <div className="colTwo w-[calc(50%-30px)] mr-[30px]">
                    <div className="textWrap text-black">
                        <h3 className='bold'>Professional Skills</h3>
                        <p>I love to think outside the box and bring unique ideas to life through design, I have proficiency in HTML5, CSS3, <b>Tailwind</b> and JavaScript, <b>Next js(React js)</b> that ensure that my designs are not only beautiful but also functional. I prioritize the needs and preferences of users, conducting research to understand their behaviors and preferences.</p>
                        <div className="skillWithPer mt-[20px]">
                            <ul>
                                <li>
                                    <div className="item flex items-center justify-between text-black bg-white p-[10px] mb-[20px] border-b-[2px] border-[#4070f4] shadow">
                                        <div className="imgWithText w-[calc(100%-10%)] flex items-center">
                                            <div className="iconWrap mr-[20px] w-[20px] h-auto">
                                                <i class='bx bxl-html5 text-[30px]'></i>
                                            </div>
                                            <p className='bold'>HTML 5</p>
                                        </div>
                                        <div className="percentage w-[10%]">
                                            <p>95%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item flex items-center justify-between text-black bg-white p-[10px] mb-[20px] border-b-[2px] border-[#4070f4] shadow">
                                        <div className="imgWithText w-[calc(100%-10%)] flex items-center">
                                            <div className="iconWrap mr-[20px] w-[20px] h-auto">
                                                <i class='bx bxl-html5 text-[30px]'></i>
                                            </div>
                                            <p className='bold'>CSS 3</p>
                                        </div>
                                        <div className="percentage w-[10%]">
                                            <p>90%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item flex items-center justify-between text-black bg-white p-[10px] mb-[20px] border-b-[2px] border-[#4070f4] shadow">
                                        <div className="imgWithText w-[calc(100%-10%)] flex items-center">
                                            <div className="iconWrap mr-[20px] w-[20px] h-auto">
                                                <i class='bx bxl-html5 text-[30px]'></i>
                                            </div>
                                            <p className='bold'>Next JS</p>
                                        </div>
                                        <div className="percentage w-[10%]">
                                            <p>70%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item flex items-center justify-between text-black bg-white p-[10px] mb-[20px] border-b-[2px] border-[#4070f4] shadow">
                                        <div className="imgWithText w-[calc(100%-10%)] flex items-center">
                                            <div className="iconWrap mr-[20px] w-[20px] h-auto">
                                                <i class='bx bxl-html5 text-[30px]'></i>
                                            </div>
                                            <p className='bold'>Java Scripts</p>
                                        </div>
                                        <div className="percentage w-[10%]">
                                            <p>70%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item flex items-center justify-between text-black bg-white p-[10px] mb-[20px] border-b-[2px] border-[#4070f4] shadow">
                                        <div className="imgWithText w-[calc(100%-10%)] flex items-center">
                                            <div className="iconWrap mr-[20px] w-[20px] h-auto">
                                                <i class='bx bxl-html5 text-[30px]'></i>
                                            </div>
                                            <p className='bold'>Tailwind</p>
                                        </div>
                                        <div className="percentage w-[10%]">
                                            <p>95%</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="colTwo w-[calc(50%-30px)] mr-[30px]">
                    <div className="imgWrapper ml-auto mr-auto max-w-[350px] ">
                        <Image src={'/skill/work3.jpg'} alt='Self pic' className='rounded-[5px]' width={500} height={350}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
