"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0009.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBaseballBall, FaExchangeAlt, FaUserEdit } from "react-icons/fa";
import { MdLoop } from "react-icons/md";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title:
      "The 3 extra players can be for strategic substitution for batting, fielding, pitching and catching.",
    icon: <FaExchangeAlt size={20} />,
  },
  {
    title:
      "It is called an “over” after the pitcher pitches the ball 7 times to the batsman at the home base.",
    icon: <FaBaseballBall size={20} />,
  },
  {
    title:
      "After the end of an over, a new pitcher would start pitching the next over.",
    icon: <FaUserEdit size={20} />,
  },
  {
    title:
      "For maintaining 7 defensive players on the field, this pitcher could be one from the bench or one of the fielders.",
    icon: <MdLoop size={20} />,
  },
];

export default function AboutFour() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="order-2 md:order-1 space-y-8"
        >
          <div className="space-y-5">
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
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
          }}
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
