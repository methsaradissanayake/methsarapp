import React from "react";
import aboutImg from "../assets/qqqq.png";
import cvFile from "../assets/Methsara-CV.pdf"; // Adjust this path based on where your CV file is located

const About = () => {
  return (
    <section id="about" className="py-8 text-white min-h-screen">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold pt-10">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify text-xl">
              I am a passionate full-stack developer skilled in creating innovative web applications. Currently pursuing my degree at the University of Moratuwa, I specialize in both front-end and back-end development.

I thrive on solving complex challenges and am dedicated to contributing to impactful projects that enhance user experiences and drive positive change. With a commitment to continuous learning, I enjoy collaborating with dynamic teams to bring ideas to life.
              </p>
              <a href={cvFile} download="Methsara-cv">
                <button className="border-2 h-10 w-[150px] border-cyan-600 rounded-full btn-primary mt-16 text-lg bg-cyan-600">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="md:mt-[-60px] flex justify-center items-center">
            <div className="lg:w-[500px] h-[500px] relative sm:w-10/12 w-11/12 max-w-sm aboutImg"> {/* Increased width and height */}
              <img src={aboutImg} alt="About" className="w-full h-full object-cover" /> {/* Use object-cover to maintain aspect ratio */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
