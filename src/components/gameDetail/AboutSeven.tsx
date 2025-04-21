"use client";

import ImageFour from "@/images/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-11.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FaArrowDown, FaRedoAlt, FaShieldAlt } from "react-icons/fa";
import { GiBat, GiTimeBomb } from "react-icons/gi";

interface ContentType {
  title: string;
  icon: ReactNode;
}

const contents: ContentType[] = [
 
  {
    title:
      "To protect the batsman from a direct hit, a bounce zone is included—7m long from the home base pylon and 3m wide.",
    icon: <FaShieldAlt size={20} />,
  },
  {
    title:
      "The ball must bounce in the bounce zone while the pitcher delivers to the pylon.",
    icon: <FaArrowDown size={20} />,
  },
  {
    title:
      "One pitcher is allowed three alternate overs in an inning.",
    icon: <FaRedoAlt size={20} />,
  },
  {
    title: "An inning ends after 7 overs of 7 pitches.",
    icon: <GiBat size={20} />, 
  },
   {
      title:
        "The batting team are then out and it becomes their turn to field and then it is fielding team’s turn to bat.",
      icon: <GiTimeBomb size={20} />, 
    },
];

export default function AboutSeven() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Left Image */}
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className=""
        >
          <div className=" relative w-full h-64 md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ImageFour}
              alt="RaP7 Pitching Style Explanation"
              fill
              className="object-cover"
              priority
            />
          </div>
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
          className=" space-y-8"
        >
          <div className="space-y-5">
            {contents.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-gray-100 font-medium rounded-xl  "
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
