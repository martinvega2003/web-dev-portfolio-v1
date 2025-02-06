import React from "react";
import { motion } from "framer-motion";
import professionalPic from "../../images/professional-pic.jpeg"

const AboutMe = () => {
  return (
    <div id="about" className="bg-white pt-40">
      <div className="mx-auto flex flex-col justify-start items-center">
        {/* Header Section with Name */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-accent">Hi, I'm Martin Vega</h1>
          <p className="px-12 md:px-0 text-lg mt-4 text-secondary">A passionate web developer with a love for building modern, stunning websites.</p>
        </motion.div>

        {/* About Me Text Section */}
        <motion.div
          className="max-w-5xl flex flex-col items-center md:flex-row-reverse md:justify-around md:items-start mt-12 px-12 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full sm:w-[90%] md:w-[45%] text-white bg-primary text-lg leading-relaxed mb-8 p-8 shadow-2xl border rounded-br-[100px]">
            <p>
              I'm a 21-year-old computer science student currently on a full paid scholarship at my university. I'm deeply passionate about creating modern and efficient websites that help businesses stand out online.
            </p>
            <p className="mt-6">
              I specialize in building fully custom websites for businesses, ensuring they are not only functional but also visually appealing. I believe in the power of great design and seamless user experiences.
            </p>
          </div>
          {/* Image or Avatar (Optional) */}
          <div className="md:w-[30%] h-auto flex justify-center mt-6 md:mt-0">
            <img
              src={professionalPic || "https://via.placeholder.com/200"}
              alt="Martin Vega"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-primary min-w-full py-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold text-white">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {/* Skill Badges */}
            {[
              { name: "HTML", color: "bg-orange-500 text-white " },
              { name: "CSS", color: "bg-blue-500 text-white " },
              { name: "JavaScript", color: "bg-yellow-500 text-white " },
              { name: "React", color: "bg-blue-600 text-white " },
              { name: "PostgreSQL", color: "bg-green-600 text-white " },
              { name: "Node.js / Express", color: "bg-white text-primary" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`px-6 py-3 rounded-lg ${skill.color} text-xl font-medium transition duration-300 hover:scale-125 cursor-pointer`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
