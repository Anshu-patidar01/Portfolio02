import React from "react";
import "./skills.css";
import { Skills_discription } from "../../content";
function Skills() {
  return (
    <div id="skills" className="flex items-center flex-col w-full mt-20">
      <div className=" mx-16">
        <h1 className="text-5xl text-center font-semibold">Key Skills</h1>
        <div className="mt-8 flex flex-col lg:grid lg:grid-cols-2 lg:flex-row gap-12 lg:mx-24 lg:mt-12  lg:gap-20">
          {Skills_discription.map((item, index) => (
            <div
              key={index}
              className="border-2 border-slate-300 p-5 rounded-xl "
            >
              <h1 className="text-2xl text-center font-semibold">
                {item.title}
              </h1>
              <div className=" grid grid-cols-2 text-center gap-3 mt-5">
                {item.skills.map((skill, i) => (
                  <p key={i}>{skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}
export default Skills;
