// Prizes.js
import React from 'react';

const Prizes = ({ prizes }) => {
    return (
        <div className="pt-20 lg:px-36 px-8">
            <h1 className="text-[3vmax] text-left font-bold text-primary ">Prizes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
                {prizes.map((prize, index) => (
                    <div key={index} className="bg_gradient hover:opacity-90 rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-black">{prize.title}</h2>
                     
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Prizes;
