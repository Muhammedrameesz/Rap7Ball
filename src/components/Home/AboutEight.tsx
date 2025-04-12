'use client'

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0018.jpg";
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
      "An inning ends after 7 overs of 7 pitches.",
    icon: <MdCheck />,
  },
  {
    title:
      "The batting team are then out and it becomes their turn to field and then it is fielding team’s turn to bat.",
    icon: <MdCheck />,
  },
  {
    title:
      "A game should be completed in 2 hours and 28 minutes for an inning.",
    icon: <MdCheck />,
  },
  {
    title:
      "After an inning, 2 minutes for the offensive and defensive teams to change over",
    icon: <MdCheck />,
  },
  {
    title:
      "After hitting a ball, the batsman has to run to first base only if he has enough time to reach there safely",
    icon: <MdCheck />,
  },
];

export default function AboutEight() {
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
