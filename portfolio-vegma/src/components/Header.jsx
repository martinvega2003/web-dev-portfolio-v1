import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Header = () => {
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);

  const toggleExamplesMenu = () => {
    setIsExamplesOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-200 to-white text-white shadow-2xl z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl text-primary font-bold">
          My Website
        </Link>
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <a
            href="#about"
            className="relative group text-lg transition-all transform hover:scale-105 text-primary hover:text-accent"
          >
            About
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="#service"
            className="relative group text-lg transition-all transform hover:scale-105 text-primary hover:text-accent"
          >
            Service
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href='#examples'
            className="relative group cursor-pointer text-lg text-primary hover:text-accent"
            onMouseEnter={() => setIsExamplesOpen(true)}
            onMouseLeave={() => setIsExamplesOpen(false)}
          >
            Examples
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            {isExamplesOpen && (
              <div className="absolute w-[160px] top-full left-0 bg-white text-primary shadow-lg py-2">
                {
                  projectsData.map(project => {
                    return (
                      <a
                        href={project.linkToDeployment}
                        className="block px-4 py-2 hover:bg-accent hover:text-white"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    )
                  })
                }
              </div>
            )}
          </a>
          {/* Contact Me Button */}
          <Link
            to="/form"
            className="px-4 py-2 rounded-full bg-primary hover:bg-transparent hover:text-primary border-2 border-primary font-bold transition-all"
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;



