import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center max-w-3xl relative">
        {/* Decorative Line and Circles */}
        <motion.div
          className="absolute left-0 right-0 top-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-accent rounded-full absolute -left-8"></div>
          <div className="w-16 h-16 bg-accent rounded-full absolute -right-8"></div>
          <div className="h-[2px] w-full bg-accent"></div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight mt-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Modern Websites Built <span className="text-blue-400">Just for You</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A stunning, fully owned website for your business in just 7 days. 
          No hidden fees, no strings attached—pay only when satisfied.
        </motion.p>

        <motion.p
          className="mt-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          For <span className="font-bold">FREE</span>.
        </motion.p>

        {/* Animated Button with Hover Effect */}
        <div className="w-full flex gap-6 justify-center items-center">
          <button
            className="mt-8 w-52 py-3 text-lg font-semibold text-primary hover:text-white bg-white hover:bg-transparent border-2 border-white shadow-lg hover:scale-110 transition duration-200"
          >
            <Link to="form/">Get Started Today</Link>
          </button>
          <button
            className="mt-8 w-52 py-3 text-lg font-semibold hover:text-primary text-white hover:bg-white bg-transparent border-2 border-white shadow-lg hover:scale-110 transition duration-200"
          >
            <Link to="form/">See Examples</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

