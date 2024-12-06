import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-300" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-[50px] mx-6 md:mx-32 py-8 md:gap-24 gap-3  rounded-lg">
      {/* Left Section */}
      <div className="max-w-md mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold  text-left md:text-left mb-6">
          What My <span className="">Programming</span> Skills Include?
        </h1>
        <p className="text-lg text-white leading-relaxed text-left md:text-left flex justify-center">
          I develop simple, intuitive, and responsive user interfaces that help
          users achieve their goals efficiently. My technical expertise ensures
          top-notch performance and seamless user experiences. I excel in
          React.js, Tailwind CSS, and state management tools like Redux,
          creating user-centric interfaces. On the backend, I am skilled in
          Node.js and Express.js, developing robust APIs with secure
          authentication using JWT.
        </p>
      </div>

      {/* Right Section (Icons Grid) */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 mt-8 md:mt-0">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white h-20 w-20 md:h-24 md:w-24 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-3xl md:text-4xl mt-4">{skill.icon}</div>
            <span className="text-xs md:text-sm mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
