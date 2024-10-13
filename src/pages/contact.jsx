import React, { useState } from "react";
import "../style/contact.css";
import { FaMap } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");

  const formSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_KEY_FORMAPI}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setemail("")
      setname("")
      setnumber("")
      setmessage("")

      var btn = document.getElementById("btn");
      var btnText = document.getElementById("btnText");
      btnText.innerHTML = "Done";
      btn.classList.add("active");
      btn.classList.add("pl-8");

    }
  };


  return (
    <>
      <div className="pt-40">
        <div className="contact_us_header text-center text-[2vmax] font-bold flex justify-center">
          <p>Having Any Query Directly <br></br>
            Contact Us
          </p>
        </div>
        <div className=" bg-black">
          <Fade duration={1400}>
            <div className="contact_us_body lg:-mb-12 flex  lg:flex-row flex-col md:flex-col justify-center md:items-start md:px-10 flex-wrap items-center lg:items-start  lg:pl-0  bg-black ">
              <div className="contact_left md:w-fit lg:mt-8 md:mt-32 flex flex-col gap-4 justify-center lg:justify-start px-8 items-start">
                <p className="lg:text-[10vmax] text-[6vmax] "> <FaMessage color="#55e6a4" />
                </p>

                <p className="md:text-[2vmax] lg:text-[1vmax] md:font-bold">Contact Info</p>
                <p className="flex items-center gap-4">
                  <FaMap size="1.8vmax" />
                  <span className="text-[1.5vmax] font-bold md:text-nowrap ">RGPV University, Bhopal</span>
                </p>
                <p className="flex items-center gap-4">
                  <MdMail size="1.8vmax" />
                  {/* <span className="text-[1.5vmax] font-bold"> fibonacciclubsoit@gmail.com</span> */}
                  <Link
                    to='#'
                    onClick={(e) => {
                      window.location.href = "mailto:fibonacciclubsoit@gmail.com";
                      e.preventDefault();
                    }}
                    className="text-[1.8vmax] lg:text-[1.5vmax] font-bold"
                  >
                    fibonacciclubsoit@gmail.com
                  </Link>
                </p>
                <div className="pt-4 mt-16 border-t-2 lg:mr-36">
                  <ul className="text-primary flex flex-row gap-8 pt-4">
                    <Link to="https://www.linkedin.com/in/fibonacci-soit/" className="  duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark   text-[1.4vmax] flex items-center gap-4 font-bold"> <FaLinkedin size="1.5rem" /> LinkedIn </Link>
                    <Link to="https://www.instagram.com/fibonacci_soit/" className="  duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark flex items-center gap-4  text-[1.4vmax] font-bold"><FaInstagram size="1.5rem" /> Instagram</Link>
                    <Link to="https://chat.whatsapp.com/FtTMIleQ34e5ITHF5JUv4w" className="  duration-300 hover:drop-shadow-custom-glow  hover:text-text_dark flex items-center gap-4 hover: text-[1.4vmax] font-bold"><FaWhatsapp size="1.5rem" /> WhatsApp</Link>
                  </ul>
                </div>
              </div>

              <div className="contact-box md:mt-32 lg:mt-12 md:w-[41vmax] lg:w-[35vmax] md:text-[2vmax] lg:text-[1.5vmax]" style={{ display: send ? "none" : "block" }} >
                <form onSubmit={formSubmit} className="flex flex-col md:gap-10 lg:gap-0">
                  <div className="user-box ">
                    <input className=" " value={name}
                      onChange={(e) => setname(e.target.value)}
                      type="text" name="name" required />
                    <label className=" lg:text-[1vmax]"  >Name</label>
                  </div>
                  <div className="user-box ">
                    <input className=" " value={email}
                      onChange={(e) => setemail(e.target.value)}
                      type="email" name="email" required />
                    <label className=" lg:text-[1vmax]"  >Email</label>
                  </div>
                  <div className="user-box ">
                    <input className=" " value={number}
                      onChange={(e) => setnumber(e.target.value)}
                      type="number" name="number" min="1000000000" max="9999999999" required />
                    <label className=" lg:text-[1vmax]"  >Mobile no.</label>
                  </div>
                  <div className="user-box ">
                    <input className=" " value={message}
                      onChange={(e) => setmessage(e.target.value)}
                      type="text" name="message" required />
                    <label className=" lg:text-[1vmax]" >Message</label>
                  </div>
                  <input className="  hidden" type="checkbox" name="botcheck" style={{ display: "none" }} />
                  <button id="btn" type="submit" className=" w-[16vmax] lg:w-[10vmax] lg:py-0 md:py-10 flex items-center justify-evenly py-6 text-[2.6vmax] lg:text-[1.4vmax] border-2 bg-white text-black font-bold hover:bg-white/50 ">
                    <p id="btnText">Submit</p>
                    <div className="checked">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Contact;
