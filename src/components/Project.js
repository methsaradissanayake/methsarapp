import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { X, Github, Eye } from "lucide-react";

// Assuming these imports are correct in your project structure
import project1 from "../assets/8.jpg";
import project2 from "../assets/9.png";
import project3 from "../assets/11.png";
import project4 from "../assets/10.png";

import "swiper/css";
// import "swiper/css/pagination";

const projects = [
  {
    img: project1,
    name: "Agrarian Trade System",
    description: "The Agrarian Trade System is an innovative platform designed to revolutionize the agricultural market by connecting farmers directly with consumers. This web application facilitates the seamless buying and selling of fresh vegetables and fruits, cutting out middlemen and ensuring that farmers receive fair prices for their produce.",
    github_link: "https://github.com/SynTec-Software-Project",
    status: "Completed", // Added status
    technologies:"React JS , ASP.Net Core ,MSSQL,Tailwind CSS , Azure Blob StorageTeam"
  },
  {
    img: project2,
    name: "Job Search Web App",
    description: "The Job Search Web App is a comprehensive platform that streamlines the job hunting process for users. This application allows job seekers to search for employment opportunities, create and manage their profiles, upload resumes, and apply for jobs directly through the platform.",
    github_link: "https://github.com/methsaradissanayake/New-job-portal",
    status: "Ongoing", // Added status
    technologies:"React JS,Node JS,MongoDB"

  },
  {
    img: project3,
    name: "Expense Tracker Application",
    description: "The Expenses Tracker App is a user-friendly platform designed to help individuals manage their personal finances efficiently. This application allows users to track their income and expenses, categorize transactions, set budget goals, and visualize spending patterns through intuitive charts and reports",
    github_link: "https://github.com/methsaradissanayake/Expenses-Tracker",
    status: "Ongoing", // Added status
    technologies:"React JS,Node JS,MongoDB "
  },
  {
    img: project4,
    name: "Portfolio",
    description: "A personal portfolio showcasing my projects and skills as a developer.",
    github_link: "https://github.com/methsaradissanayake/Portfolio-New",
    status: "Completed", // Added status
    technologies:"React JS, Tailwind css "
    
  },
];

const buttonClasses = "flex items-center gap-2 text-lg px-4 py-2 bg-slate-800 text-cyan-400 border border-cyan-400 rounded-md cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:text-slate-800 active:scale-95";

const ProjectCard = ({ project, onView }) => (
  <div className="h-fit w-full p-6 bg-slate-700 rounded-xl max-w-md mx-auto">
    <img src={project.img} alt={project.name} className="rounded-lg w-full h-64 object-cover" />
    <h3 className="text-xl my-4 text-center">{project.name}</h3>
    <div className="flex justify-between mt-4">
      <a
        href={project.github_link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <Github size={20} /> Github
      </a>
      <button 
        className={buttonClasses}
        onClick={() => onView(project)}
      >
        <Eye size={20} /> View
      </button>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-slate-800 p-12 rounded-lg max-w-3xl w-full"> {/* Increased padding and max width */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center w-full">{project.name}</h2> {/* Centering the project name */}
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>
      <img src={project.img} alt={project.name} className="w-full h-80 object-cover rounded-lg mb-4 mx-auto" /> {/* Centering the image */}
      <p className="text-gray-300 mb-4 text-sm text-center">{project.description}</p> {/* Centering the description */}
      <p className="text-white mb-4 text-sm text-center "><strong className="text-cyan-500">Status:</strong> {project.status}</p> {/* Adding status */}
      <p className="text-white mb-4 text-sm text-center "><strong className="text-cyan-500">Technologies:</strong> {project.technologies}</p> {/* Adding status */}
    
    </div>
  </div>
);

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleView = useCallback((project) => {
    setSelectedProject(project);
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-10 text-white min-h-screen">
      <div className="text-center">
        <h3 className="text-4xl font-semibold pt-16">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-6xl">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            modules={[Pagination, Autoplay]}
            className="pb-12"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} onView={handleView} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      {showModal && <ProjectModal project={selectedProject} onClose={handleClose} />}
    </section>
  );
};

export default Project;
