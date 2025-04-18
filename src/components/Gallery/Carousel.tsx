"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { CustomArrowProps } from "react-slick";

import imae1 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-35.jpg";
import imae2 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-36.jpg";
import imae3 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-37.jpg";
import imae4 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-38.jpg";
import imae5 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-39.jpg";
import imae6 from "@/images/GalleryImages/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-40.jpg";
import SGroundImage from "@/images/baseball-player-cartoon-character-transparent-background.png";

const images = [imae1, imae2, imae3, imae4, imae5, imae6];

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute z-10 bottom-4 left-1/2 transform -translate-x-10 md:translate-x-0 
    md:bottom-1/2 md:left-4 p-2 bg-black hover:bg-black/80 backdrop-blur-md rounded-full 
    cursor-pointer transition"
    onClick={onClick}
    role="button"
    aria-label="Previous Slide"
  >
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </div>
);

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <div
    className="absolute z-10 bottom-4 right-1/2 transform translate-x-16 md:translate-x-0 
    md:bottom-1/2 md:right-4 p-2 bg-black hover:bg-black/80 backdrop-blur-md rounded-full cursor-pointer transition "
    onClick={onClick}
    role="button"
    aria-label="Next Slide"
  >
    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
      <path d="M9 6l6 6-6 6" />
    </svg>
  </div>
);

const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-black text-white py-16 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left side - Carousel */}
        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-4">
                <div className="rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 ease-in-out ">
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-[300px] md:h-[380px] lg:h-[420px] object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          className="w-full lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-gray-100 text-2xl sm:text-4xl lg:text-5xl font-medium leading-snug mb-4">
            Meet the team behind{" "}
            <span className="text-customBlue">RaP7 Ball</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Their passion and dedication fuel the energy and vision of this
            revolutionary sport.
          </p>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <Image
              src={SGroundImage}
              alt="Image"
              width={600}
              height={400}
              className="object-contain w-full h-auto rounded-xl "
              priority
            />
          </div>
          {/* <div className="hidden md:block mt-4 h-1 w-1/2 bg-customBlue rounded-lg" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
