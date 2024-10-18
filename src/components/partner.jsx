import React from 'react';

const Partners = ({ partners }) => {
  return (
    <div className="pt-20 lg:px-36 px-8">
      <h1 className="text-[3vmax] text-left font-bold text-primary ">Community Partners</h1>
      <div className="flex flex-wrap gap-10 justify-evenly lg:gap-0 pt-10">
        {partners.map((partner, index) => (
          <div key={index} className="flex pt-8 flex-col items-center">
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="max-h-24 object-contain rounded-lg" 
            />
            <p className="text-center text-white pt-4 mt-2">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
