import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-2 md:p-6 md:mt-20 mt-[50px] min-h-screen md:h-full">
      <div className="w-full max-w-4xl rounded-lg md:p-1 p-2 flex flex-col justify-between">
        {/* Heading */}
        <div className="md:text-left text-left leading-6 sm:pl-0 pl-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            I am excited to learn about your{" "}
            <span className="uppercase">project</span>. <br /> Ready to get
            started?
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-6">
            Get in touch and let me know how I can help. Contact me and I’ll be
            in touch as soon as possible.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 sm:space-y-2">
          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 text-left sm:text-left">
            <FaMapMarkerAlt className="text-2xl text-blue-400  sm:mx-0 " />
            <div>
              <h2 className="text-lg font-bold">Address:</h2>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 text-left sm:text-left">
            <FaPhoneAlt className="text-2xl text-blue-400 sm:mx-0" />
            <div>
              <h2 className="text-lg font-bold">Phone:</h2>
              <p>+9779749344926</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 text-left sm:text-left">
            <FaEnvelope className="text-2xl text-blue-400  sm:mx-0" />
            <div>
              <h2 className="text-lg font-bold">Email:</h2>
              <p>madhavbanjade005@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-4 sm:space-x-6">
          <a
            href="https://wa.me/9749344926"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-blue-400 p-3 text-blue-400 cursor-pointer"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/madhav-banjade-153828328/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-blue-400 p-3 text-blue-400 cursor-pointer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
