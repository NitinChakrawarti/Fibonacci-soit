import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const Gfg = () => {
    return (
        <div className='text-text_light mt-10 md:mt-16 flex justify-between pb-10'>
            <div className=' px-10 lg:px-36  lg:h-[30vmax] text-3xl bg-black opacity-75 text-white pt-[-2vmax] lg:flex-row flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        GeeksforGeeks
                    </h1>
                    <p className='text-[1.4vmax] text-primary/80 pt-4 md:pt-8 lg:pt-4 pb-8'>Sparking innovation through code! In partnership with Geeks for Geeks!</p>
                </div>
                <div className="flex lg:w-[80%] w-[100%] gap-20 lg:gap-48 lg:flex-row md:items-center flex-col-reverse ">

                    <div className="w-[100%] lg:w-[50%] flex flex-col items-center">
                        <Fade duration={2000}  >
                            <p className='text-[1.9vmax] md:text-[1.3vmax]  text-center md:leading-10 leading-7'>
                                GeeksforGeeks is a leading platform that provides computer science
                                resources and coding challenges for programmers and technology
                                enthusiasts. With a strong emphasis on enhancing coding skills and
                                knowledge, it has become a trusted destination for over 12 million plus
                                registered users worldwide.
                            </p>
                        </Fade>
                        <Fade duration={2000}   >
                            <button className=" hover:drop-shadow-custom-glow mt-8  md:mt-10 w-[9vmax] font-bold text-[1.2vmax] text-text_dark bg-primary/90 flex flex-col items-center md:leading-10 leading-7 py-0 md:py-1 rounded-lg border-[1px] border-text_white hover:text-white md:pt-3 lg:pt-1">
                                <Link to='https://www.geeksforgeeks.org/ ' target='_blank'> Learn More </Link>
                            </button>
                        </Fade>
                    </div>

                    <div className="flex flex-col justify-center gap-4">

                        <Fade duration={2000} >
                            <img className="h-[150px] rounded-md" src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" />
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gfg
