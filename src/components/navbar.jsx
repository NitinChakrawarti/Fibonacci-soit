import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fibologo-removebg-preview.png";
import Particle_animation from "./tsparticle";

export default function Nav() {


    return (
      
            <div className=" w-[100%] sticky top-0 bg-bg_Primary z-30 md:w-[100%]">
                <div className="flex w-full  justify-between items-center md:pt-2 pt-2 px-8 lg:px-32 text-white backdrop:blur-2xl">
                    <div className="logo sm:visible invisible">
                        <img className="h-[6vmax]" src={logo} />
                    </div>
                    <div className="flex flex-row gap-10 items-center">
                        <div>
                            <ul className="flex items-center justify-between gap-6 md:gap-10 text-[1.6vmax] md:text-[1.2vmax] font-bold " >
                                <Link className=" glow_btn_hover duration-300 "
                                    to="/"  >Home </Link>
                                <Link className=" glow_btn_hover duration-300 "
                                    to="/team" > Team </Link>
                                <Link className="contact text  glow_btn_hover duration-300 " to="/contact" > Contact </Link>
                            </ul>
                        </div>
                        <Link to="/fibohack">
                            <button className="glow_btn flex items-center font-bold text-[1.2vmax] w-auto text-text_dark bg-primary/90 px-4 rounded-lg border-[1px] border-text_white hover:text-white">
                                Fibohack(1.0)
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


       
    )
}
