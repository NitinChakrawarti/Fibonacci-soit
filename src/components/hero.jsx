import React from 'react'
import heroimg from '../assets/pngwing.com.png'
import Typewriter from 'typewriter-effect';
import ScrollToTop from "react-scroll-to-top";
import { Fade, Slide } from "react-awesome-reveal";
import soitLogo from '../assets/soit_logo.webp'

const Main_home = () => {
    return (
        <>
            <ScrollToTop smooth color="#55e6a4 " />
            <div id='mainsection' className='text-text_light lg:px-32 px-10 pt-10 md:pt-16 flex md:flex-row items-center md:gap-20 gap-10 lg:justify-between flex-col flex-wrap  justify-center md:pb-10 pb-10 overflow-hidden'>
                <div className='flex md:justify-center   text-3xl text-white pt-[1vmax] flex-col'>
                    <Fade direction="left" duration="2000">
                        <div className='md:px-6'>
                            <div className='flex items-center flex-row gap-4'>
                                <img src={soitLogo} className='h-20 object-cover' />
                                <span className="text-[2vmax] font-bold leading-none "> SOIT RGPV, Bhopal</span>
                            </div>
                            <h1 className="text-[6vmax] font-bold pt-4 leading-none text-primary pb-2">FIBONACCI</h1>

                        </div>
                    </Fade>
                    <Slide direction="left" duration="2000">
                        <div className='md:px-6 md:w-fit text-[3.4vmax] font-bold md:mt-10 lg:mt-6'>
                            <Typewriter
                                options={{
                                    strings: ['Skill Development', 'Networking', 'Exposure', 'Opportunities'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <div className="h-[3px] w-[50%] bg-primary mt-40 lg:block hidden"></div>
                            <p className='text-[1.5vmax] lg:block hidden'>Learn, Practice and Excel!</p>
                        </div>
                    </Slide>
                </div>
                <Fade duration={3000} direction='right'>
                    <img className="relative sm:hidden md:flex flex z-[10] h-[35vmax] w-auto" src={heroimg} />
                </Fade>
            </div>
        </>
    )
}

export default Main_home
