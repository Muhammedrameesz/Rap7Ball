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
const handleButtonClick = () => {
  const scrollAmount = document.body.scrollHeight * 0.2;
  window.scrollTo({
    top: scrollAmount,
    behavior: "smooth",
  });
};
const GalleryHeader = () => {
  const text =
    "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, repellat? Autem vero dolores ratione, at, vel molestiae ut quia libero deleniti laboriosam iusto nemo asperiores quos illo suscipit atque unde?.";
  return (
    <div className="bg-white text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center  "
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/yellow-color-powder-around-white-border-frame-painted-wall_23-2147949176.jpg?t=st=1744288240~exp=1744291840~hmac=3ba7ced9affe3db97b7e3120ae604848de5f42d79a7d17fb4d1d1f26af2b2393&w=996)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="relative z-10 text-center px-6  "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-5 md:mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to the RaP7 Gallery
        </motion.h1>

        <motion.p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed tracking-wide max-w-2xl">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className={char === " " ? "inline-block w-1" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.button
          onClick={handleButtonClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 mt-5 md:mt-10 cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GalleryHeader;
