import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX});
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div onMouseOver={() => setIsHovered(true)}
    onMouseOut={() => setIsHovered(false)} className="font-grotesk text-black relative py-8 md:px-12 px-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <h3 onMouseOver={() => setHoveredButton(true)} onMouseOut={() => setHoveredButton(false)} className="font-bold text-2xl cursor-pointer text-blue">
          ORYZA SATIVA
        </h3>
        <ul className="flex gap-1 font-semibold">
          <Link to="/" onMouseOver={() => setHoveredButton(true)} onMouseOut={() => setHoveredButton(false)}>
            <li
              className={`${
                location.pathname === "/"
                  ? "underline underline-offset-8 decoration-yellow decoration-4 decoration-dotted"
                  : "text-black active:bg-black/[.1] active:text-black hover:rounded-full duration-300"
              } py-2 px-3`}
            >
              About
            </li>
          </Link>
          <Link to="/projects" onMouseOver={() => setHoveredButton(true)} onMouseOut={() => setHoveredButton(false)}>
            <li
              className={`${
                location.pathname === "/projects"
                  ? "underline underline-offset-8 decoration-yellow decoration-4 decoration-dotted"
                  : "text-black active:bg-black/[.1] active:text-black hover:rounded-full duration-300"
              } py-2 px-3`}
            >
              Projects
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={`absolute w-8 h-6 md:block hidden rounded-b-xl`}
        style={{
          transform: `translate(${mousePosition.x - 65}px`,
          top: `${isHovered ? "0" : "-100%"}`,
          backgroundColor: `${hoveredButton ? "#FEE032" : "#3060B7"}`,
          transitionDuration: '0.3s'
        }}
      ></div>
    </div>
  );
};

export default Navbar;
