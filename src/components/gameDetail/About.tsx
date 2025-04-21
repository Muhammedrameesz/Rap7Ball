"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0003.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdSportsCricket } from "react-icons/md";
import {  GiCricketBat } from "react-icons/gi";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title:
      "Baseball is America’s National Pastime and Cricket is the second most popular sport in the world.",
    icon: <GiCricketBat size={20} />,
  },
  {
    title:
      "RaP7 Ball is a hybrid of Baseball and Cricket, blending rules and safety gear from both iconic sports.",
    icon: <MdSportsCricket size={20} />,
  },
  
];

export default function AboutTwo() {
  return (
    <div className="px-4 md:px-16 py-10 overflow-x-hidden bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
         initial={{ opacity: 0, scale: 0 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{
           duration: 2,
           ease: [0.25, 1, 0.5, 1]
         }}
           
        >
          <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ImageTwo}
              alt="Step-by-step procedure"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1]
          }}
          
          className="space-y-8"
        >
         

          <div className="space-y-6">
            {contents.map((item, i) => (
              <div
                key={i}
                className="flex items-start font-medium gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <div className={`text-white  p-2 rounded-full shadow ${i==0 ? "bg-purple-700":"bg-green-500"}` }>
                  {item.icon}
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
