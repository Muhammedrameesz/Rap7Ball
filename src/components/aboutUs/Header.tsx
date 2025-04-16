"use client"


import RandomShapes from "@/app/_Animations/RandomPatterns";
import Banner from "@/images/banner/banner-bg1.jpg";
import { motion } from "framer-motion";


export default function AboutHeader() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[300px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${Banner.src})`, 
      }}
    >
      <motion.h1 
       initial={{opacity:0,x:-100}}
       animate = {{opacity:1,x:0}}
       transition={{
        duration:0.8,
        ease:"easeOut"
       }}
      className="text-center text-gray-900 font-bold text-2xl md:text-4xl lg:text-5xl">
        About Us
      </motion.h1>
      <RandomShapes />
    </div>
  );
}
