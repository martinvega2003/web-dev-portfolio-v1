import React from "react";
import { motion } from "framer-motion";
import { processData as process } from "../../data/processData";

const ProcessSection = () => {

  return (
    <div className="bg-white pt-48 pb-24">
      <div className="px-6">
        <h2 className="text-4xl font-semibold text-primary text-center">Our Website Building Process</h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          A simple and efficient process to deliver your website in just 7 days.
        </p>

        {/* Timeline & Cards */}
        <div className="mt-12 relative">
          {/* Timeline */}
          <div className="flex flex-col items-center">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="flex w-full items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }} // Trigger when 50% of the element is visible
                transition={{ duration: 0.4, delay: index * 0.1 }} // Faster duration and minimal delay
              >
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  {item.day ? (
                    <div className="h-16 sm:h-20 w-16 sm:w-20 text-sm md:text-md bg-accent text-white font-bold flex items-center justify-center rounded-full shadow-md border border-accent mb-6">
                      {item.day}
                    </div>
                  ) : (
                    <div className="w-16 h-16"></div>
                  )}
                  {/* Timeline Line */}
                  {index < process.length - 1 && (
                    <div className="h-16 w-1 bg-gradient-to-b from-accent to-blue-300"></div>
                  )}
                </div>

                {/* Card */}
                <div className={`ml-8 flex-grow flex flex-col ${index % 2 === 0 ? "md:flex-row bg-primary" : "md:flex-row-reverse bg-secondary"} text-white items-start p-6 rounded-lg shadow-2xl cursor-pointer`}>
                  <div className="flex flex-col w-full  md:w-1/2 p-2">
                    <div className="flex justify-start items-center mb-2">
                      <div className="mr-4 text-3xl sm:text-5xl">{<item.icon />}</div>
                      <h3 className="text-md sm:text-2xl font-extrabold">{item.step}</h3>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: item.description}} className="text-sm sm:text-lg mt-2 text-gray-300" />
                  </div>
                  <div className="w-full md:w-1/2 h-full flex justify-center items-center p-2">
                    <img src={item.image} alt="" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

