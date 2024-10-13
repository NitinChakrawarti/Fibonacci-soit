import React from 'react'
import Teamcomponent from '../components/teamcomponent'
import logo from '../assets/logofibo.png'
const Team = () => {
  return (
    <>
      <div className="pt-40 pb-18">
        <div className="px-10 lg:px-36 flex lg:flex-row flex-col justify-between">
          <div className="">
            <h1 className=" sticky top-[6.0vmax] font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-white bg-black z-30">
              Meet Our Team
            </h1>
            <div className="sticky top-[12.0vmax] z-10 ">
              <img className="" src={logo} />
            </div>
          </div>
          <div className="flex lg:justify-end lg:mt-20 mt-10 ">
            <div className="lg:w-[100%] w-[100%]">
              <Teamcomponent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;