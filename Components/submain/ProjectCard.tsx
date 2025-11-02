"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  repo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  src,
  title,
  description,
  technologies,
  demo,
  repo,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!demo) {
      e.preventDefault();
      Swal.fire({
        icon: "info",
        title: "Not Deployed",
        text: "This project isn't yet deployed.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleRepoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!repo) {
      e.preventDefault();
      Swal.fire({
        icon: "info",
        title: "No Repository",
        text: "Repository link is not available.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div
      className="group w-full h-[300px] perspective cursor-pointer shadow-lg"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-xl shadow-lg ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-gray-700">
          <Image
            src={src}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute bottom-0 w-full bg-black/60 text-center py-2 text-lg font-semibold text-gray-100">
            {title}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-xl bg-[#111] border border-gray-700 flex flex-col items-center justify-center p-4 text-gray-300">
          <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {title}
          </h3>
          <p className="text-sm text-center mb-3">{description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gradient-to-r from-purple-500 to-cyan-500 text-black px-2 py-1 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-[10px] flex gap-5">
            <a
              href={demo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDemoClick}
              className="px-3 py-1 bg-gray-500 text-black rounded-xl hover:opacity-50 hover:text-white duration-500"
            >
              Demo
            </a>
            <a
              href={repo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleRepoClick}
              className="px-3 py-1 bg-gray-400 text-black rounded-xl hover:opacity-50 hover:text-white duration-500"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
