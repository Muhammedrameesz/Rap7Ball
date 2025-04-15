"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0011.jpg";
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
      "It is called an “over” after the pitcher pitches the ball 7 times to the batsman at the home base.",
    icon: <MdCheck/>,
  },
  {
    title:
      "After the end of an over, a new pitcher would start pitching the next over",
    icon: <MdCheck />,
  },
  {
    title:
      "For maintaining 7 defensive players on the field, this pitcher could be one from the bench or one of the fielders.",
    icon: <MdCheck />,
  },
  {
    title:
      "One pitcher is allowed three alternative overs in an inning.",
    icon: <MdCheck />,
  },
  
];

export default function AboutFifth() {
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
