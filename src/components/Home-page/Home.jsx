import React from "react";
import "./home.css";
import { Header, Links } from "../../content";
function Home() {
  return (
    <div
      className="flex flex-col items-center mt-12 h-[85vh] lg:h-screen w-full "
      id="home"
    >
      <div>
        <img
          src={Links.profileIMG}
          className="w-60 rounded-full shadow-lg shadow-sky-800 hover:shadow-lg hover:shadow-sky-600"
          alt="Profile Image"
        />
      </div>
      <div className="mt-5 ">
        <h1 className=" text-[30px] md:text-[48px] px-10 xl:px-[22rem] font-bold  text-center">
          <span className="cuestom__text-head hover:bg-gradient-to-r hover:from-sky-500 hover:to-rose-500 hover:bg-clip-text hover:text-transparent">
            I'm {Header.Name}{" "}
          </span>
          {Header.Title}
        </h1>
        <p className="px-16 xl:px-[26rem]">{Header.Discription}</p>
      </div>
      <div className="flex flex-col md:flex-row  gap-5 mt-5">
        <a
          href={Links.Resume}
          download
          className="w-80 lg:w-auto py-4 md:px-7 md:py-4 text-center hover:border-2 cursor-pointer hover:border-white custom__bg-button_color text-[16] my-1 font-semibold rounded-full capitalize "
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="border-2 border-white text-[16] my-1 cursor-pointer font-semibold rounded-full capitalize px-7 py-4"
        >
          Contact with me
        </a>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}

export default Home;
