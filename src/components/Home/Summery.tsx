"use client";

import { motion } from "framer-motion";
import { FaVolleyball } from "react-icons/fa6";

interface cardType {
  icon: React.ReactNode;
  name: string;
  description: string;
  description2?: string;
}
const features: cardType[] = [
  {
    icon: <FaVolleyball className="text-red-500 text-4xl" />,
    name: "Summary",
    description: "Distance between bases: 7x3 = 21 meters",
    description2:
      "Distance between pitching box and home base pylon: 7x3 = 21 meters",
  },
  {
    icon: <FaVolleyball className="text-purple-500 text-4xl" />,
    name: "Summary",
    description:
      "A bounce zone, 7 meters long and 3 meters wide, is added to protect the batsman from direct hit of ball.",
  },
  {
    icon: <FaVolleyball className="text-yellow-500 text-4xl" />,
    name: "Summary",
    description:
      "Boundary distance from the home pylon, when playing with hard Tennis ball is (7x7) + (7x2) = 63 meters",
  },

  {
    icon: <FaVolleyball className="text-lime-500 text-4xl" />,
    name: "Summary",
    description:
      "Boundary distance from the home pylon, when playing with T-ball is 7x10 = 70 meters",
  },
  {
    icon: <FaVolleyball className="text-blue-500 text-4xl" />,
    name: "Summary",
    description:
      "Boundary distance from the home pylon, when playing with Cricket ball is 7x11 = 77 meters",
  },
  {
    icon: <FaVolleyball className="text-fuchsia-500 text-4xl" />,
    name: "Summary",
    description:
      "Game is over when all batsmen are out or when 2 innings are completed or when (7x2) = 14 overs are completed or when (7x7)x2 = 98 balls are pitched",
  },
];

export default function CardSection() {
  return (
    <div className="font-jakarta py-10 bg-white space-y-10  ">
      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-7xl gap-7">
        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="flex flex-col justify-center items-center text-center gap-5 col-span-1 md:col-span-2 bg-gradient-to-br from-gray-950 via-customBlue to-black py-16 text-white rounded-3xl"
        >
          <h1 className=" shadow-sm shadow-red-500 text-lg font-semibold text-red-500  rounded-full px-4 py-1">
          Rap <span className="text-white text-xl">7</span> Ball
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-300 font-bold">
          Where Cricket Meets Baseball — 
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-300 font-bold">Rap7 style! Game on!</h1>
        </motion.section>

        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="flex flex-col justify-center bg-white shadow-newNormal rounded-3xl space-y-5 p-8"
        >
          <div className="flex gap-5 items-center">
            <FaVolleyball className="text-4xl text-green-500" />
            <h1 className="text-xl font-semibold text-gray-900">Summary</h1>
          </div>
          <div className="text-base font-medium text-gray-500 space-y-1">
            <h1>
              {" "}
              <span className="text-green-500 mr-2">✔</span> A Team has Ten
              players
            </h1>
            <h1>
              {" "}
              <span className="text-green-500 mr-2">✔</span> 7 Active players in
              the field
            </h1>
            <h1>
              {" "}
              <span className="text-green-500 mr-2">✔</span> 7 Pitches is an
              over
            </h1>
            <h1>
              {" "}
              <span className="text-green-500 mr-2">✔</span> 7 Overs is an
              innings
            </h1>
          </div>
          <div className="bg-gray-100 h-[1px] w-[100%]" />
        </motion.section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 mx-auto max-w-7xl gap-7">
        {features.map((item, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="flex flex-col justify-center bg-white shadow-newNormal rounded-3xl space-y-5 p-8"
          >
            <div className="flex items-center gap-5">
              <div>{item.icon}</div>
              <h1 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h1>
            </div>
            <div className="text-base font-medium text-gray-500">
              <div className="flex">
                <span className="text-green-500 mr-2">✔</span>
                <h1>{item.description}</h1>
              </div>
              {item.description2 && (
                <div className="flex">
                  <span className="text-green-500 mr-2">✔</span>
                  <h1>{item.description2}</h1>
                </div>
              )}
            </div>
            <div className="bg-gray-200 h-[1px] w-[100%]" />
          </motion.section>
        ))}
      </div>
    </div>
  );
}
