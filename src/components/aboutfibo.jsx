import React from 'react'
import logo from "../assets/fibologo.png";
import { IoMdArrowDropright } from "react-icons/io";
import { Fade } from 'react-awesome-reveal';
const Aboutfibo = () => {
    return (
        <>
            <div className='text-text_light  md:pt-16 flex justify-between'>
                <div className='flex justify-start px-10 md:px-36  md:py-32 lg:py-16  text-3xl bg-primary opacity-75 text-white pt-[-2vmax]  w-[100%] items-center gap-6 lg:pb-10 md:pb-20 pb-10' >
                    <div className="lg:w-[80%] w-[100%]  pt-20 md:pt-0 flex gap-8 md:-gap-6 lg:flex-row flex-col">
                        <div className="lg:w-[40.0%] w-[100%] flex lg:flex-col flex-col-reverse gap-4 lg:gap-16 lg:items-center items-center">
                            <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-text_dark">
                                FIBONACCI
                            </h1>
                            <Fade duration={1000} >
                                <div className="">
                                    <img className="h-[200px] rounded-md" src={logo} />
                                </div>
                            </Fade>
                        </div>
                        <Fade duration={1000} >
                            <p className=' text-[1.9vmax] md:text-[1.3vmax] text-center md:leading-10 leading-7 pt-0 lg:pt-28 font-bold text-text_dark ' >
                                Fibonacci is a rapidly growing coding community dedicated to empower
                                developers and encouraging a culture of continuous learning.
                                Fibonacci aims to provide a comprehensive learning environment where
                                members can enhance their coding skills, exchange knowledge, and
                                solve complex algorithmic challenges.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutfibo
