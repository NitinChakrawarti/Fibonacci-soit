import React from 'react'
import heroimg from '../assets/pngwing.com.png'
import Typewriter from 'typewriter-effect';
import ScrollToTop from "react-scroll-to-top";
import { Fade, Slide } from "react-awesome-reveal";

const Main_home = () => {
    return (
        <>
            <ScrollToTop smooth color="#55e6a4 " />
            <div id='mainsection' className=' bg-black  text-text_light lg:px-32 px-10 pt-32 md:pt-40 flex md:flex-row md:justify-center md:gap-20  lg:justify-between flex-col flex-wrap justify-between md:pb-10 pb-10 overflow-hidden'>
                <div className='flex justify-centre  text-3xl text-white pt-[8vmax] flex-col'>
                    <Fade direction="left" duration="2000">
                        <div className='px-6'>
                            <h1 className="text-[6vmax] font-bold leading-none text-primary pb-2">FIBONACCI</h1>
                            <span className="text-[3vmax] font-medium leading-none "> SOIT RGPV </span>
                        </div>
                    </Fade>
                    <Slide direction="left" duration="2000">
                        <div className='px-6 md:w-fit text-[3.4vmax] font-bold md:mt-10 lg:mt-6'>
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
                    <img className="relative  z-[10] h-[35vmax] w-auto" src={heroimg} />
                </Fade>
            </div>
        </>
    )
}

export default Main_home
