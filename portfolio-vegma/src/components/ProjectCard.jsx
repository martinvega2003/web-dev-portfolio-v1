import React from "react";
import { motion, useAnimationControls } from "framer-motion";

export const ProjectCard = ({ name, desc, linkToCode, linkToDeploy, backgroundImage }) => {
    // Framer Motion controls
    const animationControls = useAnimationControls();

    // Handlers
    const handleHover = () => {
        animationControls.start("show");
    };

    const handleHoverEnd = () => {
        animationControls.start("hide");
    };

    return (
        <motion.div
            className={`relative w-96 h-72 bg-black overflow-hidden flex items-center justify-center transition-all duration-200 cursor-pointer`}
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            whileHover={handleHover}
            onHoverEnd={handleHoverEnd}
        >
            <motion.div
                className="absolute bottom-[-100%] z-10 opacity-90 w-full h-4/5 bg-gray-300 pl-4 flex flex-col items-start justify-center transition-all duration-200"
                initial={{ bottom: "-100%" }}
                variants={{ show: { bottom: 0 }, hide: { bottom: "-100%" } }}
                animate={animationControls}
            >
                <h2 className="text-base text-left text-primary font-extrabold">
                    {name}
                </h2>
                <p className="text-left text-sm w-4/5 text-secondary">
                    {desc}
                </p>
                <div className="w-full flex items-center justify-start">
                    <a
                        href={linkToCode}
                        className="mr-4 font-bold text-primary transition-all duration-200 hover:text-black"
                    >
                        See Code
                    </a>
                    <a
                        href={linkToDeploy}
                        className="font-bold text-primary transition-all duration-200 hover:text-black"
                    >
                        See Website
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

