import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="w-full px-6 py-4 lg:relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:relative">
        {/* Email */}
        <Link
          href="mailto:info@franciscosroofinginc.co"
          className="flex flex-row items-center gap-2 mb-4 lg:mb-0"
        >
          <IoMail className="text-2xl text-black" />
          <span>info@franciscosroofinginc.co</span>
        </Link>

        {/* Nav - absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2  gap-x-6 hidden lg:flex">
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
        <div className="flex flex-row justify-center items-center gap-4">
          <Link
            href="https://www.facebook.com/franciscosroofinginc22/?ref=pages_you_manage"
            className=""
          >
            <FaFacebook size={25} className="text-lg text-black" />
          </Link>
          <Link
            href="https://www.instagram.com/franciscosroofinginc/"
            className=""
          >
            <FaInstagram size={25} className="text-lg text-black" />
          </Link>
          <Link
            href="https://www.google.com/search?q=google+reviews+fransicos+roofing+inc&oq=google+reviews+fransicos+roofing+inc+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIOTE3NmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0xa4814b9241b56cc5:0xbd7592d0537d880d,1,,,,"
            className=""
          >
            <FaGoogle size={25} className="text-lg text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
