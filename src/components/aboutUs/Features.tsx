"use client";

import { motion } from "framer-motion";
import { Gamepad2, Users2, Globe, Handshake, LucideIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


interface feturesType {
  id: string;
  title: string;
  description: string;
  icon:  LucideIcon;
  image: string;
}

const rap7Features: feturesType[] = [
  {
    id: "1",
    title: "Hybrid Sporting Experience",
    description:
      "RaP7 Ball blends the strategy of Baseball and the intensity of Cricket into a fast-paced, dynamic game. Designed for players seeking a fresh, thrilling twist on traditional bat-and-ball sports.",
    icon: Gamepad2 ,
    image:
      "https://img.freepik.com/free-photo/cricket-equipment-digital-art_23-2151761264.jpg?t=st=1745301787~exp=1745305387~hmac=494653b328a4bf4b70ac6bf0b8fce4f4e4577f66c31a1c5ecc884d8503ded0af&w=826",
  },
  {
    id: "2",
    title: "7 Players, Endless Action",
    description:
      "With only 7 players per side, RaP7 Ball encourages non-stop movement, rapid decision-making, and team synergy. Perfect for smaller teams, yet big on competitive energy.",
    icon: Users2 ,
    image:
      "https://img.freepik.com/premium-vector/faceless-cricket-players-playing-pose-with-trophy-cup-copy-space-blue-background_1302-37110.jpg?w=826",
  },
  {
    id: "3",
    title: "Global Vision, Local Roots",
    description:
      "Invented in Kerala, India by Rajan Paul, the game aspires to grow from its grassroots into a globally recognized sport, embracing diverse athletic communities across the world.",
    icon: Globe,
    image:
      "https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?t=st=1745305380~exp=1745308980~hmac=d942384667cd0d9a6b63281e148f20fcd23e9664a47f4bd40e72ab3a486b6fed&w=826",
  },
  {
    id: "4",
    title: "Accessible & Inclusive",
    description:
      "Designed to be played in various terrains — from playgrounds to stadiums — RaP7 Ball is for everyone, regardless of age, skill, or location. Innovation meets inclusivity.",
    icon: Handshake ,
    image:
      "https://img.freepik.com/free-photo/cricket-equipment-digital-art_23-2151761238.jpg?t=st=1745305551~exp=1745309151~hmac=4337744fca0fc95a81ec9e673c0a67eeb83bf669fca777f286a8fbaf81458c01&w=826",
  },
];

export default function Features() {
  const [activeKey, setActiveKey] = useState("1");
  const filteredArray = rap7Features.filter((item) => item.id === activeKey);
  return (
    <div className="bg-white text-gray-900 px-4 py-16">
      <h1 className="relative  text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-16 md:mb-20 mx-auto w-fit">
        Our Features
        <span className="absolute right-0  -bottom-2 bg-customBlue w-1/2 h-1 rounded"></span>
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-0 mb-16">
        {rap7Features.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveKey(item.id)}
            className={`px-4 py-2 relative  text-lg font-semibold transition-all duration-300 cursor-pointer  ${
              activeKey === item.id
                ? "border-2 border-gray-700 border-b-white"
                : "border-2 border-white  border-b-gray-800"
            }`}
          >
            {item.title}
            {/* <span className={`absolute left-0 -bottom-1 w-full h-1  z-20${activeKey===item.id ?"bg-red-500":""}`}/> */}
          </button>
        ))}
      </div>

      {/* Active Feature Content */}
      <section className="max-w-4xl mx-auto text-center space-y-4 ">
        {filteredArray.map((item) => (
          <motion.div
            initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{
                duration:0.5,
                ease:"easeOut"
            }}
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <section className="space-y-5">
              <div className="flex justify-center text-5xl"><item.icon size={40} className="text-green-500"/></div>
              <h1 className="text-2xl font-bold ">{item.title}</h1>
              <p className="text-gray-700 ">{item.description}</p>
            </section>
            <div className="flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
