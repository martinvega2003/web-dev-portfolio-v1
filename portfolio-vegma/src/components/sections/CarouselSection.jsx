import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projectsData as projects } from "../../data/projectsData";

const CarouselSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="examples" className="h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h2 className="text-primary text-4xl font-bold mb-8 text-center">
        Here are examples of my work in your industry...
      </h2>

      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-accent text-3xl hover:scale-110 transition-transform duration-200 z-20"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Cards Wrapper */}
        <div
          className="flex justify-start transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full my-16 flex-shrink-0 flex flex-col md:flex-row items-center md:items-start justify-start p-8 space-y-6 border-2 border-primary rounded-tr-[50px] rounded-bl-[50px] shadow-2xl bg-white"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-[30%] h-auto object-cover"
              />

              {/* Content Container */}
              <div className="flex flex-col items-start justify-start max-w-md md:ml-6">
                {/* Project Title */}
                <h3 className="text-3xl text-left font-bold text-primary mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-lg leading-relaxed text-left">
                  {project.description}
                </p>
                {/* Link */}
                <Link
                  to={project.link}
                  className="text-secondary hover:text-accent text-left font-bold relative flex justify-start items-center mt-4 transition-transform hover:scale-105"
                >
                  See more of this project <span className="ml-2"><FaArrowRight /></span>
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-secondary hover:bg-primary transition-all duration-300 hover:w-full hover:left-0"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-accent text-3xl hover:scale-110 transition-transform duration-200 z-20"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
