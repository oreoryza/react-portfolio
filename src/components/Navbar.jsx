import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="font-grotesk text-black py-8 md:px-12 px-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl cursor-pointer text-blue">
          ORYZA SATIVA
        </h3>
        <ul className="flex gap-1 font-semibold">
          <Link to="/">
            <li
              className={`${
                location.pathname === "/"
                  ? "underline underline-offset-8 decoration-white decoration-4 decoration-dotted md:hover:decoration-solid"
                  : "text-black/[.5] md:hover:bg-black/[.1] active:bg-black/[.1] md:hover:text-black active:text-black hover:rounded-full duration-300"
              } py-2 px-3`}
            >
              About
            </li>
          </Link>
          <Link to="/projects">
            <li
              className={`${
                location.pathname === "/projects"
                  ? "underline underline-offset-8 decoration-4 decoration-dotted md:hover:decoration-solid"
                  : "text-black/[.5] md:hover:bg-black/[.1] active:bg-black/[.1] md:hover:text-black active:text-black hover:rounded-full duration-300"
              } py-2 px-3`}
            >
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
