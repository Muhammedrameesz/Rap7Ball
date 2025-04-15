"use client";

import Image from "next/image";
import ImageLog from "@/images/RaP7_removebg-preview.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="py-10 px-4 md:px-16 min-h-screen flex items-center justify-center text-gray-950">
      <div className="absolute z-[-1] left-1/2 top-0 h-full w-[50%] bg-yellow-500"></div>

      <main className="grid grid-cols-1 md:grid-cols-2 items-center  w-full max-w-7xl">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-950">
            Welcome to <br />
            <span className="text-customBlue text-6xl md:text-7xl">
              RaP <span className="text-red-500 text-7xl md:text-8xl">7</span>{" "}
              Ball
            </span>
          </h1>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2  md:-translate-y-1/2 w-full md:w-[50%] h-64 md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={ImageLog}
              alt="image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
}
