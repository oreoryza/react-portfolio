import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useProjects } from "../useContext/ProjectContext";

const ProjectList = () => {
  const projects = useProjects();

  return (
    <motion.section className="flex flex-col justify-center items-center">
      {projects.map((project) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            key={project.id}
            ref={ref}
            className="group flex flex-col justify-center items-center bg-yellow w-full rounded-xl py-12 pt-2 my-4 card-project"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 500, damping: 16 }}
          >
            <Link to={`/project-detail/${project.id}`}>
              <div className="flex justify-center items-center w-full px-8 lg:my-24 my-12">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full lg:w-1/2 rounded-xl project-img"
                />
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 w-full md:px-16 px-8">
                <h2 className="font-grotesk font-bold text-4xl md:max-w-72 md:group-hover:text-blue group-active:text-blue">
                  {project.title}
                </h2>
                <p className="font-inter md:max-w-[28rem]">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default ProjectList;