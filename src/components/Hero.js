// Hero.js
import React from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../assets/methsara.png";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-1 lg:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={Logo}
          alt="Methsara Dissanayake"
          className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm<span> Methsara Dissanayake</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button
            className="border-2 h-10 w-[120px] border-cyan-600 rounded-lg btn-primary mt-8 text-lg bg-cyan-600 animate-pulse"
            onClick={handleContact}
          >
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div className="text-gray-600 cursor-pointer flex gap-3">
              <a
                href="https://www.instagram.com/methsara__/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <SlSocialInstagram />
              </a>
              <a
                href="https://www.facebook.com/methsara.dissanayake.1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/methsara-dissanayake-79229a264/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/methsaradissanayake"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
