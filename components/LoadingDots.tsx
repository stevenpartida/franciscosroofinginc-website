"use client";

import { motion, Variants } from "framer-motion";

const dotVariants: Variants = {
  jump: {
    y: -30,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export default function LoadingDots() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-3">
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={dotVariants}
        animate="jump"
        transition={{ delay: 0 }}
      />
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={dotVariants}
        animate="jump"
        transition={{ delay: 0.15 }}
      />
      <motion.span
        className="w-4 h-4 rounded-full bg-black"
        variants={dotVariants}
        animate="jump"
        transition={{ delay: 0.3 }}
      />
    </div>
  );
}
