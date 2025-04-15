"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0007.jpg";
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
      "To avoid baseball’s controversial balls and strikes calls, in RaP7 ball game, a pylon is used at home base, for the pitcher to use as a target to throw at.",
    icon: <MdCheck/>,
  },
  {
    title:
      "A pylon is used at all three bases.",
    icon: <MdCheck />,
  },
  {
    title:
      "The pylons at first, second and home base are for making the runner out while running to that base ‘to score runs’.",
    icon: <MdCheck />,
  },
];

export default function AboutThree() {
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
          

          <div className="space-y-4 md:space-y-8">
            {contents?.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="text-white text-lg bg-purple-800 rounded-full p-1">
                  {item.icon}
                </div>
                <h2 className="text-xl font-medium text-gray-800">
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
