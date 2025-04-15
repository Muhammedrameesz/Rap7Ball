"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

const GalleryHeader = () => {
  const text = "Welcome To The RaP7Ball Gallery";

  return (
    <div className=" bg-white text-white min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/yellow-color-powder-around-white-border-frame-painted-wall_23-2147949176.jpg?t=st=1744288240~exp=1744291840~hmac=3ba7ced9affe3db97b7e3120ae604848de5f42d79a7d17fb4d1d1f26af2b2393&w=996)`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Animated Text */}
      <motion.div
        className="relative z-10 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className={`inline-block ${
                char === " " ? "w-3" : ""
              } ${index === 15 || index === 16 || index === 17 || index === 19 || index===20 || index===21 ||index===22 ? "text-red-500":""}
                ${index===18 && "text-customBlue text-5xl md:text-6xl lg:text-7xl"}
              `} 
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default GalleryHeader;
