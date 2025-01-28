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
    <div className="relative z-10">
      <div className="relative w-full top-0 h-72 bg-white mb-24" />
      <div className="md:flex md:justify-start md:items-end">
        <div className="bg-white/80 -mb-24 lg:ml-16 p-8 w-[95%] sm:w-[90%] lg:max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-center shadow-2xl rounded-lg border-2 border-primary">
          {/* Left Side: Text Content */}
          <motion.div
            className="lg:w-[45%] mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftTextVariants}
          >
            <h2 className="text-2xl xl:text-4xl font-bold mb-4 text-accent">My Offer</h2>
            <p className="text-md xl:text-lg leading-relaxed text-secondary">
              Get a fully custom, hard-coded website built in just 7 days for{" "}
              <span className="font-extrabold">FREE</span>. You pay only if you're satisfied with the final product. After payment, I handle the full setup for you, ensuring your site is live and accessible to your audience.  
              I will help you with contentcreation, publishing three articlesper week, SEO and conversion rate optimization for a whole year, ensuring your website become an everyday lead-generator for your business within 12 months,
              with a money back guarantee.
            </p>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block mx-4 border-l-2 border-accent" style={{ minHeight: "400px", paddingTop: "32px" }} />
          
          {/* Horizontal Divider */}
          <div className="block lg:hidden my-4 border-b-2 border-accent" style={{ minWidth: "100%" }} />

          {/* Right Side: Bullet Points */}
          <motion.div
            className="lg:w-[55%] flex items-start pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="space-y-4">
              {[
                "Full ownership of your website with no hidden costs.",
                "Highly customizable—adapt your site to your needs.",
                "Delivered and ready to go live in just 7 days.",
                "Don't worry about all the process of making the website rank.",
                "All the services needed to make your websites a lead generator bundle together",
                "After payment, you still have a money back guarantee",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={bulletPointVariants}
                  custom={index}
                  className={`flex items-start ${index === 0 ? "mt-[-20px]" : ""}`}
                >
                  <FaCheckCircle className="min-w-5 min-h-5 text-accent mr-3 mt-1" />
                  <span className="text-secondary text-md xl:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="w-[15%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default MyOfferSection;

