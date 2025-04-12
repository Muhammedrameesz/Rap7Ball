"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/images/RaP7_removebg-preview.png";


interface navType {
  name:string,
  path:string
}
const navLinks:navType[] = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    router.push("/");
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-4 z-50 w-full md:w-[90%] mx-auto rounded-non md:rounded-full bg-white text-gray-900 shadow-base px-6 md:px-14 py-4 flex justify-between items-center">
  
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <Image src={Logo} alt="RaP7 Logo" width={60} height={50} />
          <span className="text-xl font-semibold text-customBlue">
            RaP <span className="text-red-500 text-2xl">7</span> Ball
          </span>
        </div>

      
        <div className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-purple-700 transition-colors duration-200 ${
                pathname === link.path ? "text-purple-800" : "text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

     
        <div className="md:hidden">
          <Menu size={28} className="cursor-pointer" onClick={() => setIsOpen(true)} />
        </div>
      </nav>

    
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full bg-white z-[999] overflow-hidden shadow-lg"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
              <div className="flex items-center gap-2">
                <Image src={Logo} alt="RaP7 Logo" width={40} height={35} />
                <span className="text-lg font-semibold text-customBlue">
                  RaP <span className="text-red-500 text-xl">7</span> Ball
                </span>
              </div>
              <X size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex flex-col items-start px-6 py-10 gap-6 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg hover:text-purple-700 transition-colors duration-200 ${
                    pathname === link.path ? "text-purple-800" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
