"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Combine,
  BrainCircuit,
  TimerReset,
  Swords,
  Users2,
} from "lucide-react";

import image1 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77474.jpeg";
import image2 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77475.jpeg";
import image3 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77476.jpeg";
import image4 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77477.jpeg";
import image5 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77478.jpeg";
import image6 from "@/images/Rap7FreepickAi/freepik__the-style-is-modern-and-it-is-a-detailed-illustrat__77479.jpeg";
import { StaticImageData } from "next/image";

interface GalleryItem {
  src: string | StaticImageData;
  title: string;
  icon: React.ReactNode;
}

const iconClass:string = "w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"

const galleryItems: GalleryItem[] = [
  {
    src: image1,
    title: "Fusion of Two Giants",
    icon: <Combine className={`${iconClass}`}/>,
  },
  {
    src: image2,
    title: "Invented by Athletes, for Athletes",
    icon: <BrainCircuit className={`${iconClass}`} />,
  },
  {
    src: image3,
    title: "7 Overs. 2 Innings.",
    icon: <TimerReset className={`${iconClass}`} />,
  },
  {
    src: image4,
    title: "Dynamic Gameplay with Innovative Rules",
    icon: <Swords className={`${iconClass}`} />,
  },
  {
    src: image5,
    title: "Global Potential with Local Roots",
    icon: <Globe className={`${iconClass}`} />,
  },
  {
    src: image6,
    title: "A Sport That Builds Community",
    icon: <Users2 className={`${iconClass}`} />,
  },
];

const ImageOverley: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="bg-white py-10 md:py-16">
      <h2 className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-10">
        RaP7 Ball: <span className="text-customBlue">The Ultimate Fusion</span>{" "}
        of Cricket and Baseball
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {galleryItems.map((item, index) => (
          <div
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            key={index}
            className="relative h-[200px] sm:h-[250px] lg:h-[300px] rounded-xl overflow-hidden bg-cover  bg-no-repeat bg-center "
            style={{
              backgroundImage: `url(${
                typeof item.src === "string" ? item.src : item.src.src
              })`,
            }}
          >
            <motion.div
              className="absoluet w-full h-1/2 top-0 left-0 bg-black/70"
              initial={{ height: "50%" }}
              animate={hover === index ? { height: 0 } : { height: "50%" }}
              transition={{ duration: 0.8, ease: "easeOut", }}
            />
            <motion.div
              className="absolute w-full h-1/2 bottom-0 left-0 bg-black/70"
              initial={{ height: "50%" }}
              animate={hover === index ? { height: 0 } : { height: "50%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.div 
            initial={{y:0,opacity:1}}
            animate={hover===index?{y:-100,opacity:0}:{y:0,opacity:1}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-3 md:top-5 -translate-x-1/2 md:translate-y-1/2 left-1/2 text-white  p-2 rounded-full">
              {item.icon}
            </motion.div>

            <motion.h1 
             initial={{y:0,opacity:1}}
             animate={hover===index?{y:100,opacity:0}:{y:0,opacity:1}}
             transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-3 text-center md:bottom-5 -translate-x-1/2 md:-translate-y-1/2 left-1/2 text-white
             text-lg md:text-xl lg:text-2xl font-semibold  px-3 py-1 rounded-md">
              {item.title}
            </motion.h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageOverley;
