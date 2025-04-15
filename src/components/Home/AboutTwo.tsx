"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0005.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineSportsBaseball } from "react-icons/md";
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
];

export default function AboutTwo() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
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
