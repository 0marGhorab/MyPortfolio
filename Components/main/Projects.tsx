"use client";
import React from "react";
import { projects } from "@/constants/projects";
import ProjectCard from "../submain/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10 text-center">
        My Projects
      </h1>
      <h4 className="italic text-[16px] sm:text-[18px] font-medium text-center text-gray-400 mb-[12px] pb-10">
        These are the most recent projects.
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-[1300px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            demo={project.demo}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
