

"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react"; 
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white py-20 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center gap-3">
          <Info className="w-6 h-6  md:w-8 md:h-8 text-customBlue" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            About RaP7 Ball
          </h1>
        </div>

        <div className="relative mt-4 w-fit mx-auto">
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            This page contains all the details about the  <span className="ml-1 font-semibold text-black">RaP7 Ball</span>. Learn its rules, gameplay, and innovations combining Cricket & Baseball.
          </p>
          <span className="block mt-2 h-[3px] w-24 bg-customBlue mx-auto rounded-full animate-pulse" />
        </div>
      </motion.div>
    </header>
  );
}

