import React from "react";
import { motion } from "framer-motion";
import professionalPic from "../../images/professional-pic.webp"

const AboutMe = () => {
  return (
    <div id="about" className="bg-white pt-8 sm:pt-20">
      <div>
        {/* About Me Text Section */}
        <motion.div
          className="flex flex-col items-center md:flex-row-reverse md:justify-around md:items-end lg:items-center mt-12 px-3 sm:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full md:w-1/2 p-8 shadow-2xl rounded-3xl mb-6 md:mb-12 lg:mb-20">
            {/* Header Section with Name */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="w-full py-1 mb-2 text-secondary font-light italic text-sm border-b-2">
                Let me introduce myself
              </p>
              <h1 className="text-2xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-primary">Hi, I'm Martin Vega</h1>
            </motion.div>
            <div className="w-full mt-3 text-secondary text-md leading-relaxed">
              <p>
                I'm a 21-year-old passionate web developer and computer science student currently on a full paid scholarship at my university. I'm deeply in love about creating <strong>modern</strong> and <strong>efficient</strong> websites that help businesses <strong>stand out online</strong>.
              </p>
              <p className="mt-3">
                I specialize in building fully <strong>custom coded</strong> websites for businesses, ensuring they are not only <strong>functional</strong> and <strong>visually appealing</strong>, but also extremely <strong>secure</strong>, <strong>fast</strong> and <strong>high-performance</strong>. I believe in the power of great design and seamless user experiences.
              </p>
            </div>
          </div>
          {/* Image or Avatar (Optional) */}
          <div className="md:w-[40%] h-auto flex justify-center mt-6 md:mt-0">
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
