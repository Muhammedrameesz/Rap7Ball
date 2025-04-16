"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageLog from "@/images/RaP7_Step_by_Step_Procedure_page-0003-removebg-preview.png";
import Banner from "@/images/banner/banner-bg.jpg";

export default function Hero() {
  return (
    <div className="max-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${Banner.src})`,
        }}
      />

      {/* Foreground Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" flex items-center justify-center"
      >
        <div className="relative w-72 sm:w-96 md:w-[690px] h-auto ">
          <Image
            src={ImageLog}
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
