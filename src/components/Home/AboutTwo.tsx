'use client'

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0005.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdCheck } from "react-icons/md";

interface contentType{
     title:string,
     icon:React.ReactNode
}

const contents:contentType[] = [
  {
    title:
      "RaP7 ball game is played on a customized baseball diamond.",
    icon: <MdCheck />,
  },
  {
    title:
      "Important actions in RaP7 ball game is played on an equilateral, triangle-shaped infield, with three bases, one at each corner.",
    icon: <MdCheck />,
  },
  {
    title:
      "A cricket pitch is included in the infield that runs from one base of the equilateral triangle to its vertex.",
    icon: <MdCheck />,
  },
];

export default function AboutTwo() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section - Content */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
         

          {/* List of Contents */}
          <div className="space-y-4 md:space-y-8">
            {contents?.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="text-white text-lg bg-purple-800 rounded-full p-1">
                  {item.icon}
                </div>
                <h2 className="text-xl font-medium text-gray-800">{item.title}</h2>
              </div>
            ))}
          </div>
        </motion.section>


        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden"
        >
          <Image
            src={ImageTwo}
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
