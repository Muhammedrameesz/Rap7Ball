"use client";

import Image from "next/image";
import ImageLog from "@/images/RaP7_Step_by_Step_Procedure_page-0003-removebg-preview.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center px-4 md:px-16 overflow-hidden ">
      <motion.main className="grid grid-cols-1 md:grid-cols-2 justify-center  w-full max-w-7xl ">
        {/* Left Content */}
        <motion.section
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="space-y-6 text-center md:text-left  "
        >
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 ">
            Welcome to <br />
            <span className="text-customBlue inline-block mt-2">
              RaP{" "}
              <span className="text-red-500 text-6xl sm:text-7xl md:text-8xl">
                7
              </span>{" "}
              Ball
            </span>
          </h1>
        </motion.section>

        {/* Right Image */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative flex justify-center items-center  md:min-h-[500px] "
        >
          <motion.div 
           initial={{opacity:0,scale:0}}
           animate ={{opacity:1,scale:1}}
           transition={{
            duration:1,
            delay:0.5,
            ease:"easeOut"
           }}
          className="hidden md:flex absolute right-10 top-20 z-10">
            <svg
              width="184"
              height="192"
              viewBox="0 0 184 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand absolute hidden md:block -top-16 -right-[40%] xl:-right-1/2 transition ease-in-out transform-gpu"
            >
              <path
                d="M182.648 183.128C178.597 187.405 171.028 191.799 163.237 191.977C157.571 192.103 152.323 190.012 148.058 185.927C139.232 177.468 138.372 158.735 137.621 142.22C137.204 133.157 136.747 122.877 134.696 119.768C131.836 115.376 124.509 108.471 107.735 111.458C94.4152 113.834 81.7884 115.329 73.6959 107.665C64.5031 98.9588 66.3544 85.5644 68.5325 76.244C69.271 73.0119 70.4408 69.8949 72.0105 66.9765C67.2371 63.1964 63.8062 58.7353 62.4015 54.3978C60.8072 49.4882 61.1485 43.5448 61.4696 37.8066C61.9457 29.5112 62.3974 21.6751 57.4255 18.3185C52.9599 15.3123 37.4838 14.4287 30.2947 16.7929C23.7769 18.9234 13.5899 18.9589 1.99423 6.93367C1.6401 6.5666 1.36158 6.13357 1.17454 5.65932C0.987495 5.18506 0.895589 4.67887 0.904109 4.16963C0.912629 3.66038 1.02138 3.15807 1.22417 2.69136C1.42696 2.22466 1.71981 1.80269 2.086 1.44957C2.45218 1.09646 2.88452 0.819116 3.35835 0.63335C3.83218 0.447587 4.33822 0.357049 4.84756 0.366916C5.3569 0.376784 5.85958 0.486848 6.32689 0.690842C6.7942 0.894836 7.21699 1.18879 7.57112 1.55585C12.4264 6.59173 19.8904 12.0448 27.8628 9.42376C35.8352 6.80273 54.2649 6.8425 61.7549 11.8939C70.3895 17.7206 69.7629 28.6339 69.2095 38.2642C68.9095 43.5287 68.6214 48.5014 69.7664 52.0262C70.775 55.1189 73.3834 58.1558 76.531 60.6768C76.9819 60.2006 77.4049 59.754 77.8356 59.3765C82.0627 55.4357 86.9774 53.4477 91.2962 53.9361C96.6192 54.5284 100.113 58.7801 100.195 64.7704C100.25 70.0573 97.3594 73.7039 92.4487 74.5175C88.6575 75.1291 83.6402 73.9231 78.5462 71.2419C77.4414 73.3904 76.607 75.6679 76.0619 78.0227C73.2511 90.0426 74.1576 97.4483 79.0031 102.037C84.4653 107.21 95.0526 105.831 106.352 103.814C122.037 101.019 134.401 105.177 141.174 115.524C144.395 120.438 144.815 129.89 145.362 141.875C146.018 156.197 146.832 174.017 153.401 180.345C156.233 183.027 159.368 184.313 163.024 184.23C168.933 184.098 174.615 180.307 176.996 177.793C177.702 177.048 178.675 176.614 179.703 176.588C180.73 176.561 181.727 176.944 182.474 177.651C183.221 178.359 183.657 179.333 183.687 180.361C183.716 181.388 183.336 182.384 182.63 183.129L182.648 183.128ZM83.3056 64.9216C86.4005 66.4052 89.3016 67.1611 91.1914 66.8526C91.9094 66.7359 92.4752 66.6434 92.4525 64.8379C92.4131 61.8384 91.0498 61.6861 90.4681 61.6233C88.7028 61.4381 85.9689 62.5013 83.2972 64.9304L83.3056 64.9216Z"
                fill="#2b318a"
              ></path>
            </svg>
          </motion.div>

          <div className="md:absolute -left-1/3 top-1/7 w-full h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden ">
            <Image
              src={ImageLog}
              alt="Hero Image"
              fill
              className="object-contain "
              priority
            />
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
