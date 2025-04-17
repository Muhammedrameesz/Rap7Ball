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
    <div className="relative flex justify-center items-center w-full overflow-hidden min-h-[350px] md:min-h-screen">
      <Shapes />

      {/* Left Triangle */}
      <div className=" absolute inset-0 z-10">
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
      <div className="absolute inset-0 z-10">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "30vh solid transparent",
            borderBottom: "30vh solid transparent",
            borderRight: "20vw solid #2b318a",
          }}
        />
      </div>

      {/* Carousel */}
      <Carousel className="w-full h-full relative">
        <CarouselContent className="min-h-[200px] md:min-h-screen">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center h-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-80  md:w-[600px] lg:w-[700px] h-auto px-4"
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious
          className="absolute top-1/2 left-2 md:left-1/5 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md transition hover:shadow-custom"
        />
        <CarouselNext
          className="absolute top-1/2 right-2 md:right-1/5 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow-md transition hover:shadow-custom"
        />
      </Carousel>
    </div>
  );
}
