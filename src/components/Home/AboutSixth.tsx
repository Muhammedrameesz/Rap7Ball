"use client";

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0012.jpg";
import ImageThree from "@/images/RaP7 Step by Step Procedure_page-0014.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSixth() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Top Image */}
        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="relative w-full h-64 md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src={ImageThree}
            alt="RaP7 Game Setup - Image One"
            fill
            className="object-cover"
            priority
          />
        </motion.section>

        {/* Bottom Image */}
        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: [0.25, 1, 0.5, 1]
            }}
          className="relative w-full h-64 md:h-[450px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src={ImageTwo}
            alt="RaP7 Game Setup - Image Two"
            fill
            className="object-cover"
            priority
          />
        </motion.section>
      </main>
    </div>
  );
}
