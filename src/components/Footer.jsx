import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-start w-full bg-yellow p-16 md:pb-0 rounded-t-3xl">
        <div className="rotate-90 md:flex hidden">
            <h1 className="font-grotesk text-[14rem] font-bold translate-y-44 text-white">OS</h1>
      </div>
        <div className="flex md:flex-row flex-col-reverse gap-12">
      <div>
        <h3 className="font-grotesk font-bold text-xl">Contact</h3>
        <ul className="flex flex-col gap-1 my-2">
          <li className="text-black/[.5] hover:text-black duration-300">LinkedIn</li>
          <li className="text-black/[.5] hover:text-black duration-300">Email</li>
        </ul>
      </div>
      <div>
        <h3 className="font-grotesk font-bold text-xl">Pages</h3>
        <ul className="flex flex-col gap-1 my-2">
          <Link to="/">
            <li className="text-black/[.5] hover:text-black duration-300">About Me</li>
          </Link>
          <Link to="/projects">
            <li className="text-black/[.5] hover:text-black duration-300">Projects</li>
          </Link>
        </ul>
      </div>
      <h3 className="font-bold text-2xl cursor-pointer text-blue">
        ORYZA SATIVA
      </h3>
        </div>
    </div>
  );
};

export default Footer;
