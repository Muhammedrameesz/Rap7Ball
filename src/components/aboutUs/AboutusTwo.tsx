"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Atom, Rocket, Trophy, Lightbulb, Globe } from "lucide-react";
import { useState } from "react";

export default function AboutUs() {
  const [active, setActive] = useState<string>("");
  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
       viewport={{ once: true }} 
      className="max-w-2xl mx-auto px-6 py-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 aspect-square rounded-full p-2 bg-green-50 flex items-center justify-center shadow-sm">
            <Globe className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            RaP7 Ball: A Global Game Born from Passion & Innovation
          </h2>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Column 1 - Origin */}
        <motion.div
          onMouseEnter={() => setActive("1")}
          onMouseLeave={() => setActive("")}
          className="relative z-10 bg-white p-6  rounded-2xl shadow-base text-center flex flex-col items-center group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="absolute inset-0 bg-purple-700 -z-10 rounded-2xl h-full w-full origin-bottom transform"
            initial={{ opacity: 1, scaleY: 0 }}
            animate={
              active === "1"
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 1, scaleY: 0 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <Image
            src="https://img.freepik.com/free-vector/sports-equipment-concept-illustration_114360-14621.jpg"
            alt="Game Origin"
            width={400}
            height={200}
            className="rounded-xl mb-4 object-cover w-full h-40"
          />
          <h2 className={`text-xl font-bold  mb-2  ${active==="1" ?"text-gray-100":"text-red-500"} transition-all duration-500`}>Our Roots</h2>
          <p className={` ${active==="1" ?"text-white":"text-gray-600 "}  transition-all duration-500`}>
            RaP7 Ball was born from the inventive spirit of Rajan Paul—an
            engineer, sportsman, and hybrid thinker. With a deep passion for
            sports from Kerala to the U.S., and experience in Soccer, Cricket,
            Hockey, and Baseball, Rajan combined iconic elements from Baseball
            and Cricket to build a revolutionary game for a global audience.
          </p>
        </motion.div>

        {/* Column 2 - Game Concept */}
        <motion.div
          className="bg-purple-700 p-6 rounded-2xl shadow-md text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white text-purple-700 px-4 py-2 rounded-full font-bold text-lg mb-4 inline-block">
            <Rocket className="inline-block mr-2" size={20} />
            RaP7 Ball Concept
          </div>
          <p className="mb-4 text-white">
            RaP7 Ball is a fast-paced hybrid sport merging the precision of
            Cricket and the strategic play of Baseball. Set on a triangular
            diamond, with pylons as target points instead of umpires, the game
            minimizes controversy and maximizes action.
          </p>
          <ul className="space-y-3 text-sm mt-10">
            <li className="flex items-center gap-2">
              <Atom size={18} /> Equilateral triangle-shaped field with 3 bases
            </li>
            <li className="flex items-center gap-2">
              <Lightbulb size={18} /> Cricket pitch at the center of the
              triangle
            </li>
            <li className="flex items-center gap-2">
              <Trophy size={18} /> Pylons used at every base to register outs
              and scores
            </li>
          </ul>
        </motion.div>

        {/* Column 3 - Vision */}
        <motion.div
        onMouseEnter={() => setActive("3")}
        onMouseLeave={() => setActive("")}
          className="relative z-10 bg-white p-6 rounded-2xl shadow-base text-center flex flex-col items-center group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.span
            className="absolute inset-0 bg-purple-700 -z-10 rounded-2xl h-full w-full origin-top transform"
            initial={{ opacity: 1, scaleY: 0 }}
            animate={
              active === "3"
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 1, scaleY: 0 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <h2 className={`text-xl font-bold  mb-2  ${active==="3" ?"text-gray-100":"text-red-500"} transition-all duration-500`}>Looking Ahead</h2>
          <p className={` ${active==="3" ? "text-white":"text-gray-600 "}  transition-all duration-500`}>
            At 75, Rajan is looking for a passionate, visionary partner to
            globalize RaP7 Ball. With rave reviews from Indian media and a
            successful launch in Palakkad, the journey has begun. RaP7 Ball
            holds the potential to become a global sensation.
          </p>
          <Image
            src="https://img.freepik.com/free-vector/sports-field-construction-abstract-concept_335657-2884.jpg"
            alt="Vision"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full h-40 mt-5 md:mt-7"
          />
        </motion.div>
      </div>
    </section>
  );
}
