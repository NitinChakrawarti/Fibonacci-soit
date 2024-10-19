import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faq = [
        {
            question: 'What are the eligibility criteria?',
            answer: 'Participants must be a students enrolled in undergraduate.'
        },
        {
            question: 'What are the key dates for the hackathon?',
            answer: 'The registration deadline is the 26th of October and offline presentation date and venue will be revealed soon.'
        },
        {
            question: 'How do I register?',
            answer: 'You can register by visiting the official event page and filling in the required details before the registration deadline.'
        },
        {
            question: 'Is there a team size limit?',
            answer: 'Yes, team sizes are generally limited to 2-5 members.'
        },
        {
            question: 'Are there prizes?',
            answer: 'Yes, exciting prizes await the winning teams, along with certificates form Geeksforgeeks.'
        }
    ];

    return (
        <div className="w-full py-8">
            <div className="bg_gradient box_shadow mt-10 pt-4 md:pt-10 border-[1px] border-primary/20 rounded-[14px] text-black pb-8">
                {faq.map((faq, index) => (
                    <div
                        key={index}
                        className="flex flex-col px-6 md:px-40 py-5"
                        onMouseEnter={() => toggleDropdown(index)}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <div className="flex justify-between cursor-pointer transition-all duration-300 ease-in-out">
                            <h1 className="text-[23px] font-medium">{faq.question}</h1>
                            <div>
                                {activeIndex === index ? (
                                    <MdKeyboardArrowUp size="30px" />
                                ) : (
                                    <MdKeyboardArrowDown size="30px" />
                                )}
                            </div>
                        </div>
                        <div className={`description ${activeIndex === index ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                            <p className="text-[20px] pt-4">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
