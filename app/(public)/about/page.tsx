"use client";

import { main } from "framer-motion/client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const aboutParagraphs = [
  <>
    At <span className="font-extrabold">Francisco's Roofing Inc.</span>, roofing
    isn’t just a job—it’s a family tradition rooted in dedication,
    craftsmanship, and service. Founded in 2020, our company proudly serves the
    Los Angeles area with a commitment to quality and professionalism that
    reflects decades of hands-on experience.
  </>,
  <>
    We are a family-owned and veteran-owned business, led by the father-and-son
    team of Francisco Sr. and Francisco Jr. With over 30 years in the roofing
    industry, Francisco Sr. brings a wealth of expertise, attention to detail,
    and a deep understanding of what it takes to build a durable and lasting
    roof. Francisco Jr., a proud U.S. Army veteran, carries the same values of
    integrity, discipline, and service into every project we take on.
  </>,
  <>
    Fully licensed and insured, we stand behind our work and prioritize safety,
    reliability, and long-term value for our clients. Whether it’s a simple
    repair or a complete roof replacement, our team is committed to providing
    honest recommendations, top-tier workmanship, and a smooth customer
    experience from start to finish.
  </>,
  <>
    At the heart of our business is a belief in doing things right the first
    time. Our reputation is built not only on the roofs we’ve completed but on
    the trust we’ve earned in our community. When you work with us, you're not
    just hiring a contractor—you’re partnering with a local team that treats
    every home like it’s our own.
  </>,
];

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
      <section className="w-full min-h-screen flex flex-col items-center gap-10 px-4 py-10 md:flex-row md:justify-between md:px-14 md:py-14 lg:px-28">
        {/* Image */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square bg-white flex items-center justify-center rounded-lg overflow-hidden shadow-xl mt-12 lg:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/logoBlack.png"
            alt="Francisco's Roofing Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-6 max-w-xl">
          {/* Heading */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3"
          >
            <h3 className="text-black font-manrope uppercase text-sm sm:text-base tracking-wide">
              About Francisco's Roofing Inc.
            </h3>
            <h1 className="text-3xl sm:text-4xl font-roboto font-bold uppercase text-black leading-snug">
              Built on Family, <br /> Service, and Experience
            </h1>
          </motion.section>

          {aboutParagraphs.map((paragraph, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.2 * (index + 1),
                ease: "easeOut",
              }}
            >
              <p className="text-sm sm:text-base text-black font-roboto leading-relaxed">
                {paragraph}
              </p>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="w-full pt-12 lg:lg-0 lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
};

export default About;
