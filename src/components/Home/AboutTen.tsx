'use client'

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0001.jpg";
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
      "Batsman after hitting a ball, if it flies to the home run zone, it is called a home run. At this time, without running the bases, the offensive team gets runs that are equal to the number of players on the bases, times 2.",
    icon: <MdCheck />,
  },
  {
    title:
      "There are two innings in a game.",
    icon: <MdCheck />,
  },
  {
    title:
      "The game is over at the end of the second inning, or when all batsmen are out.",
    icon: <MdCheck />,
  },
  {
    title:
      "The winner is the team that scores the highest runs",
    icon: <MdCheck />,
  },
 
];

export default function AboutTen() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
     
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Header
          </h1>
         

         
          <div className="space-y-4">
            {contents?.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="text-white text-lg bg-purple-800 rounded-full p-1">
                  {item.icon}
                </div>
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
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
