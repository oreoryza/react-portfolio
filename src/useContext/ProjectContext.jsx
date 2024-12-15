import React, { createContext, useContext } from 'react';

import geometric from "../assets/geometric.png";
import dsgnr from "../assets/dsgnr.png";
import blog from "../assets/blog.png";
import ai from "../assets/ai.png";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "Geometric Transformation",
      description: "A web application that allows users to learn and apply geometric transformations to objects",
      imageUrl: geometric,
      tools: ["HTML", "CSS", "Javascript"],
      link: "https://geometric-transformation.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Blog",
      description: "Building a personal blog with Progressive Web Apps capabilities",
      imageUrl: blog,
      tools: ["React", "Redux", "Tailwind"],
      link: "https://oreoryza-blog-lumos.vercel.app/",
    },
    {
      id: 3,
      title: "Personal AI",
      description: "Building personal large language model AI web powered by Groq",
      imageUrl: ai,
      tools: ["React", "Redux", "Tailwind"],
      link: "https://oreoryza-ai.vercel.app/",
    },
    {
      id: 4,
      title: "Dsgnr.",
      description: "A landing page for a design agency",
      imageUrl: dsgnr,
      tools: ["React", "Redux", "Tailwind"],
      link: "https://oz-minimalist.vercel.app/",
    },
  ];

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectContext);
};