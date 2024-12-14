import React, {useEffect} from 'react';
import ProjectList from '../components/ProjectList';
import { PiStarFourFill } from "react-icons/pi";

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, [])

  return (
    <div className='flex flex-col justify-center items-center gap-6 mx-3 mb-6'>
      <div className='font-grotesk font-bold flex justify-center items-center gap-3 text-blue text-5xl w-full p-8 rounded-xl'>
        <PiStarFourFill />
        RECENT PROJECTS
        <PiStarFourFill />
      </div>
      <div className="flex md:flex-row flex-col justify-start items-start bg-yellow rounded-xl md:gap-10 gap-4 w-full md:px-16 p-8 md:hover:scale-95 duration-300">
        <h2 className="font-grotesk font-bold text-4xl md:max-w-72">
          Bootcamp Final Project
        </h2>
        <p className="font-inter md:max-w-[28rem]">Coming Soon</p>
      </div>
      <div className="flex md:flex-row flex-col justify-start items-start bg-yellow rounded-xl md:gap-10 gap-4 w-full md:px-16 p-8 md:hover:scale-95 duration-300">
        <h2 className="font-grotesk font-bold text-4xl md:max-w-72">
          College Final Project
        </h2>
        <p className="font-inter md:max-w-[28rem]">Decision Support System with Fuzzy-AHP and VIKOR method</p>
      </div>
      <div className='font-grotesk font-bold flex justify-center items-center gap-3 text-blue text-5xl w-full p-8 rounded-xl'>
        <PiStarFourFill className='text-yellow' />
        ARCHIVED PROJECTS
        <PiStarFourFill className='text-yellow' />
      </div>
      <ProjectList />
    </div>
  );
};

export default Projects;