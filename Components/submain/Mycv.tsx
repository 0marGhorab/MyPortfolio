"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Mycv = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex gap-5"
    >
      <motion.a
        variants={slideInFromLeft(0.3)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-10"
        href="/Omar Ghorab.pdf"
        download
      >
        Download CV
      </motion.a>

      <motion.a
        variants={slideInFromRight(0.3)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-10"
        href="#about-me"
      >
        About Me
      </motion.a>
    </motion.div>
  );
};

export default Mycv;
