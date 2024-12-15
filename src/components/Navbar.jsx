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

  const isProjectDetailPage = location.pathname.startsWith("/project-detail/");

  return (
    <div onMouseOver={() => setIsHovered(true)}
    onMouseOut={() => setIsHovered(false)} className="font-grotesk text-black relative py-8 md:px-12 px-4 overflow-hidden">
      <div className={`${isProjectDetailPage ? "xl:fixed xl:left-0 xl:px-12 max-md:bg-yellow" : "max-md:bg-white" } max-md:fixed max-md:left-0 max-md:px-4 max-md:top-0 max-md:py-6 flex w-full justify-between items-center z-50`}>
        <Link to="/" onMouseOver={() => setHoveredButton(true)} onMouseOut={() => setHoveredButton(false)} className="font-bold text-2xl cursor-pointer text-blue">
          ORYZA SATIVA
        </Link>
        <ul className="flex gap-1 font-semibold">
          <Link to="/" onMouseOver={() => setHoveredButton(true)} onMouseOut={() => setHoveredButton(false)}>
            <li
              className={`${
                location.pathname === "/"
                  ? "underline underline-offset-8 decoration-yellow decoration-4 decoration-dotted"
                  : "text-black/[.5] md:hover:text-black active:bg-black/[.1] active:text-black hover:rounded-full duration-300"
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
                  : "text-black/[.5] md:hover:text-black active:bg-black/[.1] active:text-black hover:rounded-full duration-300"
              } py-2 px-3`}
            >
              Projects
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={`absolute w-10 ${hoveredButton ? "h-8" : "h-2"} md:block hidden bg-blue border-2 border-white`}
        style={{
          transform: `translate(${mousePosition.x - 68}px`,
          top: `${isHovered ? "0" : "-100%"}`,
          backgroundColor: `${hoveredButton ? "#FEE032" : "#3060B7"}`,
          border: `${hoveredButton ? "4px solid rgb(255, 255, 255)" : "none"}`,
          borderTop: `${hoveredButton && "none"}`,
          transitionDuration: '0.3s',
          borderRadius: `0 0 ${hoveredButton ? "50%" : ""} ${hoveredButton ? "50%" : ""}`,
        }}
      ></div>
    </div>
  );
};

export default Navbar;
