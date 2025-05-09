"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0007.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRunning, FaUserFriends } from "react-icons/fa";
import { FaDice } from "react-icons/fa6";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
 
  {
    title: "A pylon is used at all three bases.",
    icon: <FaMapMarkerAlt size={20} />,
  },
  {
    title:
      "The pylons at first, second and home base are for making the runner out while running to that base ‘to score runs’.",
    icon: <FaRunning size={20} />,
  },
  {
    title: "Each team consists of 10 players.",
    icon: <FaUserFriends size={20} />,
  },
  {
    title:
      "A coin flip decides who bats first and who fields first. The team that bats first will have 7 players in the batting order and 3 subs on the bench. The team that fields first will have 7 outfielders and 3 players on the bench.",
    icon: <FaDice size={20} />,
  },
  
];

export default function AboutThree() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-100 overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="space-y-8"
        >
          

          <div className="space-y-5">
            {contents.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 font-medium bg-white rounded-xl  "
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
