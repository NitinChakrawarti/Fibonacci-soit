import React from 'react'
import { useState } from 'react';
import Flipcard from './flipcard';
import { Fade } from 'react-awesome-reveal';

// import resources from '../assets/pngwing.com (1).png'
// import networking from '../assets/networking.png'
// import exposure from '../assets/pngwing.com (2).png'
// import skilldevelopment from '../assets/skill develpopment.png'
// import collarabativeProjects from '../assets/pngwing.com (2).png'
const Benefits = () => {

    return (
        <div className='text-text_light mt-16 md:mt-16 flex justify-between'>
            <div className='px-8 lg:px-36 h-fit text-3xl bg-black opacity-75 text-white pt-[-2vmax] md:flex-row  flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        Benefits for Members
                    </h1>
                    <p className='text-[1.4vmax] text-primary/80 pt-4 md:pt-8 lg:pt-4 pb-8'>Unlock unique advantages with Fibonacci SOIT</p>
                </div>
                <Fade duration="2000" > 
                <div className="pt-4 md:pt-16 flex gap-8  overflow-hidden relative">

                    <Flipcard />
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Benefits
