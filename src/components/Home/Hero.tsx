"use client";

import Image from "next/image";
import ImageLog from "@/images/RaP7_removebg-preview.png";
import { motion } from "framer-motion";


export default function Hero() {
  const text =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,pariatur.";
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const handleButtonClick = () => {
    const scrollAmount = document.body.scrollHeight * 0.07;
    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth", 
    });
  };
  
  return (
    <div className="py-10 px-4 md:px-16  min-h-screen  text-text-gray-950">
      <div
        className="absolute z-[-1] inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-blue-light-gradient-blurred-colorful-gradient-background_558873-57779.jpg?w=1380)`,
        }}
      ></div>
      <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10  z-20 mx-w-7xl">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl text-gray-950 md:text-6xl font-bold  leading-tight">
            Welcome to <br />{" "}
            <span className="text-customBlue text-6xl md:text-7xl">
              RaP <span className="text-red-500 text-7xl md:text-8xl">7</span>{" "}
              Ball
            </span>
          </h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-950 leading-relaxed tracking-wide">
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
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Learn More
          </motion.button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden ">
            {/* <div className="absolute inset-0 bg-black/70"></div> */}
            <Image
              src={ImageLog}
              alt="image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
}
