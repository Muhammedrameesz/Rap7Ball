"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0005.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineAssistantDirection, MdOutlineSportsBaseball } from "react-icons/md";
import { FaDrawPolygon } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title: "RaP7 ball game is played on a customized baseball diamond.",
    icon: <MdOutlineSportsBaseball size={20} />,
  },
  {
    title:
      "Important actions in RaP7 ball game are played on an equilateral, triangle-shaped infield, with three bases—one at each corner.",
    icon: <FaDrawPolygon size={20} />,
  },
  {
    title:
      "A cricket pitch is included in the infield, running from one base of the equilateral triangle to its vertex.",
    icon: <FaGripLinesVertical size={20} />,
  },
   {
      title:
        "To avoid baseball’s controversial balls and strikes calls, in RaP7 ball game, a pylon is used at home base, for the pitcher to use as a target to throw at.",
      icon: <MdOutlineAssistantDirection size={20} />,
    },
];

export default function AboutTwo() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white overflow-x-hidden">
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
         

          <div className="space-y-5 ">
            {contents.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-gray-100 font-medium rounded-xl "
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
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{
             duration: 2,
             ease: [0.25, 1, 0.5, 1]
           }}
          className="order-1 md:order-2 relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={ImageTwo}
            alt="RaP7 Game Field"
            fill
            className="object-cover"
            priority
          />
        </motion.section>
      </main>
    </div>
  );
}
