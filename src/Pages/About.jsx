import React from "react";

const About = () => {
  return (
    <div className="p-4 mb-4 md:mt-0 mt-40">
      {/* Flex container for image and text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-16 mt-10 md:mt-20">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/3 w-full flex justify-center">
          <img
            src="/public/IMG_5187.jpg"
            alt="Madhav Banjade"
            className="rounded-lg shadow-lg w-[300px] md:w-[400px] lg:w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-2/3 w-full text-left lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Need a <span className="uppercase text-blue-500">Creative</span>{" "}
            Product? I <br />
            Can Help You!
          </h1>
          <p className="text-md leading-relaxed md:text-lg">
            Hi! I’m Madhav Banjade, and I’m a Software developer passionate about
            building clean web applications with intuitive functionalities. I
            enjoy the process of turning ideas into reality using creative
            solutions. I’m always curious about learning new skills, tools, and
            concepts. In addition to working on various solo full-stack
            projects, I have collaborated with creative teams, involving daily
            stand-ups, source control, and project management.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="/Madhav Banjade Resume.pdf" // Replace with the correct path to your resume
              download="My_CV.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg uppercase transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
