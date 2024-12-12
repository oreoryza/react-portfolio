import React from "react";
import geometric from "../assets/geometric.png";
import dsgnr from "../assets/dsgnr.png";
import blog from "../assets/blog.png";
import ai from "../assets/ai.png";

const ProjectList = () => {
  const project = [
    {
      id: 1,
      title: "Geometric Transformation",
      description:
        "A web application that allows users to lear and apply geometric transformations to object",
      imageUrl: geometric,
      link: "https://geometric-transformation.vercel.app/",
    },
    {
        id: 2,
        title: "Personal Blog",
        description:
        "Building a personal blog with Progressive Web Apps capabilities",
        imageUrl: blog,
        link: "https://oreoryza-blog-lumos.vercel.app/",
    },
    {
        id: 3,
        title: "Personal AI",
        description:
        "Building personal large language model AI web powered by Groq",
        imageUrl: ai,
        link: "https://oreoryza-ai.vercel.app/",
    },
    {
      id: 4,
      title: "Dsgnr.",
      description:
        "A landing page for a design agency",
      imageUrl: dsgnr,
      link: "https://oz-minimalist.vercel.app/",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      {project.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-center items-center bg-yellow w-full rounded-xl py-12 pt-2 my-4 md:hover:scale-95 duration-300 card-project"
        >
          <div className="flex justify-center items-center w-full px-8 lg:my-24 my-12">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-xl project-img"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-start items-start md:gap-10 gap-4 w-full md:px-16 px-8">
              <h2 className="font-grotesk font-bold text-4xl md:max-w-72 md:group-hover:text-blue group-active:text-blue">
                {project.title}
              </h2>
              <p className="font-grotesk md:max-w-[28rem]">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
