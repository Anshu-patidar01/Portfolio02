import React, { useRef, useState } from "react";
import "./experience.css";
import { Links, myExperience } from "../../content";

function Experience() {
  return (
    <div id="experience" className="h-screen w-full mt-20">
      <h1 className="text-5xl text-center font font-semibold">
        Work Experience
      </h1>

      <div className="">
        {myExperience.map((item, index) => (
          <div
            key={index}
            className="flex flex-row  justify-center gap-5 lg:justify-normal lg:mx-36 border border-2-slate-500 h-[75%] mt-24 rounded-xl p-5"
          >
            <img
              src={item.IMG}
              className="w-5/12  rounded-xl bg-black p-12"
              alt=""
            />
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-3xl font-bold ">
                  {item.companyName}
                  <span className="text-sm font-normal ms-2"> {item.time}</span>
                </h1>
                <p className="text-xl ">{item.role}</p>
              </div>
              <div className="flex flex-col gap-0">
                <div className=" flex flex-row ">
                  <button className="hover:bg-slate-950 bg-slate-900 rounded-tl-xl p-2">
                    Project 1
                  </button>
                  <button className="hover:bg-slate-950 bg-slate-900 rounded-tr-xl border-s border-slate-700 p-2">
                    Project 2
                  </button>
                </div>

                <div className=" bg-slate-950 h-96 p-5">
                  <div className=" flex flex-row gap-5">
                    <button className=" hover:bg-gray-800 bg-gray-600 rounded-lg p-1">
                      Description
                    </button>
                    <button className=" hover:bg-gray-800 bg-gray-600 rounded-lg p-1">
                      Roles and Responsibility
                    </button>
                  </div>
                  <div className="mt-5 p-2">
                    <p className="">{item.projects[0].discription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div> */}
    </div>
  );
}

export default Experience;
