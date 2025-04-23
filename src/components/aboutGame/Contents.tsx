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
    <div
      className="relative bg-cover bg-center bg-no-repeate  py-14 px-6 md:px-10 flex justify-center items-center text-gray-900"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/gradient-digital-navy-abstract-creative-background-design_851755-316011.jpg?w=996)`,
      }}
    >
      <span className="absolute inset-0 bg-black/30 z-0" />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl w-full rounded-3xl  p-8 md:p-12 text-center space-y-10 mx-auto"
      >
        
        <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight text-white w-fit mx-auto mb-10 md:mb-16">
          What is RaP7 Ball?
          <div className="absolute right-0 -bottom-1 bg-gray-500 h-[2px] w-[50%]" />
        </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        
          <motion.div
            className="relative flex flex-col items-center gap-4 p-5 bg-white rounded-xl shadow-md 
              hover:shadow-lg hover:bg-transparent hover:text-white border transition-all duration-500 group"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 group-hover:opacity-70 transition-opacity duration-500">
              <MdOutlineSportsBaseball className="text-4xl text-white group-hover:text-white transition-colors duration-500" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-500">
              Roots of the Game
            </h4>
            <p className="text-gray-600 group-hover:text-white text-sm md:text-base font-medium text-center transition-colors duration-500">
              Baseball is America’s National Pastime and Cricket is the second most popular sport in the world.
            </p>
          </motion.div>

      
          <motion.div
            className="relative flex flex-col items-center gap-4 p-5 bg-white rounded-xl shadow-md 
              hover:shadow-lg hover:bg-transparent hover:text-white border transition-all duration-500 group"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-red-400 via-pink-400 to-orange-400 group-hover:opacity-70 transition-opacity duration-500">
              <FaBaseballBatBall className="text-4xl text-white group-hover:text-white transition-colors duration-500" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-500">
              The Hybrid Innovation
            </h4>
            <p className="text-gray-600 group-hover:text-white text-sm md:text-base font-medium text-center transition-colors duration-500">
              RaP7 Ball is a hybrid of Baseball and Cricket, blending rules and safety gear from both iconic sports.
            </p>
          </motion.div>
        </div>

  
        <motion.div className="pt-5 mx-auto w-fit">
          <button
            onClick={handleClick}
            className="bg-transparent text-white border border-gray-300 group cursor-pointer text-sm md:text-base font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
          >
            Learn More About the Game
            <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
