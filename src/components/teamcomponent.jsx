import React from 'react'
import TeamData from '../data/teamdata'
import { Link } from 'react-router-dom'
import { Fade, Slide } from "react-awesome-reveal";

const Teamcomponent = () => {
  return (
    <>
      {TeamData.map((data, key) => (
        <>
          <Fade direction="up" triggerOnce="true" duration="1000" >
            <div key={key} className="w-[100%] py-6 bg-[#302f2f] flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start lg:px-4 items-center rounded-xl lg:gap-0 -gap-10 mb-10">
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
                  <Link to={data.url} target="_blank">
                    <span className=" inline  px-4 py-2 bg-primary/60 glow_btn_hover  rounded-lg cursor-pointer md:text-[1.3vmax] lg:text-[1.3vmax] text-[black] font-bold">
                      Know More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ))}
    </>
  )
}

export default Teamcomponent
