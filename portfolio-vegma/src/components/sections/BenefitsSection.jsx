import React from "react";
import {
  FaRegCheckCircle,
  FaLock,
  FaDollarSign,
  FaRocket,
  FaSearch,
  FaCog,
} from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <div className="relative py-24 bg-white text-gray-800">
      <div className="absolute inset-0 opacity-40">
        <div className="h-1/3 md:h-2/4 w-full bg-transparent"></div>
        <div className="h-1/3 md:h-1/4 w-full bg-blue-300"></div>
        <div className="h-1/3 md:h-1/4 w-full bg-blue-400"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-bold text-accent mb-6">
          Here's How I Can Help You
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          My mission is to provide you with a high-quality, fully customizable
          website that empowers your business. And after that, help you rank it 
          to get more leads on autopilot everyday
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 border shadow-sm transition duration-300 transform cursor-pointer group
              hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-accent"
            >
              <div
                className="mb-4 flex justify-center text-accent 
                group-hover:text-white transition-colors duration-300"
              >
                {benefit.icon}
              </div>
              <h3
                className="text-xl font-semibold text-accent mb-4 
                group-hover:text-white transition-colors duration-300"
              >
                {benefit.title}
              </h3>
              <p
                className="text-secondary group-hover:text-white 
                transition-colors duration-300"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Full Ownership",
    description:
      "You get complete control over your website—no more dependency on external platforms like WordPress or Figma.",
    icon: <FaLock size={40} />,
  },
  {
    title: "Lower Maintenance Costs",
    description:
      "With a custom-coded site, say goodbye to recurring fees and costly updates.",
    icon: <FaDollarSign size={40} />,
  },
  {
    title: "Highly Customizable",
    description:
      "Tailored to fit your business needs and branding, making your website unique and impactful.",
    icon: <FaCog size={40} />,
  },
  {
    title: "Faster Performance",
    description:
      "Optimized for speed to keep your visitors engaged and improve your conversions.",
    icon: <FaRocket size={40} />,
  },
  {
    title: "SEO Friendly",
    description:
      "Built with search engines in mind, helping your business rank higher and reach more customers.",
    icon: <FaSearch size={40} />,
  },
  {
    title: "Affordable Pricing",
    description:
      "The website is FREE to you, you only pay for the maintenance and SEO optimization if you decide so",
    icon: <FaRegCheckCircle size={40} />,
  },
];

export default BenefitsSection;
