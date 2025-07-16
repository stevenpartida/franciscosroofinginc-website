"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LogoCloud = () => {
  return (
    <motion.div
      className="mx-auto grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl place-items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* Top 4 Logos */}
      <motion.div variants={logoVariants}>
        <Image
          src="/logos/eagleRoofing.png"
          alt="eagle roofing logo"
          width={164}
          height={92}
          className="max-h-12 w-full object-contain"
        />
      </motion.div>
      <motion.div variants={logoVariants}>
        <Image
          src="/logos/certainTeed.png"
          alt="certainteed logo"
          width={164}
          height={43}
          className="max-h-12 w-full object-contain"
        />
      </motion.div>
      <motion.div variants={logoVariants}>
        <Image
          src="/logos/owensCorning.png"
          alt="owens corning logo"
          width={164}
          height={72}
          className="max-h-12 w-full object-contain"
        />
      </motion.div>
      <motion.div variants={logoVariants}>
        <Image
          src="/logos/GAF.png"
          alt="gaf logo"
          width={164}
          height={72}
          className="max-h-12 w-full object-contain"
        />
      </motion.div>

      {/* Last logo full-width on mobile, center aligned */}
      <motion.div
        variants={logoVariants}
        className="col-span-2 flex justify-center sm:col-span-1 lg:col-span-1"
      >
        <Image
          src="/logos/malarkey.png"
          alt="malarkey logo"
          width={164}
          height={51}
          className="max-h-12 w-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoCloud;
