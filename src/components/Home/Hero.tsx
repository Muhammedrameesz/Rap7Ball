"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageLog from "@/images/RaP7_Step_by_Step_Procedure_page-0003-removebg-preview.png";
import Shapes from "@/app/_Animations/Shapes";

const images = Array(5).fill(ImageLog);

export default function HeroCarousel() {
  return (
    <div className="relative flex justify-center items-center w-full overflow-hidden min-h-screen  ">
     <div
  className="absolute inset-0 bg-no-repeat bg-center bg-cover "
  style={{
    opacity:0.5,
    backgroundImage: `url(https://img.freepik.com/free-vector/background-line-abstract-gradient-colorful-style_483537-2549.jpg?t=st=1744891149~exp=1744894749~hmac=c7c3ea98d1d1db5fdd4c1273346478f7df4d86d05bcbf93b219eeb3240d8acc1&w=1060)`,
  }}
/>

      <Shapes />

      {/* Left Triangle */}
      <div className="hidden md:block absolute inset-0 z-10">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "30vh solid transparent",
            borderBottom: "30vh solid transparent",
            borderLeft: "20vw solid #2b318a",
          }}
        />
      </div>

      {/* Right Triangle */}
      <div className="hidden md:block absolute inset-0 z-10">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "30vh solid transparent",
            borderBottom: "30vh solid transparent",
            borderRight: "20vw solid #2b318a",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10">
        {/* Top-center triangle (only on small screens) */}
        <div
          className={`
      absolute 
      bottom-0 left-1/2 
      -translate-x-1/2 
      md:hidden 
      w-0 h-0
    `}
          style={{
            borderLeft: "30vh solid transparent",
            borderRight: "30vh solid transparent",
            borderBottom: "20vh solid #2b318a",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10">
        <div
          className={`
      absolute 
      top-0 left-1/2 
      -translate-x-1/2 
      md:hidden 
      w-0 h-0
    `}
          style={{
            borderLeft: "30vh solid transparent",
            borderRight: "30vh solid transparent",
            borderTop: "20vh solid #2b318a",
          }}
        />
      </div>

      {/* Carousel */}
      <Carousel className="w-full h-full relative ">
        <CarouselContent className="">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center h-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-96  md:w-[600px] lg:w-[700px] h-auto px-4 relative"
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg  shadow-base rounded-3xl z-[-1]" />

                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain "
                  priority
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious className=" absolute top-0 md:top-1/2 left-1/5 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md transition hover:shadow-custom" />
        <CarouselNext className="absolute top-0 md:top-1/2 right-1/5 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md transition hover:shadow-custom" />
      </Carousel>
    </div>
  );
}
