"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0007.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import {MdOutlineAssistantDirection } from "react-icons/md";
import { FaMapMarkerAlt, FaRunning } from "react-icons/fa";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title:
      "To avoid baseball’s controversial balls and strikes calls, in RaP7 ball game, a pylon is used at home base, for the pitcher to use as a target to throw at.",
    icon: <MdOutlineAssistantDirection size={20} />,
  },
  {
    title: "A pylon is used at all three bases.",
    icon: <FaMapMarkerAlt size={20} />,
  },
  {
    title:
      "The pylons at first, second and home base are for making the runner out while running to that base ‘to score runs’.",
    icon: <FaRunning size={20} />,
  }
  
];

export default function AboutThree() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50 overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={ImageTwo}
            alt="RaP7 Game Pylon Explanation"
            fill
            className="object-cover"
            priority
          />
        </motion.section>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          

          <div className="space-y-6">
            {contents.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 font-medium bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <div
                  className={`text-white p-2 rounded-full shadow ${
                    i === 1
                      ? "bg-green-500"
                      : i === 2
                      ? "bg-red-500"
                      : "bg-purple-700"
                  }`}
                >
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
