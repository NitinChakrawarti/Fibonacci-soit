import React from 'react'
import Teamcomponent from '../components/teamcomponent'
import logo from '../assets/logofibo.png'
import ScrollToTop from 'react-scroll-to-top'
const Team = () => {
  return (
    <>
      <div className=" pb-18">
      <ScrollToTop smooth color="#55e6a4 " />

        <div className="px-10 lg:px-36 flex lg:flex-row flex-col justify-between">
          <div className="">
            <h1 className=" sticky top-[6.0vmax] font-bold underline underline-offset-8  decoration-text_light text-[3vmax] text-white bg-bg_Primary z-20">
              Meet Our Team
            </h1>
            <div className="sticky top-[12vmax] z-10 ">
              <img className="md:h-auto h-[16vmax] md:pt-auto mt-8 " src={logo}  />
            </div>
          </div>
          <div className="flex lg:justify-end lg:mt-20 mt-10 ">
            <div className="lg:w-[100%] w-[100%] flex flex-col lg:items-end">
              <Teamcomponent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;