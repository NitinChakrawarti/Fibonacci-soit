import React from 'react';
const timelineEvents = [
    {
        title: 'Notification Release',
        date: 'October 16, 2024',
        description: 'Announcement of the hackathon event.',
    },
    {
        title: 'Registration Period',
        date: 'October 20 - October 26, 2024',
        description: 'Open registration for participants.',
    },
    {
        title: 'Release of Problem Statements',
        date: 'October 27, 2024',
        description: 'Problem statements will be released online.',
    },
    {
        title: 'Idea Submission',
        date: 'October 27 - November 3, 2024',
        description: 'Participants submit their project ideas online.',
    },
    {
        title: 'Selection from Submitted Ideas',
        date: 'November 4, 2024',
        description: 'Selected ideas will proceed to the next round for prototype development.',
    },
    {
        title: 'Prototype Development',
        date: 'November 5 – November 10, 2024',
        description: 'Teams develop prototypes based on selected ideas.',
    },
    {
        title: 'Final Presentation & Judging',
        date: 'Date and venue to be announced',
        description: 'Teams present their prototypes for final evaluation offline.',
    },
];


const Timeline = ({ events }) => {
    return (
        <div className="pt-20 lg:px-36 px-8">
            <h1 className="text-[3vmax] text-left  font-bold text-primary "> Timeline</h1>
            <div className="flex flex-col pt-8 md:grid grid-cols-12 text-gray-800">
                {timelineEvents.map((event, index) => (
                    <div key={index} className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-primary pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow text-center">
                                <i className="fas fa-check-circle text-black"></i>
                            </div>
                        </div>
                        <div className="bg_gradient opacity-90   col-start-5 pl-8 col-end-13 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1 text-black">{event.title}</h3>
                            <p className="leading-tight text-justify text-black">{event.date}</p>
                            <p className="leading-tight text-justify text-black">{event.description}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className=" flex gap-4 justify-center pt-8 lg:pl-64">
                <h1 className="text-red-500 font-semibold">Note: </h1>
                <p className="text-white">Final Presentation and Judging will be offline.
                </p>

            </div>

        </div>
    );
};

export default Timeline;
