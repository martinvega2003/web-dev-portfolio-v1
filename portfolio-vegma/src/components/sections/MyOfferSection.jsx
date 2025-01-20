import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const MyOfferSection = () => {
  const leftTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const bulletPointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 },
    }),
  };

  return (
    <div className="relative -z-10 pt-64 pb-24 bg-white">
      <div className="absolute inset-0 opacity-40 -z-20">
        <div className="h-1/2 w-full bg-transparent"></div>
        <div className="h-1/2 w-full bg-gray-200"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="md:w-[45%] mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftTextVariants}
        >
          <h2 className="text-4xl font-bold mb-4 text-accent">My Offer</h2>
          <p className="text-lg leading-relaxed text-secondary">
            Get a fully custom, hard-coded website built in just 7 days for only{" "}
            <span className="font-bold">$97</span>. You pay only if you're satisfied with the final product. After payment, I handle the full setup for you, ensuring your site is live and accessible to your audience.  
            No more dealing with the limitations and extra costs of platforms like WordPress or Figma. You get complete ownership of your site, without ongoing maintenance fees or customization headaches.
          </p>
        </motion.div>

        {/* Vertical Divider */}
        <div className="hidden md:block mx-4 border-l-2 border-accent" style={{ minHeight: "400px", paddingTop: "32px" }} />
        
        {/* Horizontal Divider */}
        <div className="block md:hidden my-4 border-b-2 border-accent" style={{ minWidth: "100%" }} />

        {/* Right Side: Bullet Points */}
        <motion.div
          className="md:w-[45%] flex items-start pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ul className="space-y-4">
            {[
              "Full ownership of your website with no hidden costs.",
              "Highly customizable—adapt your site to your needs.",
              "No dependency on CMS platforms like WordPress or Figma.",
              "Optimized for speed, SEO, and user experience.",
              "Delivered and ready to go live in just 7 days.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={bulletPointVariants}
                custom={index}
                className={`flex items-start ${index === 0 ? "mt-[-16px]" : ""}`}
              >
                <FaCheckCircle className="text-accent mr-3 mt-1" size={24} />
                <span className="text-secondary">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MyOfferSection;

