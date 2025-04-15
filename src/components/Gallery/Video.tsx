"use client";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section
      className=" relative pb-10 px-4 "
      style={
        {
          // backgroundImage:`url(https://img.freepik.com/premium-vector/white-background-with-squares-squares-it_1274009-225.jpg?w=740)`
        }
      }
    >
      <h2
        className="text-base md:text-xl lg:text-3xl font-medium md:font-semibold text-gray-800 bg-black/50 shadow-custom w-fit mx-auto px-6 py-2 
                      rounded-full text-white mb-6 md:mb-10 text-center"
      >
        This video explains what RaP7 Ball is all about
      </h2>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-4xl mx-auto text-center bg-white shadow-newNormal rounded-3xl p-5 md:p-10"
      >
        <div className="relative w-full pt-[60%] rounded-3xl overflow-hidden shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ZPLmrfc9ZUU?autoplay=0&mute=1&controls=1&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
