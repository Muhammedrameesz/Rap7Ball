"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0009.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUserFriends, FaExchangeAlt, FaDice } from "react-icons/fa";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title: "Each team consists of 10 players.",
    icon: <FaUserFriends size={20} />,
  },
  {
    title:
      "A coin flip decides who bats first and who fields first. The team that bats first will have 7 players in the batting order and 3 subs on the bench. The team that fields first will have 7 outfielders and 3 players on the bench.",
    icon: <FaDice size={20} />,
  },
  {
    title:
      "The 3 extra players can be for strategic substitution for batting, fielding, pitching and catching.",
    icon: <FaExchangeAlt size={20} />,
  },
];

export default function AboutFour() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-8"
        >
         
          <div className="space-y-6">
            {contents.map((item, i) => (
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

        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={ImageTwo}
            alt="Team Setup"
            fill
            className="object-cover"
            priority
          />
        </motion.section>
      </main>
    </div>
  );
}
