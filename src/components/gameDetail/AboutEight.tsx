"use client";

import ImageTwoo from "@/images/RaP7 Step by Step Procedure_page-0017.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiBaseballBat, GiSoccerBall } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi"; 

interface contentType {
  title: string;
  icon: React.ReactNode;
}

const contents: contentType[] = [
 
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
   {
      title:
        "The team scores one run when the batter circles the bases and successfully returns to home base.",
      icon: <GiSoccerBall size={20} />, 
    },
   
];

export default function AboutEight() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-100">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="order-2 md:order-1 space-y-8"
        >
          <div className="space-y-5">
            {contents?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white font-medium rounded-xl "
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="order-1 md:order-2 relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden shadow-xl"
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
