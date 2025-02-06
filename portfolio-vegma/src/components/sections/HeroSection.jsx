import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../images/hero-image-v1.webp"

const HeroSection = () => {
  return (
    <motion.div
      className="w-full h-fit bg-gradient-to-l from-primary via-primary to-primary md:from-primary md:via-primary md:to-blue-950 px-20 py-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full relative">
        {/* Decorative Line and Circles */}
        <motion.div
          className="absolute left-0 right-0 top-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-accent rounded-full absolute left-0 sm:-left-8"></div>
          <div className="w-16 h-16 bg-accent rounded-full absolute right-0 sm:-right-8"></div>
          <div className="h-[2px] w-full bg-accent"></div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-start items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-9 md:mb-0">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-white leading-tight mt-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Modern Websites Built <span className="text-blue-400">Just for You</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-md lg:text-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A stunning, fully owned website for your business in just 14 days. 
              No hidden fees, no strings attached—pay only when satisfied.
            </motion.p>

            {/* Animated Button with Hover Effect */}
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center">
              <button
                className="mt-8 w-64 py-3 text-sm md:text-md font-semibold text-primary hover:text-white bg-white hover:bg-transparent border-2 border-white shadow-lg hover:scale-110 transition duration-200"
              >
                <Link to="form/">Get Started Today</Link>
              </button>
              <button
                className="sm:mt-8 w-64 py-3 text-sm md:text-md font-semibold hover:text-primary text-white hover:bg-white bg-transparent border-2 border-white shadow-lg hover:scale-110 transition duration-200"
              >
                <a href="#examples">See Examples</a>
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={heroImg} alt="Laptops Images" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

