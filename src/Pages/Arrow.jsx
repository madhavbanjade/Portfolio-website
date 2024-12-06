import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the up-arrow icon

const Arrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-16">
      {/* Your other sections here */}

      {/* Back to Top Arrow */}
      <div className="fixed bottom-4 md:bottom-10 right-10 md:right-10 z-50">
        <button
          onClick={scrollToTop}
          className="bg-blue-400 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-300 transition"
        >
          <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" /> {/* Up arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default Arrow;
