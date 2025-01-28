import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyServiceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      id="service"
      className="relative z-20 text-center flex flex-row-reverse justify-center md:justify-start md:pr-16 overflow-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Content Section */}
      <motion.div
        className="h-full w-[95%] sm:w-[90%] md:max-w-3xl bg-white/80 p-12 text-left rounded-tl-[100px] rounded-br-[100px] -mb-16 mt-16 border-2 border-accent shadow-2xl"
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-6 text-accent">My Service</h2>
        <p
          className="text-lg text-secondary leading-relaxed mx-auto w-180 mix-blend-normal"
          style={{ maxWidth: "100%" }}
        >
          I specialize in crafting custom-coded websites tailored to meet the
          unique needs of your business. Unlike templates or pre-built
          solutions, every website I create is hard-coded, providing you with
          unparalleled customization options and full ownership—no hidden
          dependencies or licensing issues. Your website will be optimized for
          a seamless user experience and greater visibility online. Once the 
          website is ready, I’ll handle the setup to make it live and accessible 
          to your audience. After the delivery, I’ll always be available to 
          address bugs or technical issues, ensuring your site stays functional 
          and stress-free, helping you rank in the first google page with content 
          creation and SEO optimization for the upcoming months. <br/><span className="font-bold">Elevate your
          business online with a solution that’s built just for you.</span>
        </p>
        <div className="min-w-full flex flex-row-reverse justify-start">
          <motion.button
            className="mt-16 px-6 py-3 text-lg font-semibold text-white bg-accent rounded-lg shadow-lg 
              transform hover:scale-110 hover:brightness-110 transition duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="form/">Get Started Today</Link>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyServiceSection;
