import React from 'react'

const Sponsers = ({sponsers}) => {
  return (
    <div className="pt-20 lg:px-36 px-8">
      <h1 className="text-[3vmax] text-left font-bold text-primary ">Sponsors</h1>
      <div className="lg:flex flex-wrap justify-evenly  pt-10">
        {sponsers.map((sponser, index) => (
          <div key={index} className="flex pt-8 flex-col items-center">
            <img 
              src={sponser.logo} 
              alt={`${sponser.name} logo`} 
              className="max-h-32 object-contain rounded-full" 
            />
            <p className="text-center font-semibold pt-4 text-white mt-2">{sponser.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsers
