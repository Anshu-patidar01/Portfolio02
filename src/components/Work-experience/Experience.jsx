import React, { useRef, useState } from "react";
import "./experience.css";
import { Links, myExperience } from "../../content";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Experience() {
  const company1 = myExperience[0];
  const company2 = myExperience[1];
  const [projects, setProject] = useState(company1.projects[0]);
  const [projects2, setProject2] = useState(company2.projects[0]);
  const [check, setCheck] = useState(true);
  const toggle1 = (e) => {
    e.preventDefault();
    console.log(check);
    check ? setProject(company1.projects[0]) : setProject(company1.projects[1]);
    check ? setCheck(false) : setCheck(true);
  };

  // const toggle2 = (e, check) => {
  //   e.preventDefault();
  //   console.log(check);
  //   check ? setProject(company2.projects[0]) : setProject(company2.projects[0]);
  // };

  return (
    <div
      id="experience"
      className=" flex flex-col items-center h-auto w-full mt-20 "
    >
      <h1 className="text-5xl text-center font font-semibold mt-6">
        Work Experience
      </h1>

      <div className="h-full">
        {/* project 1 starts */}

        <div className="flex flex-col  justify-center gap-5 bg-slate-900 lg:justify-normal lg:mx-36 border border-2-slate-500 mt-12 rounded-xl lg:p-5">
          <div className="flex flex-row gap-10 p-2 ps-10 h-56">
            <img
              src={company1.IMG}
              className="w-56 rounded-xl bg-black p-2"
              alt=""
            />
            <div className="">
              <h1 className="text-4xl font-semibold mt-2">
                {company1.companyName}
                <span className="text-sm text-slate-400">
                  {company1.time}
                </span>{" "}
              </h1>
              <p className="text-xl">{company1.role}</p>
              <article className=" pe-32 mt-6 text-slate-300">
                {company1.workedOnProjects}
              </article>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <FaChevronLeft
                className="text-3xl hover:text-4xl"
                onClick={(e) => toggle1(e)}
              />
            </div>

            <div className=" bg-slate-950 rounded-xl p-4 w-full">
              <h1 className="text-2xl font-semibold ps-3">
                {projects.projectName}
              </h1>
              <div className="flex flex-row mt-2">
                <article className="w-6/12 p-2 ">
                  <h1 className="text-lg font-semibold">Discription</h1>
                  <p className="p-2 px-4 text-slate-400">
                    {projects.discription}
                  </p>
                </article>
                <article className="w-6/12 p-2">
                  <h1 className="text-lg font-semibold">
                    Roles and Responsibility
                  </h1>
                  <div className="flex flex-col gap-1 p-2 px-4 text-slate-400">
                    {projects.RolesAndResp.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
            <div>
              <FaChevronRight
                className="text-3xl hover:text-4xl"
                onClick={(e) => toggle1(e)}
              />
            </div>
          </div>

          {/* project 1 end  */}
        </div>

        <div className="flex flex-col  justify-center gap-5 bg-slate-900 lg:justify-normal lg:mx-36 border border-2-slate-500 mt-12 rounded-xl p-5">
          <div className="flex flex-row gap-10 p-2 h-56">
            <img
              src={company2.IMG}
              className="w-56 rounded-xl bg-black p-10"
              alt=""
            />
            <div className="">
              <h1 className="text-4xl font-semibold mt-2">
                {company2.companyName}
                <span className="text-sm text-slate-400">
                  {company2.time}
                </span>{" "}
              </h1>
              <p className="text-xl">{company2.role}</p>
              <article className=" pe-32 mt-6 text-slate-300">
                {company2.workedOnProjects}
              </article>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div></div>

            <div className=" bg-slate-950 rounded-xl p-4 w-full">
              <h1 className="text-2xl font-semibold ps-3">
                {projects2.projectName}
              </h1>
              <div className="flex flex-row mt-2">
                <article className="w-6/12 p-2 ">
                  <h1 className="text-lg font-semibold">Discription</h1>
                  <p className="p-2 px-4 text-slate-400">
                    {projects2.discription}
                  </p>
                </article>
                <article className="w-6/12 p-2">
                  <h1 className="text-lg font-semibold">
                    Roles and Responsibility
                  </h1>
                  <div className="flex flex-col gap-1 p-2 px-4 text-slate-400">
                    {projects2.RolesAndResp.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
            <div></div>
          </div>

          {/* project 1 end  */}
        </div>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}

export default Experience;
