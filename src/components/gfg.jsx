import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Gfg = () => {
    return (
        <div className='text-text_light  mt-10  md:pb-4 md:mt-16'>
            <div className=' px-8 lg:px-36  text-3xl bg-primary_bg opacity-75 text-white pt-[2vmax] lg:flex-row flex-col w-[100%] gap-6'>
                <div className="flex flex-col justify-start">
                    <h1 className="font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-primary">
                        GeeksforGeeks
                    </h1>
                    <p className='text-[1.4vmax] text-primary/80 pt-4 md:pt-8 lg:pt-4 pb-8'>Sparking innovation through code! In partnership with Geeks for Geeks!</p>
                </div>
                <div className="flex w-[100%] gap-20 lg:justify-between lg:flex-row md:items-center lg:items-start  flex-col-reverse ">

                    <div className="w-[100%] lg:w-[50%] flex flex-col lg:items-start md:items-center ">
                        <Fade duration={2000}  >
                            <p className='text-[1.9vmax]  md:text-[1.3vmax] md:text-center  lg:text-left md:leading-10 leading-7'>
                                {/* GeeksforGeeks is a leading platform that provides computer science
                                resources and coding challenges for programmers and technology
                                enthusiasts. With a strong emphasis on enhancing coding skills and
                                knowledge, it has become a trusted destination for over 12 million plus
                                registered users worldwide. */}
                                GeeksforGeeks is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts. With a vision to bridge the gap between theory and individual GeeksforGeeks upholds its motto:
                            </p>
                        </Fade>
                        <Fade duration={2000}   >
                            <div className="flex gap-4 mt-8 md:mt-0">
                                <button className="  md:mt-10 w-[9vmax] font-bold text-[1.2vmax] text-text_dark bg-primary/90 flex flex-col items-center md:leading-10 leading-7 py-0 md:pt-3 rounded-lg border-[1px] border-text_white  lg:pt-1 hover:text-white hoverBtn">
                                    <Link to='https://chat.whatsapp.com/FtTMIleQ34e5ITHF5JUv4w' target='_blank'> Join Now </Link>
                                </button>
                                <button className=" md:mt-10  font-bold text-[1.2vmax] text-primary  flex flex-col items-center md:leading-10 leading-7 py-0 lg:py-1 rounded-lg border-[1px] hover:text-white border-text_white lg:pt-1">
                                    <Link to='https://www.geeksforgeeks.org/ ' target='_blank' className='flex items-center gap-2'> Learn More  <span className="text-white"><FaArrowRight /></span>
                                    </Link>
                                </button>
                            </div>
                        </Fade>
                    </div>

                    <div className="flex flex-row ">
                        <Fade duration={2000} >
                            <img className="w-[25vmax] rounded-md" src="https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg" />
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gfg
