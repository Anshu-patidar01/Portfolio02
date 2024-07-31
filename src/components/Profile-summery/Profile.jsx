import React from "react";
import "./profile.css";
import { ProfileSummery } from "../../content";
function Profile() {
  return (
    <div
      id="Profile"
      className=" flex flex-col items-center  bg-slate-800 w-full mt-20"
    >
      <h1 className="text-5xl font-semibold">Profile Summary</h1>
      <div className="flex flex-col gap-4 border-2 border-slate-100 p-5  lg:py-14 mt-12 mx-10 lg:mx-24 rounded-3xl bg-slate-700">
        {ProfileSummery.map((item, index) => (
          <p key={index} className="text-white">
            {index + 1}. {item.points}
          </p>
        ))}
      </div>

      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}
export default Profile;
