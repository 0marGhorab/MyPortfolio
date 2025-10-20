import { Frontend_skill, Other_skill, Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../submain/SkillDataProvider";
import SkillText from "../submain/SkillText";
import Mycv from "../submain/Mycv";

function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-3 min-h-screen pb-80 py-20 z-[30]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-10"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>

      <div className="relative z-[40] flex flex-col items-center gap-3 scale-[0.9]">
        <SkillText />

        <p className="cursive text-gray-200 text-4xl text-center">Frontend</p>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <p className="cursive text-gray-200 text-4xl text-center">
          Programming Languages
        </p>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <p className="cursive text-gray-200 text-4xl text-center">
          Version Control & Tools
        </p>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mb-4">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="relative z-[50] pointer-events-auto">
          <Mycv />
        </div>
      </div>
    </section>
  );
}

export default Skills;
