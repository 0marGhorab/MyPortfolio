import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* === Left Section: Quick Links === */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg mb-3 text-white">Navigation</h2>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* === Right Section: Contact Info === */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold text-lg mb-3 text-white">Contact</h2>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400" />
              <a
                href="mailto:ohghorab2001@gmail.com"
                className="hover:text-purple-300 transition-colors"
              >
                ohghorab2001@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-400" />
              <a
                href="https://www.linkedin.com/in/omar-ghorab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/omar-ghorab
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-gray-300" />
              <a
                href="https://github.com/0marGhorab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition-colors"
              >
                github.com/0marGhorab
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/201500160445?text=Hi%20Omar%2C%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
                +20 1500160445
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* === Bottom Text === */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Omar Ghorab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
