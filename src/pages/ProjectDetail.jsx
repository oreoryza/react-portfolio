import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjects } from "../useContext/ProjectContext";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useProjects();
  const project = projects.find(project => project.id === parseInt(id));
  const currentIndex = projects.findIndex(project => project.id === parseInt(id));

  useEffect(() => {
      document.body.style.backgroundColor = '#FEE032';
    }, [])

    const handleNextProject = () => {
        if (currentIndex < projects.length - 1) {
          navigate(`/project-detail/${projects[currentIndex + 1].id}`);
        } else {
          navigate(`/project-detail/${projects[0].id}`);
        }
      };

  return (
    <motion.div key={id} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition:{duration:0.7}}} className="py-12 px-4 ">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-black">
            <img src={project.imageUrl} alt="" className="w-full h-full object-cover rounded-xl" />
            <div className="font-inter flex max-md:flex-col-reverse items-end justify-between w-full gap-4 my-6">
                <a href={project.link} className="py-2 px-4 w-32 bg-white rounded-full flex items-center md:hover:bg-blue active:bg-blue md:hover:text-white active:text-white duration-200" target="_blank" rel="noopener noreferrer"><i className="bi bi-play-fill text-xl"></i> View Live</a>
                <div className="flex flex-wrap gap-2">
                {project.tools.map((tag, index) => (
                    <div key={index} className="flex items-center justify-center text-black border-2 border-black rounded-full px-4 py-1">
                        {tag}
                    </div>
                ))}
                </div>
            </div>
            <div className="font-grotesk w-full mb-6 border-y-2 py-6 border-black">
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="py-2">{project.description}</p>
            </div>
            <div className="font-grotesk w-full text-lg font-medium flex justify-between items-center">
                <button onClick={() => navigate(-1)} className="group"><i className="bi bi-arrow-left group-hover:me-1 duration-200"></i> Back</button>
                <button onClick={handleNextProject} className="group">Next Project <i className="bi bi-arrow-right-square-fill group-hover:ms-1 duration-200"></i></button>
            </div>
        </div>
    </motion.div>
  );
};

export default ProjectDetail;