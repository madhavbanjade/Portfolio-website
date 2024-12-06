import React from "react";

const Projects = () => {
  // Example project data
  const projectList = [
    {
      id: 1,
      title: "Real-State Platform",
      description:
        "The Real estate platform leverages the power of the MERN stack, Firebase, and Redux to deliver a seamless experience.",
      image: "/public/reaakstate2.webp",
      link: "https://gharjagga-nepal.onrender.com/",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "This is my portfolio where I am showing my skills project using ReactJs and TailwindCss.",
      image: "/canva-green-modern-portfolio-cover-page-g9xqBFDoldA.jpg",
      link: "",
    },
  ];

  return (
    <section className="p-4 md:p-6 lg:mt-24 sm:mt-12 mt-[50px]">
      {/* Header Section */}
      <div className="md:ml-52 ml-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-left lg:text-left">
          See My Works That Will <span className="">Amaze</span> You!
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-left lg:text-left">
          We develop the best quality websites that serve for the long-term.
          <br />
          Well-documented, clean, easy, and elegant interfaces help any
          non-technical clients.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-48 lg:h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-2 uppercase">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base leading-6 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm sm:text-base"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
