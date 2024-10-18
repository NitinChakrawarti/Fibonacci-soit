import React from 'react';
import Particle_animation from '../components/tsparticle';
import ScrollToTop from 'react-scroll-to-top';
import fibohack from '../assets/fibohack/fibohack.jpg';
import logo from '../assets/logofibo.png';
import coding1 from '../assets/fibohack/codingpng1.svg';
import coding2 from '../assets/fibohack/codingpng2.svg';
import coding3 from '../assets/fibohack/codingpng3.svg';
import { Link } from 'react-router-dom';
import Timeline from '../components/timeline';
import Prizes from '../components/prices';
import Partners from '../components/partner';
import Sponsers from '../components/sponsers';
import workuprise from '../assets/fibohack/wu.jpg';
import lnct from '../assets/fibohack/lnct.jpg';
import moonsrobe from '../assets/fibohack/moonsrobe.png';
import G_G from '../assets/fibohack/GG_Logo.png';
import gdg from '../assets/fibohack/gdg.webp';
import code4all from '../assets/fibohack/c4abg.png';
import ieee from '../assets/fibohack/ieee.jpg';
const Fibohack = () => {

    const prizes = [
        {
            title: 'Swag kit + Certificate (by GeeksforGeeks)',

        },
        {

            title: 'Goodies + Certificate (by GeeksforGeeks)',

        },
        {

            title: 'Coupons + Certificate (by GeeksforGeeks)',

        },
        {
            title: 'Certificate of Participation',
        },
        {
            title: 'Many more exciting prizes',
        },
    ];

    const partners = [
        {
            name: 'Hackathon Club',
            logo: lnct,
        },
        {
            name: 'IEEE SOIT',
            logo: ieee,
        },
        {
            name: 'Code4All',
            logo: code4all,
        },
        {
            name: 'GdG on Campus SOIT',
            logo: gdg,
        },
    ];

    const sponsers = [

        {
            name: 'GeeksforGeeks',
            logo: G_G,
        },
        {
            name: 'Moonsrobe',
            logo: moonsrobe,
        },
        {
            name: 'Workuprise',
            logo: workuprise,
        },
    ];


    return (
        <div className="relative w-full min-h-screen pt-8 overflow-hidden">
            <ScrollToTop smooth color="#55e6a4 " />

            {/* Particle Animation in the background */}
            <div className="absolute inset-0 z-0">
                <Particle_animation />
            </div>

            <div className="relative z-10">
                {/* Main Section */}
                <div className='w-full flex lg:flex-row flex-col-reverse justify-between md:px-36 px-6 py-10 gap-10'>
                    {/* Text Section */}
                    <div className="lg:w-[50%] 'flex flex-col gap-6 w-[100%] flex items-left  justify-center">
                        <h1 className="text-[4vmax] text- font-bold text-primary">Fibohack (1.0)</h1>
                        <div className="">
                            <h2 className='text-2xl text-left font-semibold text-white'>The Ultimate Hackathon Challenge</h2>
                            <p className='text-xl text-left text-white'>
                                Fibohack (1.0) is a hackathon designed to bring together the best talents to solve unique challenges.
                                Register now and be a part of this innovative event!
                            </p>
                        </div>
                        <p className='text-left text-lg font-bold text-red-500'>
                            Registration Deadline: <span>October 26, 2024</span>
                        </p>
                        {/* <Link to={"https://lu.ma/aolh62q4"} target='_blank' className='flex justify-'>
                            <button className='w-40 h-12 bg-primary text-black rounded-lg font-bold text-lg hover:bg-primary/70'>
                                Register Now
                            </button>
                        </Link> */}
                    </div>
                    {/* Image Section */}
                    <img className="lg:w-[40%] rounded-lg" src={fibohack} alt="Fibohack Hackathon Event Poster" />
                </div>


                {/* Event Details  and about event */}

                <div className=" py-8  pb-16 lg:px-36 px-8  bg_gradient">
                    <h1 className="text-[3vmax] text-left  font-bold text-white ">About Fibohack(1.0)</h1>
                    <div className="lg:flex items-center gap-32 pt-10 ">
                        <img src={coding3} alt="Fibohack Hackathon Event Poster" className="rounded-lg w-full lg:w-[25.0%] " />
                        <div className="leading-0 font-semibold text-left lg:text-center md:text-left md:leading-10 text-[#10291b] ">
                            Fibohack 1.0 is the ultimate hackathon brought to you by Fibonacci SOIT and sponsored by GeeksforGeeks. This event challenges participants to brainstorm innovative solutions to real-world problems through creative thinking.
                            Participants will be presented with a series of problem statements derived from real-life scenarios. They’ll pitch their ideas and then work on building prototypes to tackle these challenges. This hackathon is an ideal platform for those passionate about coding, creativity, and problem-solving.
                            .But that’s not all—Fibohack 1.0 also includes an exciting offline cultural showcase and a hands-on workshop to celebrate the winners. Every participant will receive a certificate of participation and have the opportunity to win exciting prizes and exclusive swag!
                        </div>
                    </div>
                </div>
                {/* timeline of hackathon */}
                <div className="md:px-36 px-6 lg:pt-24 pt-24">
                    <Timeline />
                </div>
                <div className="">
                    <Prizes prizes={prizes} /> {/* Use the Prizes component */}
                </div>
                <div className="">
                    <Sponsers sponsers={sponsers} />
                </div>
                <div className="pt-16">
                    <Partners partners={partners} />
                </div>

                <div className=" pt-32 lg:px-36 px-8 lg:flex-row flex-col flex justify-center gap-10 items-center">
                    <p className="font-semibold text-[2vmax]">"Think Big Code Bigger"</p>
                    {/* <Link to={"https://lu.ma/aolh62q4"} target='_blank' className='flex justify-'>

                        <button className='w-40 h-12 bg-primary text-black rounded-lg font-bold text-lg hover:bg-primary/70'>
                            Register Now
                        </button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Fibohack;





