"use client";

import ImageTwoo from "@/images/RaP7 Step by Step Procedure_page-0018.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

import { GiReturnArrow } from "react-icons/gi"; // New icon
import { GiSoccerBall } from "react-icons/gi"; // New icon
import { GiCrossedSwords } from "react-icons/gi"; // New icon

interface contentType {
  title: string;
  icon: React.ReactNode;
}

const contents: contentType[] = [
  {
    title:
      "The team scores one run when the batter circles the bases and successfully returns to home base.",
    icon: <GiSoccerBall size={20} />, 
  },
  {
    title:
      "When the home base batsman reaches first base, the next batsman in the batting order replaces him and the cycle continues.",
    icon: <GiReturnArrow size={20} />, 
  },
  {
    title:
      "During the cycle, if a player is out by one of the rules of the game, that player cannot return to the batting order. The team has to continue to play with the remaining batsmen.",
    icon: <GiSoccerBall size={20} />, 
  },
  {
    title:
      "Batsman after hitting a ball, if it bounces and hits the boundary line, it is called a boundary. At this time without running the bases, the offensive team gets runs that are equal to the number of players on the bases, times 1.",
    icon: <GiCrossedSwords size={20} />,
  },
];

export default function AboutNine() {
  return (
    <div className="relative z-10 px-4 md:px-16 py-16 bg-gray-50">
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
          className="order-2 md:order-1"
        >
          <div className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden">
            <div className="absolute inset-0"></div>
            <Image
              src={ImageTwoo}
              alt="RaP7 Game Image"
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
          className="order-1 md:order-2 space-y-8"
        >
          <div className="space-y-4 md:space-y-8">
            {contents?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white font-medium rounded-xl border border-gray-200 shadow-sm"
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
