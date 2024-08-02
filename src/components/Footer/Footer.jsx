import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Links } from "../../content";

function Footer() {
  return (
    <div className="mt-5 w-full ">
      <div className="w-[95%] bg-slate-900 rounded-e-full">
        <div className="text-white p-2 ">
          <div className="flex flex-row justify-center mt-5 gap-5">
            <a href={Links.linkedin}>
              <FaLinkedin className="text-3xl" />
            </a>

            <a href={Links.instagram}>
              <FaInstagram className="text-3xl" />
            </a>
            <a href={"#"}>
              <FaFacebook className="text-3xl" />
            </a>
            <a href={"#"}>
              <FaXTwitter className="text-3xl" />
            </a>
          </div>
          <div>
            <ul className="flex gap-5 justify-center my-3">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#Profile">Profile</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </ul>
          </div>
          <div className="flex justify-center items-center text-sm">
            <p>Copyright </p>
            <FaRegCopyright />
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
