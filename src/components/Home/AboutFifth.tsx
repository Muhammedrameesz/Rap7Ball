"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0011.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import {GiStopwatch } from "react-icons/gi";
import { MdLoop } from "react-icons/md";
import { FaBaseballBall, FaUserEdit } from "react-icons/fa";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title: "It is called an “over” after the pitcher pitches the ball 7 times to the batsman at the home base.",
    icon: <FaBaseballBall size={20} />,
  },
  {
    title: "After the end of an over, a new pitcher would start pitching the next over.",
    icon: <FaUserEdit size={20} />,
  },
  {
    title: "For maintaining 7 defensive players on the field, this pitcher could be one from the bench or one of the fielders.",
    icon: <MdLoop size={20} />,
  },
  {
    title: "One pitcher is allowed three alternative overs in an inning.",
    icon: <GiStopwatch size={20} />,
  },
];

export default function AboutFifth() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50 overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-64 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ImageTwo}
              alt="Pitching in RaP7"
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
          className="space-y-8"
        >
          
          <div className="space-y-6">
            {contents.map((item, i) => (
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
