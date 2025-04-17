"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Shapes: React.FC = () => {
    const shapes: string[] = [
        "square",
        "circle",
        "pyramid",
        "pyramid2",
        "cross",
        "circleBorder",
        "flippingCircle",
        "blob1",
        "blob2",
        "blob3",
        "blurCircle",
        "squiggly",
        "dot",
        "squareDot",
        "flashingDot",
        "orbitDot",
        "zigzagDot",
      ];
      

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33A1"];

  const motionSettings = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: [0, 200, 0], y: [0, 200, 0] },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
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
              className="w-2 h-2 absolute"
              style={{
                backgroundColor: randomColor,
                left,
                top,
              }}
              {...motionSettings}
            />
          );

          case "dot":
            return (
              <motion.div
                key={index}
                className="absolute rounded-b-full"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: randomColor,
                  top,
                  left,
                }}
                initial={{ opacity: 0.3, y: 0 }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          
          case "squareDot":
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: randomColor,
                  top,
                  left,
                }}
                initial={{ opacity: 0.5, x: 0 }}
                animate={{ opacity: [0.5, 1, 0.5], x: [0, -10, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          
          case "flashingDot":
            return (
              <motion.div
                key={index}
                className="absolute rounded-t-2xl"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: randomColor,
                  top,
                  left,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1 + Math.random() * 2, repeat: Infinity }}
              />
            );
          
          case "orbitDot":
            return (
              <motion.div
                key={index}
                className="absolute rounded-full"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: randomColor,
                  top,
                  left,
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, ease: "linear" }}
              />
            );
          
          case "zigzagDot":
            return (
              <motion.div
                key={index}
                className="absolute rounded-xl"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: randomColor,
                  top,
                  left,
                }}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 10, -10, 10, 0], y: [0, -5, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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

export default Shapes;
