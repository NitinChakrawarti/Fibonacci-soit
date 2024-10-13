import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fibologo-removebg-preview.png";
import Particle_animation from "./tsparticle";

export default function Nav() {


    return (
        <>
            <div className="fixed z-50 w-[100%] md:w-[100%]">
                <Particle_animation />
                <div className="flex w-full translate-y-[-100px] justify-between items-center  pt-6 md:pt-1 px-10 lg:px-32 text-4 text-primary backdrop:blur-2xl">
                    <div className="logo">
                        <img className="h-[6vmax]" src={logo} />
                    </div>
                    <div className="flex flex-row gap-10 items-center">
                        <div>
                            <ul className="flex items-center justify-between gap-10 text-[1.6vmax] md:text-[1.2vmax] font-bold " >
                                <Link className=" duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark"
                                    to="/"  >Home </Link>
                                <Link className=" duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark"
                                    to="/team" > Team </Link>
                                <Link className="contact text-primary  duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark" to="/contact" > Contact </Link>
                            </ul>
                        </div>
                        <Link to="/fibohack">
                            <button className=" glow_btn font-bold text-[1.2vmax] w-auto text-text_dark bg-primary/90 px-4 py-1 md:py-2 rounded-lg border-[1px] border-text_white hover:text-white">
                                Fibohack(1.0)
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}
