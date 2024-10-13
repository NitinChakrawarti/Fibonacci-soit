import React from "react";
import Logo from "../assets/fibologo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Footer() {

    return (
        <>
            <Fade duration="2000" >
                <div className='text-text_light mt-20 pb-8 w-[100%] bg-primary opacity-75 flex justify-between'>
                    <div className='pl-8  lg:px-32  md:pb-8 pt-14 text-3xl text-white flex lg:flex-row flex-col  gap-6'>
                        <div className=" flex sm:flex-col flex-row lg:flex-col md:flex-row md:gap-20 sm:gap-0 lg:gap-2 gap-8">
                            <img className="w-[10vmax] rounded-lg" src={Logo} />
                            <div className="flex flex-col lg:gap-0 md:gap-10 gap-0 md:justify-center ">
                                <h1 className="font-extrabold  md:pt-4 md:text-[4vmax] lg:text-[2vmax] text-text_dark">
                                    Fibonacci
                                </h1>
                                <p className="lg:text-[1.3vmax] text-[1.9vmax] text-text_dark/60 font-bold lg:leading-7"> School Of Information
                                    <br></br> Technology RGPV, Bhopal
                                </p>
                            </div>
                        </div>
                        <div className=" md:mt-16 lg:mt-0  mt-8">
                            <div className="flex sm:flex-row flex-wrap lg:flex-row w-[100%] lg:justify-start gap-8 md:gap-12 lg:gap-36 lg:pl-24">
                                <div className=" flex flex-row gap-8 md:gap-12 lg:gap-36 ">
                                    <div className=" md:w-auto w-[16vmax]">
                                        <h1 className="lg:text-[1.9vmax] md:text-[3vmax] text-text_dark/90 font-bold">Pages</h1>
                                        <ul className="text-text_dark/70 flex flex-col lg:gap-0 gap-4 md:leading-9  leading-3 lg:pt-0 pt-4 md:pt-8 ">
                                            <Link to="/" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Home</Link>
                                            {/* <Link to="/about" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  About</Link> */}
                                            <Link to="/team" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Team</Link>
                                            <Link to="/contact" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Contact</Link>
                                            {/* <Link to="/" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Privacy Policy</Link>
                                            <Link to="/about" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Disclaimer</Link> */}
                                        </ul>
                                    </div>

                                    <div className="md:w-auto w-[20vmax]">
                                        <h1 className="lg:text-[1.9vmax] md:text-[3vmax] text-text_dark/90 font-bold">Social Links</h1>
                                        <ul className="text-text_dark/70 flex flex-col lg:gap-0 gap-4 md:leading-9  leading-3 lg:pt-0 pt-4 md:pt-8">
                                            <Link to="https://www.linkedin.com/in/fibonacci-soit/" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] flex items-center gap-4 font-bold"> <FaLinkedin size="1.5rem" /> LinkedIn </Link>
                                            <Link to="https://www.instagram.com/fibonacci_soit/" className="flex items-center gap-4 hover:text-text_dark text-[1.9vmax] lg:text-[1.2vmax] font-bold"><FaInstagram size="1.5rem" /> Instagram</Link>
                                            <Link to="https://chat.whatsapp.com/FtTMIleQ34e5ITHF5JUv4w" className="flex items-center gap-4 hover:text-text_dark text-[1.9vmax] lg:text-[1.2vmax] font-bold"><FaWhatsapp size="1.5rem" /> WhatsApp</Link>
                                        </ul>
                                    </div>
                                </div>
                                <div className=" md:w-auto lg:w-[16vmax]">
                                    <h1 className="lg:text-[1.9vmax] md:text-[3vmax] text-text_dark/90 font-bold">Past Events</h1>
                                    <ul className="text-text_dark/70 flex flex-col lg:gap-0 gap-4 md:leading-9  leading-3 lg:pt-0 pt-4 md:pt-8">
                                        <Link to="/" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />Deekhsharambh'24 </Link>
                                        <Link to="/" className="hover:text-text_dark text-[1.9vmax] lg:text-[1.1vmax] font-bold flex items-center gap-2"> <FaArrowRight />  Hack-in Bhopal</Link>

                                    </ul>
                                </div>
                            </div>
                            {/* <div className="flex text-[1vmax] text-text_dark font-bold">
                                <p className="flex  items-center justify-start gap-2"><FaCopyright /> All Rights Reserved @Fibonacci </p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex text-[1vmax] text-text_dark items-center justify-center font-bold bg-primary">
                    <p className="flex  items-center justify-start gap-2"><FaCopyright /> All Rights Reserved @Fibonacci </p>
                </div>
            </Fade>
        </>
    )
}











