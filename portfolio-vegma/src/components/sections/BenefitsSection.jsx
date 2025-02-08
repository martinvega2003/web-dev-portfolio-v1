import React from "react";
import {
  FaRegCheckCircle,
  FaLock,
  FaDollarSign,
  FaRocket,
  FaSearch,
  FaCog,
  FaMobileAlt,
  FaExpand,
  FaShieldAlt
} from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <div className="relative py-24 bg-white text-gray-800">
      <div className="absolute inset-0 opacity-40">
        <div className="h-1/3 md:h-1/3 w-full bg-transparent"></div>
        <div className="h-1/3 md:h-1/3 w-full bg-blue-300"></div>
        <div className="h-1/3 md:h-1/3 w-full bg-blue-400"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-bold text-accent mb-6">
          Here's How I Can Help You
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          My mission is to provide you with a <strong>high-quality</strong>, <strong>fully customizable </strong> 
          and <strong>custom coded</strong> website that empowers your business. After that, help you maintaining it 
          to get more leads on autopilot everyday. I will fix any bugs, make any updates you want,
          and be sure you have a <strong>fast-loading</strong> website google likes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white h-full p-6 border shadow-sm transition duration-300 transform cursor-pointer group
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
      "Your website is yours forever. You get complete control over your website—no more dependency on external platforms like WordPress or Figma.",
    icon: <FaLock size={40} />,
  },
  {
    title: "Lower Maintenance Costs",
    description:
      "With a custom-coded site, you don't need to pay recurring fees for wordpress themes or any other platform subscription anymore.",
    icon: <FaDollarSign size={40} />,
  },
  {
    title: "Highly Customizable",
    description:
      "Tailored to fit your business needs and branding, making your website unique and impactful. Anything you ask can be done with custom code",
    icon: <FaCog size={40} />,
  },
  {
    title: "Faster Performance",
    description:
      "If you website takes 3 seconds to load, you can lose 50% of your visitors. Custom coded websites are optimized for speed",
    icon: <FaRocket size={40} />,
  },
  {
    title: "SEO Friendly",
    description:
      "Built with SEO in mind, helping your business reach more customers. Code from scratch if something google likes when done right",
    icon: <FaSearch size={40} />,
  },
  {
    title: "Affordable Pricing & Guarantee",
    description:
      "The website is FREE to you, you only pay for the maintenance and SEO optimization if you like it. If not, you pay nothing.",
    icon: <FaRegCheckCircle size={40} />,
  },
  {
    title: "Mobile First Design",
    description:
      "I start writing the code with mobile users in mind, ensuring the code is cleaner when making it responsive for all screen sizes.",
    icon: <FaMobileAlt size={40} />, // Updated icon
  },
  {
    title: "Fully Responsive",
    description:
      "58% of users now use phones to visit your site, and Google ranks sites optimized for these devices higher. Don't lose more than half of your leads.",
    icon: <FaExpand size={40} />, // Updated icon
  },
  {
    title: "Support & Security",
    description:
      "I offer affordable support pricing for you to have peace of mind about it. Your site will be highly secure (custom coded) and free of any bugs or flaws.",
    icon: <FaShieldAlt size={40} />, // Updated icon
  },
];

export default BenefitsSection;
