"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Mycv from "./Mycv";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "React.js Developer",
  "Angular Developer",
];

const HeroContent = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 150;
    const currentRole = roles[roleIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* <motion.div
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
          <h1 className="Welcome-text text-[13px] p-1">
            Frontend Developer Portfolio
          </h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Omar Ghorab{" "}
            </span>
          </span>
          <span className="font-mono text-5xl text-gray-300">
            {text}
            <span className="blinking-cursor">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Frontend developer specializing in Next.Js, React.Js & Angular,
          TypeScript, and modern web technologies to build fast and scalable
          applications.
        </motion.p>
        <Mycv />
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full lg:flex justify-center items-center hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work Icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
