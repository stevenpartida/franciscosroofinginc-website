import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const Footer = () => {
  return (
    <div className="w-full px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Email */}
        <Link
          href="mailto:info@franciscosroofinginc.co"
          className="flex flex-row items-center gap-2"
        >
          <IoMail className="text-2xl text-black" />
          <span>info@franciscosroofinginc.co</span>
        </Link>

        {/* Nav - absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium relative  after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full after:bg-black text-black hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-row items-center gap-4">
          <Link href="/" className="">
            <FaFacebook size={25} className="text-lg text-black" />
          </Link>
          <Link href="/" className="">
            <FaInstagram size={25} className="text-lg text-black" />
          </Link>
          <Link href="/" className="">
            <FaGoogle size={25} className="text-lg text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
