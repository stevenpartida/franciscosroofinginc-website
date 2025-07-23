"use client";

import { main } from "framer-motion/client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <main className=" w-full bg-white">
      <section className="relative w-full h-screen">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/HeroVideo.mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute top-0 left-0 w-full min-h-full bg-gradient-to-b from-[#12121200] to-[#121212] to-100%"></div>

        <div>
          <Navbar theme="light" />
        </div>

        {/* Content */}
        <div className=" relative h-full w-full z-10 flex flex-col justify-center text-center md:text-start md:justify-end">
          <div className=" w-full relative md:flex md:flex-row md:justify-between md:items-end md:px-14 md:py-14 lg:px-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.0, ease: "easeOut" }}
            >
              <h1 className="font-manrope text-white uppercase font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-5xl">
                TRUSTED ROOFING <br />
                SOLUTIONS FOR <br />
                HOMES & BUSINESSES
              </h1>
              <p className="font-roboto text-white capitalize font-semibold text-base mt-2">
                High Quality Roofing & Repair Service
              </p>
            </motion.div>
            <motion.div
              className="font-roboto text-white flex flex-col space-y-8 m-8 lg:m-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-sm sm:text-base font-bold leading-5">
                We use top-quality materials and expert <br />
                techniques to deliver long-lasting <br />
                roofing solutions.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="/contact">
                  <Button variant="gradient">Get Free Estimate</Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-row items-center justify-center gap-10 md:px-14 md:py-14 lg:px-28">
        {/* Left: Image */}
        <div className="w-[400px] h-[400px] bg-white flex items-center justify-center rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/logoBlack.png"
            alt="Francisco's Roofing Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right: Text Content (in column layout) */}
        <div className="flex flex-col gap-8 max-w-xl">
          {/* Text Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start space-y-4"
          >
            <h3 className="text-black font-manrope uppercase text-base sm:text-lg tracking-widest font-light">
              About Francisco's Roofing Inc.
            </h3>
            <h1 className="text-4xl font-roboto font-bold uppercase text-black">
              Contact Us
            </h1>
          </motion.section>

          <section>
            <p className="text-base text-black">
              Have roofing questions or need assistance? Contact us today! We're
              here to help at every step and offer free, no-obligation estimates
              to ensure your project starts with confidence.
            </p>
          </section>
        </div>
      </section>

      <section className="w-full  lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
};

export default About;
