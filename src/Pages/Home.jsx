import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center w-100% md:mt-0 mt-48 ">
      {/* Hero Section */}
      <div
        id="home"
        className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 md:px-16"
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left md:text-left flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">
            Hi, I'm <span className="text-4xl uppercase">Madhav Banjade</span>
          </h1>
          <h2 className="text-3xl mt-2 pb-4 text-blue-400">
            Full-Stack Developer
          </h2>
          <p className="text-md leading-6 md:text-left text-left">
            I am a Full-Stack MERN Developer skilled in creating modern,
            responsive, and scalable web applications. Using MongoDB,
            Express.js, React.js, and Node.js, I deliver seamless user
            experiences and robust server-side functionality. With expertise in
            JavaScript (ES6+), RESTful APIs, and cloud deployment, I focus on
            building efficient, secure, and innovative solutions tailored to
            user needs.
          </p>
          <div className="flex flex-row md:flex-row gap-6 mt-4 md:mt-8">
            <Link to="/contact">
              <button
                id="hire"
                className="font-medium hover:bg-sky-600 hover:text-black px-4 py-2 rounded cursor-pointer transition duration-300 border-2 border-blue-400 text-blue-400"
              >
                Hire me
              </button>
            </Link>
            <a
              href="https://wa.me/1234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-medium hover:bg-sky-600 hover:text-black px-4 py-2 rounded cursor-pointer transition duration-300 border-2 border-blue-400 text-blue-400">
                Let's talk
              </button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row justify-center md:justify-start mt-6 gap-6">
            <a
              href="https://www.instagram.com/banjade.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-2 text-blue-400 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/madhavbanjade"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-2 text-blue-400 cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/madhav-banjade-153828328/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-2 text-blue-400 cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Photo Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:mt-8 mt-[50px]">
          <img
            src="/public/IMG_4232.jpg" // Use optimized image here
            alt="Madhav Banjade"
            className="rounded-lg shadow-lg w-[300px] md:w-[500px] h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="w-100%">
        <About />
      </div>

      {/* Skills Section */}
      <div id="skills" className="w-100%">
        <Skills />
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-100%">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-100%">
        <Contact />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>

      {/* Always Visible Section */}
      <div className="fixed bottom-10 right-10">
        <Arrow />
      </div>
    </div>
  );
};

export default Home;
