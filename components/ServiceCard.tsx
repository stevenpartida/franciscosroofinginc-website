"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveDownRight, MoveUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  imgSrc: string;
  services: string[];
  href: string;
}

const ServiceCard = ({ title, imgSrc, services, href }: ServiceCardProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} className="inline-block">
      <motion.div
        className="relative w-[500px] h-[500px] overflow-hidden  rounded-2xl cursor-pointer hover:shadow-lg shadow-highlight "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -15 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image src={imgSrc} alt={title} fill className="object-cover"></Image>
        {/* Overlay */}
        <motion.div
          className="absolute top-0 left-0 w-full min-h-full bg-gradient-to-b from-[#12121200] to-[#121212] to-100% "
          animate={{ opacity: hovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        {/* Bottom section */}
        <div className="absolute bottom-0 w-full text-white">
          {/* Service list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-6 space-y-1 text-base font-semibold"
          >
            {services.map((service, i) => (
              <div key={i}>{service}</div>
            ))}
          </motion.div>

          {/* Title + animated arrow */}
          <div className="flex items-center justify-between px-4 py-4 bg-black">
            <motion.span
              animate={{ color: hovered ? "#1e90ff" : "#f8f9fa" }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl font-bold font-roboto"
            >
              {title}
            </motion.span>

            {/* Animated arrow*/}
            <motion.div
              animate={{
                rotate: hovered ? 0 : 90,
                color: hovered ? "#1e90ff" : "#f8f9fa",
              }}
              transition={{ duration: 0.3 }}
              className="origin-center"
            >
              <MoveUpRight className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
