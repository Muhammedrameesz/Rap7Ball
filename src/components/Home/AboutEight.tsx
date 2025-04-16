"use client";

import ImageTwoo from "@/images/RaP7 Step by Step Procedure_page-0017.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiBat } from "react-icons/gi"; // Changed to a different icon
import { GiTimeBomb } from "react-icons/gi"; // New icon
import { GiBaseballBat } from "react-icons/gi"; // New icon
import { GiRunningShoe } from "react-icons/gi"; // New icon

interface contentType {
  title: string;
  icon: React.ReactNode;
}

const contents: contentType[] = [
  {
    title: "An inning ends after 7 overs of 7 pitches.",
    icon: <GiBat size={20} />, 
  },
  {
    title:
      "The batting team are then out and it becomes their turn to field and then it is fielding team’s turn to bat.",
    icon: <GiTimeBomb size={20} />, 
  },
  {
    title: "A game should be completed in 2 hours and 28 minutes for an inning.",
    icon: <GiBaseballBat size={20} />, 
  },
  {
    title: "After an inning, 2 minutes for the offensive and defensive teams to change over.",
    icon: <GiRunningShoe size={20} />, 
  },
  {
    title:
      "After hitting a ball, the batsman has to run to first base only if he has enough time to reach there safely.",
    icon: <GiBaseballBat size={20} />, 
  },
];

export default function AboutEight() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
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
                      :i===4
                      ? "bg-blue-500"
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
          className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src={ImageTwoo}
            alt="RaP7 Game Image"
            fill
            className="object-cover"
            priority
          />
        </motion.section>
      </main>
    </div>
  );
}
