"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FaBaseballBatBall, FaArrowRight } from "react-icons/fa6";

export default function Contents() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about-game/about-game-detail");
  };

  return (
    <div className="bg-white py-14 px-6 md:px-10 flex justify-center items-center text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight text-gray-800 w-fit mx-auto mb-10 md:mb-16">
          What is RaP7 Ball?
          <div className="absolute right-0 -bottom-1 bg-customBlue h-[2px] w-[50%]"/>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Baseball Card */}
          <motion.div className="relative flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 group">
            <div className="absolute left-0 bottom-0 h-1 w-full bg-customBlue" />
            <div className="p-3 rounded-full bg-purple-100">
              <MdOutlineSportsBaseball className="text-lg md:text-xl lg:text-2xl  text-customBlue" />
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl font-medium mt-1">
              Baseball is America’s National Pastime and Cricket is the second most popular sport in the world.
            </p>
          </motion.div>

          {/* RaP7 Card */}
          <motion.div className="relative flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 group">
            <div className="absolute left-0 bottom-0 h-1 w-full bg-red-500" />
            <div className="p-3 rounded-full bg-red-100">
              <FaBaseballBatBall className="text-lg md:text-xl lg:text-2xl  text-red-500" />
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl font-medium mt-1">
              RaP7 Ball is a hybrid of Baseball and Cricket, blending rules and safety gear from both iconic sports.
            </p>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div className="pt-5 mx-auto w-fit">
          <button
            onClick={handleClick}
            className="bg-transparent text-gray-900 border border-gray-300 group cursor-pointer text-sm md:text-base font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
          >
            Learn More About the Game
            <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
