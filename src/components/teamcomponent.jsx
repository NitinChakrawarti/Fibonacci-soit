import React from 'react'
import TeamData from '../data/teamdata'
import { Link } from 'react-router-dom'
import { Fade, Slide } from "react-awesome-reveal";
import { FaArrowRight } from 'react-icons/fa'
const Teamcomponent = () => {
  return (
    <>
      {TeamData.map((data, key) => (
        <>
          {/* <Fade direction="up" triggerOnce="true" duration="1000" key={key} > */}
            <div className="w-[90%] hover:border-primary duration-300 py-6 flex lg:flex-row border-b-2 flex-col lg:justify-start justify-center lg:items-start lg:px-4 items-center rounded-xl lg:gap-0 -gap-10 mb-20">
              <div className="w-[20vmax]">
                <img className="h-[20vmax] lg:h-[10vmax] my-8 mg:mx-8 rounded-lg" src={data.image} />
              </div>
              <div className=" flex flex-col gap-8 items-center lg:items-start ">
                <div className=" lg:pt-5  text-white lg:text-start text-center">
                  <h1 className="text-[3vmax] lg:text-[2vmax] font-bold">{data.name}</h1>
                  <p className="lg:text-[1.5vmax] md:text-[1.3vmax] font-bold opacity-80">{data.role}</p>
                  <p className="px-4 lg:px-0 font-bold opacity-80 text-[1.3vmax] md:text-[1vmax]">{data.year}</p>
                </div>
                <div className="">
                  <Link to={data.url} target='_blank' className=' text-white  underline-offset-8 hover:text-primary flex items-center gap-2'> Know More  <span className="text-white"><FaArrowRight /></span>
                  </Link>

                </div>
              </div>
            </div>
          {/* </Fade> */}
        </>
      ))}
    </>
  )
}

export default Teamcomponent
