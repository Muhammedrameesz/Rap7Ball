'use client'

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0009.jpg";
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
      "Each team consists of 10 players.",
    icon: <MdCheck />,
  },
  {
    title:
      "A coin flip decides who bats first and who fields first. The team that bats first will have 7 players in the batting order and 3 subs on the bench. The eam that fields first will have 7 outfielders and 3 players on the bench",
    icon: <MdCheck />,
  },
  {
    title:
      "The 3 extra players can be for strategic substitution for batting, fielding, pitching and catching",
    icon: <MdCheck />,
  },
];

export default function AboutFour() {
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
