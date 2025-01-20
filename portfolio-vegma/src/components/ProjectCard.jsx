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
            className={`relative w-96 h-72 bg-black overflow-hidden m-5 flex items-center justify-center rounded-2xl transition-all duration-200 hover:scale-110 hover:shadow-xl`}
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            whileHover={handleHover}
            onHoverEnd={handleHoverEnd}
        >
            <h4 className="font-montserrat text-white text-3xl">
                Proyecto #{numero}
            </h4>
            <motion.div
                className="absolute bottom-[-100%] z-10 opacity-90 w-full h-4/5 bg-gray-300 flex flex-col items-start justify-center transition-all duration-200"
                initial={{ bottom: "-100%" }}
                variants={{ show: { bottom: 0 }, hide: { bottom: "-100%" } }}
                animate={animationControls}
            >
                <h2 className="text-base text-left text-black pl-2">
                    {name}
                </h2>
                <div className="flex flex-wrap items-center justify-start">
                    {stack.map((stackItem, index) => (
                        <h4
                            key={index}
                            className="text-primary text-sm mx-2 border-b-2 border-black transition-all duration-200 hover:scale-110"
                        >
                            {stackItem}
                        </h4>
                    ))}
                </div>
                <p className="text-left text-sm w-4/5 text-black pl-2">
                    {desc}
                </p>
                <div className="w-full px-4 flex items-center justify-start">
                    <a
                        href={linkToCode}
                        className="mr-4 font-bold text-primary transition-all duration-200 hover:text-black"
                    >
                        ver codigo
                    </a>
                    <a
                        href={linkToDeploy}
                        className="font-bold text-primary transition-all duration-200 hover:text-black"
                    >
                        ver proyecto
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

