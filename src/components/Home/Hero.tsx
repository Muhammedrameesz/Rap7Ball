// components/HeroCarousel.tsx
"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/images/RaP7 Step by Step Procedure_page-0003.jpg";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-white w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src={Logo}
          alt="RaP7 Banner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HeroBanner;
