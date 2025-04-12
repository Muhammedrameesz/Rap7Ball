"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0003.jpg";
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
      "Baseball is America’s National Pastime and Cricket is the second most popular sport in the world.",
    icon: <MdCheck/>,
  },
  {
    title:
      "RaP7 ball game is a hybrid of Baseball and Cricket, played using rules taken from both of these popular sports and using common safety gears.",
    icon: <MdCheck />,
  },
];

export default function AboutTwo() {
  return (
    <div className="px-4 md:px-16 ">
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
            magni. Dolorem dignissimos quisquam, eum voluptatum aspernatur
            incidunt sint hic non, in asperiores error distinctio vitae aliquam
            similique vero cumque?
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
