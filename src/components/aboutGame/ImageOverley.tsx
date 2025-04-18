"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Combine,
  BrainCircuit,
  TimerReset,
  Swords,
  Users2,
} from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  icon: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "Fusion of Two Giants",
    icon: <Combine size={40} />,
  },
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "Invented by Athletes, for Athletes",
    icon: <BrainCircuit size={40} />,
  },
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "7 Overs. Non-Stop Action.",
    icon: <TimerReset size={40} />,
  },
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "Dynamic Gameplay with Innovative Rules",
    icon: <Swords size={40} />,
  },
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "Global Potential with Local Roots",
    icon: <Globe size={40} />,
  },
  {
    src: "https://img.freepik.com/free-photo/baseball-players-professional-baseball-stadium-evening-game_654080-1532.jpg?t=st=1744992986~exp=1744996586~hmac=c358577b48ee5a249ad9f3e70e4c68174f3ca02302e80be6d06c9dd358a779b2&w=996",
    title: "A Sport That Builds Community",
    icon: <Users2 size={40} />,
  },
];

const ImageOverley: React.FC = () => {
  return (
    <div className="bg-white py-10 md:py-16">
      <h2 className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-10">
        RaP7 Ball: <span className="text-customBlue">The Ultimate Fusion</span>{" "}
        of Cricket and Baseball
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Image
              src={item.src}
              alt={item.title}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 space-y-10 z-10 bg-black/80 bg-opacity-50 flex 
              flex-col items-center justify-center text-white "
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                variants={{
                  rest: { opacity: 1, y: 0 },
                  hover: { opacity: 0, y: -20 },
                }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>

              <motion.h3
                className="mt-2 text-lg md:text-xl font-semibold max-w-xs text-center "
                variants={{
                  rest: { opacity: 1, y: 0 },
                  hover: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5 }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ImageOverley;
