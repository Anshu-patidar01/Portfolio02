import React from "react";
import "./about.css";
import { aboutSection, Education, Links } from "../../content";
import { PiStudentFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
function About() {
  return (
    <div
      className="flex flex-col items-center h-screen mt-20 w-full "
      id="about"
    >
      <div
        className=" flex lg:flex-row justify-center items-center gap-16 w-full h-full"
        id="about"
      >
        <div className=" hidden lg:block w-4/12 lg:ps-40">
          <img src={Links.aboutIMG} className="rounded-full w-80" alt="" />
        </div>
        <div className="flex flex-col gap-10 w-full lg:w-8/12 lg:pe-36 h-full">
          <div className=" flex flex-row justify-center lg:justify-normal items-center text-5xl  lg:mt-16 gap-2">
            <IoMdContact className="text-violet-700" />
            <h1 className="text-5xl   font-semibold cuestom__text-head">
              About Me
            </h1>
          </div>
          <div className="flex flex-col gap-5 mx-5 lg:mx-0 lg:ps-10">
            <div className="grid gap-5 mt-8 lg:mt-0">
              <p className="text-4xl font-semibold hover:text-violet-600">
                Dot Net Developer
              </p>
              <p className="text-slate-300 lg:p-3 lg:pe-10  hover:text-violet-400">
                {aboutSection.discription}
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:gap-1">
              <div className="flex items-center mt-5 gap-2">
                <PiStudentFill className="text-4xl" />
                <h1 className="text-4xl  font-semibold hover:text-violet-600">
                  Education
                </h1>
              </div>
              <div className="lg:ps-5 hover:text-violet-400">
                <h2 className="font-semibold text-lg">
                  {Education.digree}
                  <span className="text-[13px] text-slate-400">
                    {" "}
                    -{Education.year}
                  </span>
                </h2>
                <h3 className="text-slate-300">{Education.college}</h3>
                <h3 className="text-slate-300">{Education.cgpa}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500"></div>
    </div>
  );
}

export default About;
