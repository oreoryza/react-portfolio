import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";

const Bento = () => {
  return (
    <div class="grid auto-rows-[12.5rem] grid-cols-4 md:gap-3 gap-4">
      <div class="relative flex row-span-2 lg:col-span-1 md:col-span-2 col-span-4 rounded-xl bg-white overflow-hidden">
        <img
          className="w-full object-cover"
          src="https://xinva.ai/wp-content/uploads/2023/12/106.jpg"
          alt=""
        />
        <div className="absolute flex justify-end items-center p-3 gap-3 bg-blue w-full">
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <div className="h-4 w-4 bg-white rounded-full"></div>
        </div>
      </div>
      <div class="row-span-3 md:col-span-2 col-span-4 grid grid-cols-2 gap-3">
        <div class="relative flex justify-center items-center row-span-1 col-span-2 rounded-xl bg-white p-4 card">
          <div className="absolute flex flex-col gap-4 p-4">
            <h1 className="font-grotesk md:text-5xl text-4xl font-bold text-blue">
              Muhammad
              <br />
              Oryza Sativa
            </h1>
            <p className="font-inter text-black/[.8] lg:ml-4">
              a front-end developer who loves design and programming. I'm
              currently working on a project related to a web-based decision
              support system as my final project in college.
            </p>
            <div className="flex justify-end w-full">
              <button className="text-blue border-2 border-blue rounded-full max-w-fit px-2 py-1">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div class="relative flex justify-center items-end row-span-1 rounded-xl  bg-white p-4 md:max-h-full max-h-64 card">
          <div className="absolute flex flex-col items-center">
            <div className="grid grid-cols-2 gap-2 my-12">
              <button className="bg-blue py-3 px-4 rounded-lg rounded-br-none text-2xl text-white hover:-translate-y-2 hover:-translate-x-2 hover:scale-125 duration-300">
                <i class="bi bi-linkedin"></i>
              </button>
              <button className="bg-blue py-3 px-4 rounded-lg rounded-bl-none text-2xl text-white hover:-translate-y-2 hover:translate-x-2 hover:scale-125 duration-300">
                <i class="bi bi-envelope-at-fill"></i>
              </button>
              <button className="bg-blue py-3 px-4 rounded-lg rounded-tr-none text-2xl text-white hover:translate-y-2 hover:-translate-x-2 hover:scale-125 duration-300">
                <i class="bi bi-instagram"></i>
              </button>
              <button className="bg-blue py-3 px-4 rounded-lg rounded-tl-none text-2xl text-white hover:translate-y-2 hover:translate-x-2 hover:scale-125 duration-300">
                <i class="bi bi-github"></i>
              </button>
            </div>
            <h2 className="font-grotesk text-4xl font-bold text-center text-blue">
              Socials
            </h2>
          </div>
        </div>
        <div class="relative flex justify-center items-end row-span-1 rounded-xl  bg-white p-4 md:max-h-full max-h-64 card">
          <div className="absolute flex flex-col items-center">
            <div className="grid grid-cols-3 gap-7 my-14">
              <a href="">
                <FaHtml5 className="scale-150 text-blue hover:text-[#DA4D24]" />
              </a>
              <a href="">
                <FaCss3Alt className="scale-150 text-black/[.5] hover:text-[#2D53E5]" />
              </a>
              <a href="">
                <FaReact className="scale-150 text-blue hover:text-[#66DBFB]" />
              </a>
              <a href="">
                <SiRedux className="scale-150 text-black/[.5] hover:text-[#7A50BE]" />
              </a>
              <div className="bg-blue border-2 border-blue"></div>
              <a href="">
                <SiTypescript className="scale-150 text-black/[.5] hover:text-[#087ECF]" />
              </a>
              <a href="">
                <IoLogoJavascript className="scale-150 text-blue hover:text-[#F7E025]" />
              </a>
              <a href="">
                <FaBootstrap className="scale-150 text-black/[.5] hover:text-[#8019FA]" />
              </a>
              <a href="">
                <RiTailwindCssFill className="scale-150 text-blue hover:text-[#3EBFF8]" />
              </a>
            </div>
            <h2 className="font-grotesk text-4xl font-bold text-center text-blue">
              Stack
            </h2>
          </div>
        </div>
      </div>
      <div class="relative flex justify-center md:row-span-3 row-span-2 lg:col-span-1 md:col-span-2 col-span-4 rounded-xl  bg-blue hover:bg-gradient-to-br from-blue to-[#6387C9] transition duration-300 p-4 card">
        <div className="absolute flex flex-col gap-8 p-4 w-full">
          <h1 className="font-grotesk md:text-5xl text-4xl font-bold text-white">
            Latest Projects
          </h1>
          <div className="flex flex-col gap-4">
            <a
              href="https://oz-minimalist.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-inter flex justify-between items-center font-semibold text-white rounded-lg w-full px-2 py-3 border border-2 border-white md:hover:bg-white md:hover:text-black active:bg-white active:text-black duration-300"
            >
              Dsgnr. Website
              <i class="bi bi-arrow-up-right-circle-fill text-lg md:group-hover:rotate-45 group-active:rotate-45 md:group-hover:text-blue group-active:text-blue duration-300"></i>
            </a>
            <a
              href="https://oreoryza-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-inter flex justify-between items-center font-semibold text-white rounded-lg w-full px-2 py-3 border border-2 border-white md:hover:bg-white md:hover:text-black active:bg-white active:text-black duration-300"
            >
              Personal AI with Groq
              <i class="bi bi-arrow-up-right-circle-fill text-lg md:group-hover:rotate-45 group-active:rotate-45 md:group-hover:text-blue group-active:text-blue duration-300"></i>
            </a>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 flex justify-end w-full">
          <Link
            to="/projects"
            className="font-semibold text-white/[.5] hover:text-white"
          >
            See More <i class="bi bi-chevron-right"></i>
          </Link>
        </div>
      </div>
      <div class="relative flex justify-center row-span-2 lg:col-span-1 md:col-span-2 col-span-4 rounded-xl  bg-white p-4 card">
        <div className="absolute flex flex-col w-full p-4">
          <h2 className="font-grotesk text-4xl font-bold text-blue mb-4">
            Experience
          </h2>
          <button className="group font-inter flex justify-between items-start w-full font-semibold text-black my-2 bg-black/[.06] hover:bg-black/[.2] hover:text-blue p-3 rounded-lg duration-200">
            <p className="max-w-[50%] text-start">Lumoshive Academy</p>
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-12 transition duration-200">2024</p>
              <i className="absolute bi bi-arrow-right text-xl translate-y-12 group-hover:-translate-y-6 duration-200"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="relative row-span-1 hidden lg:flex justify-center items-center rounded-xl  bg-blue hover:bg-gradient-to-bl from-blue to-[#6387C9] p-4 card">
        <h1 className="font-grotesk text-5xl font-bold text-white">
          Front
          <br />
          -End
        </h1>
        <PiStarFourFill className="absolute top-10 left-10 text-white text-xl opacity-75 " />
        <PiStarFourFill className="absolute bottom-10 right-10 text-white text-sm opacity-75" />
        <PiStarFourFill className="absolute bottom-12 right-5 text-white text-3xl opacity-75" />
      </div>
      <div class="relative flex lg:justify-start justify-center items-center lg:row-span-1 md:row-span-2 row-span-4 lg:col-span-2 col-span-4 max-h-[50rem] rounded-xl  bg-white card overflow-hidden">
        <div className="absolute flex flex-col gap-2 px-4">
          <h2 className="font-grotesk text-4xl font-bold text-blue lg:text-start text-center">
            Hobbies
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-2 gap-4">
            <div className="relative group border border-2 border-blue rounded-lg overflow-hidden">
              <div className="flex absolute top-0 justify-center items-center lg:h-32 h-full w-full bg-white text-3xl font-bold text-black mix-blend-screen translate-y-0 group-hover:translate-y-96 duration-500">
                Anime
              </div>
              <img
                className="lg:h-32 h-full w-full object-cover"
                src="https://media1.tenor.com/m/vOgdsVDn8SQAAAAd/swpa.gif"
                alt=""
              />
            </div>
            <div className="relative group border border-2 border-blue rounded-lg overflow-hidden">
              <div className="flex absolute top-0 justify-center items-center lg:h-32 h-full w-full bg-white text-3xl font-bold text-black mix-blend-screen translate-y-0 group-hover:translate-y-96 duration-500">
                Gaming
              </div>
              <img
                className="lg:h-32 h-full w-full"
                src="https://upload-os-bbs.hoyolab.com/upload/2023/04/10/202056814/6e8c11a8279a1703f8cb70fb62634516_4781697452009149722.gif"
                alt=""
              />
            </div>
            <div className="relative group border border-2 border-blue rounded-lg overflow-hidden max-h-48">
              <div className="flex absolute top-0 justify-center items-center lg:h-32 h-full w-full bg-white text-3xl font-bold text-black mix-blend-screen translate-y-0 group-hover:translate-y-96 duration-500">
                Memes
              </div>
              <img
                className="lg:h-32 h-full w-full object-cover"
                src="https://media1.tenor.com/m/tvPGUU2uAYkAAAAC/shrek-shrek-rizz.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
