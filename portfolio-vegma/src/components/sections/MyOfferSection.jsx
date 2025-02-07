import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { benefitsData as benefits } from "../../data/benefitsData";

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
    <div className="relative z-10 p-6 sm:p-0">
      <div className="flex justify-center md:justify-start items-center md:items-end">
        <div className="bg-white/80 p-8 w-[95%] sm:w-[90%] md:max-w-[60%] flex flex-col items-start justify-center shadow-2xl rounded-lg border-2 border-primary md:shadow-none md:rounded-none md:border-none">
          {/* Left Side: Text Content */}
          <motion.div
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftTextVariants}
          >
            <p className="text-sm sm:text-md italic font-light mb-4 text-accent border-b-2 border-accent">What I Offer</p>
            <h1 className="text-xl sm:text-3xl xl:text-5xl font-extrabold mb-4">Not Just A Website, But Peace Of Mind Too</h1>
            <p className="text-sm sm:text-md xl:text-lg leading-relaxed text-secondary">
              <strong>95% of websites without maintenance lose their traffic within six months.</strong> Most business owners invest in getting a website built but don’t realize that <strong>without regular updates, security checks, and SEO improvements, their site becomes invisible to potential customers.</strong>
              <br/><br/>
              <ul className="space-y-3">
                <li><strong>75% of users judge a business’s credibility based on its website design and performance.</strong> If your site loads slowly, looks outdated, or has errors, potential clients will leave before even considering your offer.</li>
                <li><strong>53% of mobile users abandon a website if it takes more than 3 seconds to load.</strong> A well-maintained website ensures fast loading speeds, seamless browsing, and a great user experience across all devices.</li>
                <li><strong>92% of search traffic goes to the first page of Google.</strong> Without proper SEO, your site remains hidden while your competitors attract all the traffic.</li>
              </ul>
              <br/>
              Get a <strong>custom-built website 100% free</strong> when you subscribe to my <strong>affordable website maintenance & SEO plan.</strong> I’ll design and develop your site from scratch—<strong>you only pay if you love it.</strong> If you’re not satisfied, you keep the code at no cost. My service ensures your website <strong>runs smoothly, stays secure, and attracts clients,</strong> so you never have to worry about technical issues or SEO again.
            </p>
            <div className="w-full border-t-2 border-accent my-6"></div>
          </motion.div>

          {/* Bottom Side: Bullet Points */}
          <motion.div
            className="flex items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full flex flex-col md:flex-row justify-start items-start flex-wrap">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={bulletPointVariants}
                  custom={index}
                  className="w-full lg:w-[45%] flex items-start rounded-3xl py-3 my-3 mr-3 lg:mr-6"
                >
                  <FaCheckCircle className="min-w-7 min-h-7 text-accent mr-3 mt-1" />
                  <div className="w-full">
                    <h3 className="font-bold text-xl text-primary">{item.title}</h3>
                    <p className="text-secondary text-sm xl:text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="w-[15%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default MyOfferSection;
