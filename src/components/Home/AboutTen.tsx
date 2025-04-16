"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0001.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiBaseballBat } from "react-icons/gi"; // New icon
import { GiTrophyCup } from "react-icons/gi"; // New icon
import { GiClockwork } from "react-icons/gi"; // New icon


interface contentType {
  title: string;
  icon: React.ReactNode;
}

const contents: contentType[] = [
  {
    title:
      "Batsman after hitting a ball, if it flies to the home run zone, it is called a home run. At this time, without running the bases, the offensive team gets runs that are equal to the number of players on the bases, times 2.",
    icon: <GiBaseballBat size={20} />, 
  },
  {
    title: "There are two innings in a game.",
    icon: <GiClockwork size={20} />, 
  },
  {
    title: "The game is over at the end of the second inning, or when all batsmen are out.",
    icon: <GiBaseballBat size={20} />, 
  },
  {
    title: "The winner is the team that scores the highest runs.",
    icon: <GiTrophyCup size={20} />, 
  },
];

export default function AboutTen() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale:0}}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden">
            <Image
              src={ImageTwo}
              alt="RaP7 Game Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 space-y-8"
        >
          <div className="space-y-4 md:space-y-8">
            {contents?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-gray-50 font-medium rounded-xl border border-gray-200 shadow-sm"
              >
                 <div
                  className={`text-white p-2 rounded-full shadow ${
                    i === 1
                      ? "bg-green-500"
                      : i === 2
                      ? "bg-red-500"
                      :i===3
                      ? "bg-yellow-500"
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
