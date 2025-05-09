"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0011.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiStopwatch } from "react-icons/gi";
import { FaBaseballBall, FaRunning } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";

interface ContentType {
  title: string;
  icon: React.ReactNode;
}

const contents: ContentType[] = [
  {
    title: "One pitcher is allowed three alternative overs in an inning.",
    icon: <GiStopwatch size={20} />,
  },

  {
    title: "A pitcher could pitch the ball like in baseball or in cricket.",
    icon: <FaBaseballBall size={20} />,
  },
  {
    title:
      "Its called an 'over' after the pitcher pitches the ball 7 times to the batsman at the home base.",
    icon: <FaRunning size={20} />,
  },
  {
    title:
      "Before starting the over, the pitcher should inform the umpire and batsman about their pitching style. Once started, they must maintain that style for the entire over.",
    icon: <FaRegHandshake size={20} />,
  },
];

export default function AboutFifth() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-100 overflow-x-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
            
          }}
          className=""
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
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="space-y-8"
        >
          <div className="space-y-5">
            {contents.map((item, i) => (
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
                      : i === 3
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
