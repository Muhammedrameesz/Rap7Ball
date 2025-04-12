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
    <section
      className="relative w-full text-white py-16 md:py-28 px-4 md:px-8"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/3d-render-cricket-stadium-with-playground-bat-ball-stamps-with-helmet_752894-87.jpg?w=740)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
 
      <div className="absolute inset-0 bg-black/80 z-0" />
    
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
          RaP <span className="text-4xl text-white md:text-5xl">7</span> Ball
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
          numquam incidunt obcaecati sapiente cum ut nisi illo est quis, quia
          magni, perferendis delectus ad excepturi exercitationem dolores quo
          nulla temporibus.
        </p>
      </div>

    
      <motion.section
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-2">
                  <Card className="bg-gray-800 border-none shadow-xl rounded-2xl">
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
          <CarouselPrevious className=" text-black  hover:bg-gray-200 cursor-pointer" />
          <CarouselNext className="text-black  hover:bg-gray-200 cursor-pointer" />
        </Carousel>
      </motion.section>
    </section>
  );
}
