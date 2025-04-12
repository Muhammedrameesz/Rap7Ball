// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/RaP7_removebg-preview.png';

interface navType{
  href:string,
  label:string
}

const footerLinks:navType[] = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact Us" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
       
        <div className="flex items-center gap-3">
          <Image src={logo} alt="RaP7 Logo" width={50} height={50} />
          <span className="text-2xl font-bold text-gray-800">RaP7 Ball</span>
        </div>

       
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-base text-gray-600">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {currentYear} RaP7 Ball. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
