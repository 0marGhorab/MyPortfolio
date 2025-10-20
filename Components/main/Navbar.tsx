"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50">
      <div className="flex items-center justify-between px-6 md:px-10 h-[65px]">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/log.png"
            alt="logo"
            width={55}
            height={55}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-between w-[450px] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} color="#fff" />
          ) : (
            <Menu size={28} color="#fff" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#030014d0] backdrop-blur-md text-gray-200 py-6 space-y-4">
          <a
            href="#about-me"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white transition"
          >
            Projects
          </a>
          <div className="flex flex-row gap-5 pt-2">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
