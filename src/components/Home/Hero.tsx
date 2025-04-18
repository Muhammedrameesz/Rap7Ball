// components/HeroCarousel.tsx
"use client";

import React, { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "@/images/RaP7_Step_by_Step_Procedure_page-0003-removebg-preview.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  Logo,
  "https://img.freepik.com/free-vector/players-referee-baseball-match-game-field-isometric-illustration_1284-28484.jpg?t=st=1744987092~exp=1744990692~hmac=d852980cc1791e879e113ca89283d9f2ad69b8d1c874a6725904c55c95fda7c3&w=740",
  "https://img.freepik.com/free-photo/superheroes-are-playing-baseball-3d-rendered-illustration_1057-32197.jpg?t=st=1744987112~exp=1744990712~hmac=dc983ba4b7f1cc5f6368f28f42cb70caea5f1ba3b6b08d8bbc151c4bf0a1dac9&w=740",
  "https://img.freepik.com/free-vector/isometric-baseball-flowchart_1284-59152.jpg?t=st=1744987159~exp=1744990759~hmac=040bf83aceee4ed2841bc0fdf2c25156628da80314189f9aa202d292e51b3308&w=826",
];

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-4 right-10 md:right-6 lg:right-12 z-20 p-2 bg-white rounded-full shadow-custom cursor-pointer
                 md:top-1/2 md:translate-y-[-50%] md:bottom-auto md:left-auto"
    >
      <ChevronRight className="text-black w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
};

const CustomPrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-4 left-10 md:left-6 lg:left-12 z-20 p-2 bg-white rounded-full shadow-custom cursor-pointer
                 md:top-1/2 md:translate-y-[-50%] md:bottom-auto md:right-auto"
    >
      <ChevronLeft className="text-black w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
};

const HeroCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    <section className="relative bg-gradient-to-br from-white via-[#fdfdfd] to-red-100 min-h-screen flex items-center justify-center py-16">
      <div className="relative z-10 max-w-7xl w-full px-4">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform 
              hover:scale-[1.015] duration-500 ease-in-out"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={700}
                  height={400}
                  className="object-fit md:object-cover w-full h-[320px] md:h-[400px] lg:h-[450px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroCarousel;
