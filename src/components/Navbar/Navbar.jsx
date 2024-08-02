import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
function Navbar() {
  return (
    <div className=" flex flex-row justify-between items-center py-1 px-5 w-[85%] tracking-wider ">
      <a href="#" className="text-[35px] font-bold cursor-pointer">
        Sanjay
      </a>
      <ul className="my-2 px-16 py-4 rounded-full text-[14px] hidden shadow-lg shadow-sky-800 hover:shadow-violet-700/40 lg:flex lg:items-center lg:gap-10 ">
        <a href="#home">Home</a>
        <a href="#Profile">Profile Summary</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="flex justify-center items-center">
        <a
          id="mode"
          className=" my-1 font-semibold rounded-full shadow-lg border-[3px] cursor-pointer border-slate-300 shadow-slate-400 capitalize w-12 p-1 hidden lg:block "
        >
          <div className="h-4 w-4 rounded-full bg-slate-300"></div>
        </a>
      </div>
      <AiOutlineMenu className=" lg:hidden text-3xl" />
    </div>
  );
}

export default Navbar;
