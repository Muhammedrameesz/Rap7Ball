"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Content() {
  const [active, setActive] = useState("");
  return (
    <div className="bg-white text-gray-900 min-h-screen p-4 md:p-6 lg:p-10 space-y-10">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="  space-y-6  rounded-br-[20px]"
        >
          <div className="w-[400px] h-[300px] mx-auto">
            <Image
              alt="Image"
              src="https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064891.jpg?t=st=1744897463~exp=1744901063~hmac=34e9db20938eb7b57817f34296b759abfe8b4874a4dc83db6552895d8506d9ce&w=826"
              width={400}
              height={300}
              className="rounded-xl object-cover shadow-md w-full h-full"
            />
          </div>
          <p
            onMouseEnter={() => setActive("1")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all duration-500 bg-white p-6 rounded-tl-[40px] 
            border-2 border-dashed border-red-500"
          >
            I am Rajan Paul, born in Kunnamkulam, raised in Palakkad. I loved
            sports more than my studies so my parents frequently grounded me for
            not giving enough attention to studies. It is because of their
            tender loving care and mentoring; I am who I am now. My Father was
            my technical advisor and mom was my spiritual leader.
            <motion.span
              className="absolute inset-0 bg-red-500 p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "1"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>

          <p
            onMouseEnter={() => setActive("2")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all duration-500 bg-white p-6 rounded-tl-[40px] border-2 border-dashed border-green-500"
          >
            Even with strict control at home, I managed to represent my school
            for soccer. During my college days, I represented my college for
            Soccer, Cricket and field Hockey. From Second Pre Degree thru
            Engineering, I was the opening bowler of my college Cricket Teams.
            During my final year Engineering I was the Soccer captain of my
            college. After migrating to USA, I continued Playing Soccer and
            Cricket. During the course of time, I picked up Baseball and played
            in leagues for people over 30.
            <motion.span
              className="absolute inset-0 bg-green-600 p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "2"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>
        </motion.section>

        {/* Center Column */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className=" space-y-6 rounded-t-[30px] rounded-bl-[40px]"
        >
          <p
            onMouseEnter={() => setActive("3")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all group duration-500 bg-white p-6 rounded-tl-[40px] border-2 border-dashed border-customBlue"
          >
            I am an inventor, during my tenure with Ford Motor Company for 25
            years, with an inventive mind, I involved in a few Engine related
            inventions. After retiring from Ford, I worked for Mahindra to
            develop my Crankless Engine technology.
            <a
              href="https://youtu.be/OUjZjbW5Wng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2b318a] group-hover:text-white mt-5 underline hover:text-blue-700 group-hover:hover:text-blue-100 font-medium transition duration-200 block"
            >
              https://youtu.be/OUjZjbW5Wng
            </a>
            <motion.span
              className="absolute inset-0 bg-customBlue p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "3"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>

          <p
            onMouseEnter={() => setActive("4")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all group duration-500 bg-white p-6 rounded-tl-[40px] border-2 border-dashed border-pink-500 "
          >
            When I started my freelance engineering consulting business, I
            started playing Pickle Ball, the fastest growing sports in the USA.
            Pickleball is a hybrid of Shuttle Badminton, Table Tennis and
            Tennis. While playing Pickle Ball, my inventive mind lead me to
            invent a new sport, RaP7 Ball Game, a hybrid of Baseball and
            Cricket; America’s National Pastime and the second most popular
            sport in the world.
            <motion.span
              className="absolute inset-0 bg-pink-500 p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "4"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>
          <p
            onMouseEnter={() => setActive("5")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all group duration-500 bg-white p-6 rounded-tl-[40px] 
          border-2 border-dashed border-yellow-500"
          >
            I am 75 years old, presently, looking for a financially sound sports
            enthusiast to help me to promote RaP7 Ball, globally. RaP7 ball game
            is played on a customized RaP7 ball diamond. Details of the game is
            explained in this YouTube link
            <a
              href="https://youtu.be/ZPLmrfc9ZUU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2b318a] group-hover:text-white mt-5 underline hover:text-blue-700 group-hover:hover:text-blue-100 font-medium transition duration-200 block"
            >
              https://youtu.be/ZPLmrfc9ZUU
            </a>
            <motion.span
              className="absolute inset-0 bg-yellow-500 p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "5"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>

          <p
            onMouseEnter={() => setActive("6")}
            onMouseLeave={() => setActive("")}
            className="relative z-10 hover:text-white transition-all group duration-500 bg-white 
          p-6 rounded-tl-[40px] border-2 border-dashed border-lime-500"
          >
            During 2020, I inaugurated RaP7 Ball Game at my hometown, Palakkad.
            After watching the game, lead news media gave rave reviews stating
            that RaP7 has all the potential to become a lead global sport in the
            near future.
            <motion.span
              className="absolute inset-0 bg-lime-500 p-6 rounded-tl-[40px] -z-10"
              initial={{ width: 0, height: "100%", opacity: 0 }}
              animate={
                active === "6"
                  ? { width: "100%", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </p>
        </motion.section>
      </main>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center items-center w-full pt-10 pb-20 md:py-10"
      >
        <div className="relative bg-gray-900 rounded-lg text-white p-4 w-full max-w-3xl border overflow-visible">
          <Image
            src="https://img.freepik.com/free-photo/medium-shot-business-team-work_23-2149271746.jpg?t=st=1744895645~exp=1744899245~hmac=f4dfe467eac5c4baa653a74aa89ac80be39cee1a398ea0d084914108b9801d54&w=996"
            alt="Team"
            width={1000}
            height={700}
            className="rounded-lg object-cover w-full h-auto"
          />
          <p className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 bg-gray-900 text-gray-100 p-5 rounded-2xl 
          text-base leading-relaxed shadow-lg max-w-sm w-[90%] sm:w-auto text-center">
            March 2023 – A few Kerala Club members and Michiganders participated
            in a friendly RaP7 Ball Game.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
