import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { X, Github, Eye } from "lucide-react";

// Assuming these imports are correct in your project structure
import project1 from "../assets/gradient-ui-ux-background_23-2149052117.avif";
import project2 from "../assets/5.jpg";
import project3 from "../assets/6.jpeg";
import project4 from "../assets/7.jpg";

import "swiper/css";
//import "swiper/css/pagination";

const projects = [
  {
    img: project1,
    name: "UI/UX Designer",
    description: "Designing intuitive and aesthetically pleasing interfaces that enhance user experience. We focus on user-centered designs that combine functionality with a seamless look and feel.",
  },
  {
    img: project2,
    name: "Web Developer",
    description: "Crafting scalable, responsive, and dynamic web applications with clean code and optimal performance, tailored to enhance your business's online presence and user engagement.",
  },
  {
    img: project3,
    name: "Mobile App Developer",
    description: "Creating innovative, user-friendly mobile apps that deliver seamless performance and engaging experiences on both Android and iOS platforms effectively and efficiently.",
  },
  {
    img: project4,
    name: "Desktop App Developer",
    description: "Developing powerful, user-friendly desktop applications tailored for optimal performance, providing robust functionality, seamless user experience, and innovative features. ",
  },
];

const buttonClasses = "flex items-center gap-2 text-lg px-4 py-2 bg-slate-800 text-cyan-400 border border-cyan-400 rounded-md cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:text-slate-800 active:scale-95";

const ProjectCard = ({ project, onView }) => (
  <div className="h-fit w-full p-6 bg-slate-700 rounded-xl max-w-md mx-auto">
    <img src={project.img} alt={project.name} className="rounded-lg w-full h-64 object-cover" />
    <h3 className="text-2xl my-4 text-center text-cyan-500">{project.name}</h3>
    <p className="text-lg my-4 text-center">{project.description}</p>
    <div className="flex justify-between mt-4">
      {/* You can add buttons or other elements here if needed */}
    </div>
  </div>
);

const Service = () => {
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
          My <span className="text-cyan-600">Services</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Developments</p>
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
    </section>
  );
};

export default Service;
