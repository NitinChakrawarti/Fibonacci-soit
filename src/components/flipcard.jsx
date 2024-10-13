import React, { useState } from 'react';
import resources from '../assets/pngwing.com (1).png';
import networking from '../assets/networking-removebg-preview.png';
import skilldevelopment from '../assets/skill_develpopment-removebg-preview.png';
import collarabativeProjects from '../assets/pngwing.com (2).png';
import ReactCardFlip from 'react-card-flip';

const Flipcard = () => {
    const benefitsData = [
        {
            title: "Exclusive resource access",
            description: "Members gain entry to a wealth of coding resources, tutorials and tools tailored for skill enhancement.",
            image: resources
        },
        {
            title: 'Networking opportunities',
            description: 'Members can connect with like-minded individuals, share knowledge and collaborate on projects.',
            image: networking
        },

        {
            title: 'Skill development',
            description: 'Members can participate in coding contests, hackathons and coding challenges to enhance their skills.',
            image: skilldevelopment
        },
        {
            title: 'Collaborative projects',
            description: 'Members can collaborate on projects, work on real-world problems and build a strong portfolio.',
            image: collarabativeProjects
        }
    ];

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setFlippedIndex(index);
    };

    const handleMouseLeave = () => {
        setFlippedIndex(null);
    };

    return (
        <div className='overflow-hidden '>
            <div className='flex md:flex-row  flex-wrap items-start justify-center gap-2 md:gap-10'>
                {benefitsData.map((benefit, index) => (
                    <ReactCardFlip
                        key={index}
                        isFlipped={flippedIndex === index}
                        flipDirection="vertical"
                    >
                        <div
                            className="front flex flex-col justify-center items-center md:gap-6 gap-4 h-[24vmax] bg-text_light w-[18vmax] text-center rounded-md"
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            <img className="h-[12vmax]" src={benefit.image} alt={benefit.title} />
                            <h1 className='text-text_dark font-bold text-[1.5vmax] leading-6 md:text-[1.3vmax]'>{benefit.title}</h1>
                        </div>

                        <div
                            className="back h-[24vmax] py-4 md:px-2 bg-primary w-[18vmax] text-center flex flex-col gap-4 justify-evenly items-center rounded-md shadow-lg text-text_dark"
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className="w-[8vmax]" src={benefit.image} alt={benefit.title} />
                            <div className="flex flex-col gap-2">

                                <h1 className='font-bold text-[1.5vmax] md:leading-none leading-3'>{benefit.title}</h1>
                                <p className='md:text-[1.1vmax] text-[1.2vmax] px-2 md:leading-none leading-3  '>{benefit.description}</p>
                            </div>

                        </div>
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    );
}

export default Flipcard;
