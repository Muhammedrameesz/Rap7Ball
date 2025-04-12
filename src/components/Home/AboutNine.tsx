"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0001.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdCheck } from "react-icons/md";
interface contentType{
    title:string,
    icon:React.ReactNode
}
const contents: contentType[] = [
  {
    title:
      "The team scores one run when the batter circles the bases and successfully returns to home base.",
    icon: <MdCheck/>,
  },
  {
    title:
      "When the home base batsman reaches first base, the next batsman in the batting order replaces him and the cycle continues.",
    icon: <MdCheck />,
  },
  {
    title:
      "During the cycle, if a player is out by one of the rules of the game, that player, cannot return to the batting order. The team has to continue to play with the remaining batsmen",
    icon: <MdCheck />,
  },
  {
    title:
      "Batsman after hitting a ball, if it bounces and hits the boundary line, it is called a boundary. At this time without running the bases, the offensive team gets runs that are equal to the number of players on the bases, times 1.",
    icon: <MdCheck />,
  },
  
];

export default function AboutNine() {
  return (
    <div className="px-4 md:px-16 py-16">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
       
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden ">
            <div className="absolute inset-0 "></div>
            <Image
              src={ImageTwo}
              alt="image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

    
        <motion.section
          initial={{ opacity: 0, x: 50 }}
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
                <h2 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
