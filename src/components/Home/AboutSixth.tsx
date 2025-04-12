'use client';

import ImageTwo from "@/images/RaP7 Step by Step Procedure_page-0012.jpg";
import ImageThree from "@/images/RaP7 Step by Step Procedure_page-0014.jpg";
import ImageFour from "@/images/76088ea9-27ff-4c05-8e83-1ee6edcb1b4f-11.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSixth() {
  return (
    <div className="px-4 md:px-16 py-16 bg-gray-50">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       
        <div className="flex flex-col gap-4">
          {/* Top Left Image */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[250px] rounded-xl overflow-hidden"
          >
            <Image
              src={ImageThree}
              alt="RaP7 Game Image - Top"
              fill
              className="object-fit"
              priority
            />
          </motion.section>

     
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[250px]  rounded-xl overflow-hidden"
          >
            <Image
              src={ImageTwo}
              alt="RaP7 Game Image - Bottom"
              fill
              className="object-fit"
              priority
            />
          </motion.section>
        </div>

    
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden"
        >
          <Image
            src={ImageFour}
            alt="RaP7 Game Image - Right"
            fill
            className="object-cover "
            priority
          />
        </motion.section>
      </main>
    </div>
  );
}
