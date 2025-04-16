"use client";

import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center px-4 sm:px-6 lg:px-8">
          {/* Text Section */}
          <div className="lg:col-span-1 relative">
            <h2 className="text-center lg:text-left text-gray-800 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">
              This video explains what RaP7 Ball is all about
            </h2>
            <div className="hidden md:block absolute -bottom-2 left-0 h-1 w-[70%] bg-customBlue" />
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="col-span-1 md:col-span-1 lg:col-span-2 w-full"
          >
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-lg bg-customBlue">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/ZPLmrfc9ZUU?autoplay=0&mute=1&controls=1&modestbranding=1"
                title="RaP7 Ball Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
