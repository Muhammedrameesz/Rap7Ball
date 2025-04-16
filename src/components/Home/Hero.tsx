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

const images = Array(5).fill(ImageLog); // 5 repeating images

export default function HeroCarousel() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Carousel className="w-full h-full relative">
        <CarouselContent className="h-screen">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center h-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-72 sm:w-96 md:w-[650px] h-auto "
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

        {/* Navigation buttons - visible and centered vertically */}
        <CarouselPrevious className="absolute top-1/2 left-1/5 -translate-y-1/2  z-10 text-black bg-purple-200
        hover:bg-white p-2 rounded-full shadow-md transition cursor-pointer" />
        <CarouselNext className="absolute top-1/2 right-1/5 -translate-y-1/2 z-10 text-black bg-purple-200
         hover:bg-white p-2 rounded-full shadow-md transition cursor-pointer" />
      </Carousel>
    </div>
  );
}
