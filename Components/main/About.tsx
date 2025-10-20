"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const About = () => {
  const imageVariants = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center justify-center w-full px-6 md:px-20 z-[20]"
      id="about-me"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-6xl pt-20">
        {/* === Title === */}
        <div className="text-[32px] sm:text-[36px] md:text-[40px] font-medium text-center text-gray-200 mb-[40px] sm:mb-[60px]">
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Me
          </span>
        </div>

        {/* === Content === */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-16">
          {/* === Left Side (Photo Placeholder) === */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex items-center justify-center w-full md:w-2/5 h-[250px] md:h-full text-white text-4xl md:text-6xl text-center"
          >
            Photo
          </motion.div>

          {/* === Right Side (Text & Socials) === */}
          <motion.div
            variants={slideInFromRight(0.3)}
            className="w-full md:w-3/5 text-white text-center md:text-left"
          >
            <motion.h2
              variants={slideInFromTop}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-[10px]"
            >
              Omar Ghorab
            </motion.h2>

            <motion.h5
              variants={imageVariants(0.2)}
              className="text-xl sm:text-2xl mb-[20px] text-gray-300"
            >
              Software Engineer{" "}
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                |
              </motion.span>{" "}
              Frontend Specialist
            </motion.h5>

            <motion.p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
              <span className="font-bold">Computer Science Graduate</span>,
              passionate Frontend Developer specialized in building modern,
              responsive web applications using React.js and Angular. I enjoy
              transforming ideas into interactive user experiences and
              continuously improving my skills in TypeScript, JavaScript (ES6+),
              HTML5, CSS3, and Tailwind CSS. I’m currently expanding my
              knowledge in Node.js to become a fullstack MERN developer. With
              strong problem-solving skills, teamwork, and adaptability, I’m
              eager to contribute to real-world projects and grow as a
              developer.
            </motion.p>

            {/* === Social Icons === */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6 mt-4 text-2xl sm:text-3xl"
            >
              <span className="text-lg sm:text-xl text-gray-300 font-medium">
                Contact Me:
              </span>

              <a
                href="mailto:ohghorab2001@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors"
                title="Send me an Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/omar-ghorab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/0marGhorab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-colors"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/201500160445?text=Hi%20Omar%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="italic text-[16px] sm:text-[18px] font-medium text-center text-gray-400">
            "Let’s build something that takes your project to the
            next level."
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
