"use client";
import React from "react";
import ProjectGrid from "@/components/ProjectGrid";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export default function page() {
  return (
    <main className="relative flex justify-center flex-col items-center w-full  bg-white text-black">
      <motion.section
        className="flex justify-center items-center  px-4 pt-12  lg:py-12  lg:px-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-black font-manrope capitalize tracking-tight text-center">
          Projects
        </h1>
      </motion.section>

      <section className="w-full px-4 pb-8">
        <ProjectGrid />
      </section>
      <section className="w-full lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}
