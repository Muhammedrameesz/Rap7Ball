"use client";

import * as React from "react";
import Image from "next/image";
import imae1 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-35.jpg";
import imae2 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-36.jpg";
import imae3 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-37.jpg";
import imae4 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-38.jpg";
import imae5 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-39.jpg";
import imae6 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-40.jpg";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [imae3, imae4, imae5, imae6, imae2, imae1];

export function CarouselDemo() {
  return (
    <section className="relative w-full overflow-x-hidden bg-black text-white py-16 md:py-28 px-4 md:px-8">
    
      <div className="relative z-10 max-w-7xl mx-auto mb-12 px-2 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="p-2">
                      <Card className=" border-none shadow-xl rounded-2xl">
                        <CardContent className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src={src}
                            alt={`RaP 7 Ball Image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black hover:bg-gray-200 cursor-pointer" />
              <CarouselNext className="text-black hover:bg-gray-200 cursor-pointer" />
            </Carousel>
          </motion.div>

        
          <motion.div
            className="lg:col-span-1 text-center lg:text-left px-4"
            initial={{ opacity: 0, scale:0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-gray-200 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              Meet the team behind RaP7 Ball – their passion drives the game forward.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
