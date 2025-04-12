"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0017.jpg";
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
      "Before starting the over, the pitcher should inform umpire and batsman his pitching style. After starting an over with one style, pitcher has to maintain that style through out the over.",
    icon: <MdCheck/>,
  },
  {
    title:
      "To protect a batsman from direct hit of ball, a bounce zone is included, that is 7m long, from the home base pylon and 3m wide.",
    icon: <MdCheck />,
  },
  {
    title:
      "The ball has to bounce in the ounce zone, while the pitcher pitches the ball to the pylon",
    icon: <MdCheck />,
  },
  {
    title:
      "One pitcher is allowed three alternative overs in an inning.",
    icon: <MdCheck />,
  },
  
];

export default function AboutSeven() {
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
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, id
            magni. Dolorem dignissimos quisquam,
          </p>

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
