import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fibohack from '../assets/fibohack/fibohack.jpg';
import { FaArrowRight } from 'react-icons/fa';

const EventPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasShownPopup = localStorage.getItem('hasShownPopup');
        if (!hasShownPopup) {
            setIsOpen(true);
        }
    }, []);
    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('hasShownPopup', 'true');
    };
    window.onclick = function () {
        setIsOpen(false);
        localStorage.setItem('hasShownPopup', 'true');
    }

    return (
        <>
            {isOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-11/12 max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 text-center">

                        <h2 className="text-3xl font-bold mb-4 text-primary">Fibohack (1.0)</h2>

                        <div className="md:flex flex flex-col-reverse">
                            <p className="text-lg mb-8 text-gray-700">
                                We are excited to announce Fibohack (1.0), a thrilling hackathon event. Show off your coding skills, collaborate with others, and build innovative solutions! The registration deadline is <span className="font-bold">25th October</span>. Don’t miss out, register now!
                            </p>
                            <div className="flex justify-center rounded-lg">
                                <img
                                    className="h-[10vmax] mb-4 rounded-lg w-auto"
                                    src={fibohack}
                                    alt="Fibohack Event Banner" // Added alt text for accessibility
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 justify-center w-full">
                            <Link to="/fibohack">
                                <button
                                    onClick={closePopup}
                                    className='bg-primary text-white text-lg font-bold py-6 md:py-3 px-6 w-full flex justify-center items-center gap-2 rounded-lg hover:bg-green-600'
                                >
                                    Know More <FaArrowRight />
                                </button>
                            </Link>

                            <button
                                className=" flex items-center justify-center md:py-0 py-6 gap-2 font-bold text-gray-600 hover:text-gray-800 focus:outline-none"
                                onClick={closePopup}
                            >
                                Close <FaArrowRight />
                            </button>
                        </div>
                        {/* Button to Redirect */}

                    </div>
                </div>
            ) : null}
        </>
    );
};

export default EventPopup;
