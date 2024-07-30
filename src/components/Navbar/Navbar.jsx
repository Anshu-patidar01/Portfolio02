import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
function Navbar() {
  return (
    <div className=" flex flex-row justify-between items-center py-1 px-5 w-[85%] tracking-wider ">
      <h1 className="text-[35px] font-bold">Sanjay</h1>
      <ul className=" custom__bg-text_color my-2 px-16 py-4 rounded-full text-[14px] hidden lg:flex lg:items-center lg:gap-10 ">
        <a>Home</a>
        <a href="#Profile">Profile Summary</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </ul>
      <a className="custom__bg-button_color text-[16] my-1 font-semibold rounded-full capitalize px-4 py-3 hidden lg:block ">
        Contact with Me
      </a>
      <AiOutlineMenu className=" lg:hidden text-3xl" />
    </div>
  );
}

export default Navbar;
