"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      className="relative bg-grey-custom/20 lg:rounded-[40px] flex flex-col items-center justify-center w-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center gap-4 p-8 md:p-12 lg:p-16 xl:p-20">
        <Image
          src="/logoBlack.png"
          alt="Fransicos Roofing Inc Logo"
          width={240}
          height={240}
          className="hidden md:block"
        ></Image>
        <Image
          src="/logoBlack.png"
          alt="Fransicos Roofing Inc Logo"
          width={180}
          height={180}
          className="md:hidden"
        ></Image>
        <h1 className="font-manrope text-center text-4xl md:text-6xl font-bold md:tracking-tighter leading-8 md:leading-13 text-black mt-[-30px] md:mt-[-50px]">
          Get in Touch
        </h1>
        <p className="font-roboto text-center text-base md:text-lg text-black">
          We’re here to help! Contact us today for expert advice and a free
          roofing estimate.
        </p>
        <Link href="/contact">
          <Button variant="gradient">Contact Us</Button>
        </Link>
      </div>

      <div className="lg:absolute lg:bottom-0 w-full">
        <Footer />
      </div>
    </motion.div>
  );
};

export default CTA;
