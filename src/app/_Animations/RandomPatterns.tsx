"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const RandomShapes: React.FC = () => {
  const shapes: string[] = [
    "square",
    "circle",
    "pyramid",
    "pyramid2",
    "cross",
    "circleBorder",
    "animatedShape",
    "flippingCircle",
  ];

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1"];

  const motionSettings = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: [0, 200, 0], y: [0, 200, 0] },
    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" as const },
  };

  const [elements, setElements] = useState<(React.ReactElement | null)[]>([]);


  useEffect(() => {
    const generated = shapes.map((shape, index) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      switch (shape) {
        case "square":
          return (
            <motion.div
              key={index}
              className="w-4 h-4 absolute"
              style={{
                backgroundColor: randomColor,
                left,
                top,
              }}
              {...motionSettings}
            />
          );

        case "circle":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 rounded-full absolute top-[50%] left-[90%] bg-gradient-to-tr from-blue-400 via-white to-blue-400"
            />
          );

        case "circleBorder":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{ opacity: 1, x: [0, 400, 200, 0], y: [0, 250, 200, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 rounded-full absolute top-28 left-56 border-4 border-gray-300"
            />
          );

        case "pyramid":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                x: [0, 400, 200, 0],
                y: [0, 250, 200, 0],
                rotate: [45, 90, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute border shadow-base"
              style={{
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `20px solid #fff`,
                top: "10%",
                left: "50%",
              }}
            />
          );

        case "pyramid2":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                x: [200, 50, 0, 200],
                y: [200, 50, 0, 200],
                rotate: [45, 90, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute border"
              style={{
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `20px solid #96b4e0`,
                top: "20%",
                left: "20%",
              }}
            />
          );

        case "cross":
          return (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center top-56 left-52"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-6 h-1 bg-green-500 absolute" />
              <div className="w-1 h-6 bg-green-500 absolute" />
            </motion.div>
          );

        case "flippingCircle":
          return (
            <motion.div
              key={index}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute flex items-center justify-center shadow-2xl"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "linear-gradient(to right, #f06565, #f04949)",
                top: "150px",
                left: "100px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            />
          );

        default:
          return null;
      }
    });

    setElements(generated);
  }, []);

  return (
    <div className="absolute w-full min-h-[300px] overflow-hidden opacity-50">
      {elements}
    </div>
  );
};

export default RandomShapes;
