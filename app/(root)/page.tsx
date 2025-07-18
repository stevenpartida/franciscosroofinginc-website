"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Star,
  CircleCheck,
  ChevronRight,
  Gift,
  BookmarkCheck,
  ShieldCheck,
  Award,
} from "lucide-react";
import ReviewCarousel from "@/components/ReviewCarousel";
import ServiceCard from "@/components/ServiceCard";
import LogoCloud from "@/components/LogoCloud";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const stats = [
  {
    id: 1,
    title: "Total Projects",
    value: 800,
    icon: <Plus className="text-highlight w-8 h-8" />,
  },
  {
    id: 2,
    title: "Total Clients",
    value: 500,
    icon: <Plus className="text-highlight w-8 h-8" />,
  },
  {
    id: 3,
    title: "Rated Reviews",
    value: 5.0,
    icon: <Star className="text-highlight fill-highlight w-6 h-6" />,
  },
];

const guarantees = [
  {
    id: 1,
    icon: <Gift className="text-highlight w-10 h-10 md:w-12 md:h-12" />,
    title: (
      <>
        High <br /> Quality
      </>
    ),
    description:
      "We use only the best materials and premium products to ensure long-lasting and durable roofing solutions.",
  },
  {
    id: 2,
    icon: <Award className="text-highlight w-10 h-10 md:w-12 md:h-12" />,
    title: (
      <>
        Satisfaction <br /> Guaranteed
      </>
    ),
    description:
      "We guarantee exceptional roofing service, ensuring a smooth and worry-free experience from start to finish.",
  },
  {
    id: 3,
    icon: <ShieldCheck className="text-highlight w-10 h-10 md:w-12 md:h-12" />,
    title: (
      <>
        Licensed & <br /> Insured
      </>
    ),
    description:
      "We are fully licensed and insured, giving you peace of mind that your property is in safe, professional hands.",
  },
];

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      {/* Landing Section */}
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
              <h1 className="font-manrope text-white uppercase font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-6xl">
                FRANCISCO'S <br />
                ROOFING INC <br />
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
      {/* Achievements Sections */}
      <section className="w-full bg-black text-white py-12 sm:py-14 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 font-roboto">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              >
                <dt className="text-base font-light">{stat.title}</dt>
                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight sm:text-5xl">
                  <span className="pr-2">{stat.value}</span>
                  {stat.icon}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="w-full lg:flex lg:flex-row justify-center gap-x-4 px-4 py-6 lg:px-14 lg:py-28">
        {/* Left Images */}
        <motion.div
          className=" flex flex-row items-center justify-center gap-x-4 lg:gap-x-8 font-roboto relative mt-8 w-full mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Image 1 with Black Box */}
          <div className="relative flex flex-col gap-x-8 gap-y-4 lg:gap-x-8 lg:gap-y-4">
            <div className="relative w-40 h-44 lg:w-64 lg:h-72 overflow-hidden rounded-lg rounded-tl-[80]">
              <Image
                src="/worker1.jpg"
                alt="worker1"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="bg-black text-white flex flex-col justify-center text-center py-2 relative w-40 h-20 not-odd:lg:w-64 lg:h-32 rounded-lg">
              <h1 className="font-extrabold text-3xl">35 +</h1>
              <p className="text-sm font-light">Years of Experience</p>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative w-40 h-[270px] lg:w-64 lg:h-[432px] overflow-hidden  rounded-lg rounded-br-[80]">
            <Image
              src="/worker2.jpg"
              alt="worker2"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </motion.div>
        {/* Right Text Section */}
        <motion.div
          className="relative flex flex-col mt-8 px-4 lg:pl-12 w-full mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="capitalize text-lg lg:text-base font-bold font-roboto">
            Our Mission
          </h1>
          <h1 className="uppercase font-extrabold font-manrope text-4xl lg:text-5xl tracking-tighter text-black ">
            Family-Owned, <br />
            <span className="">Quality Roofing</span>
          </h1>
          <p className="font-roboto text-base font-medium text-black my-4">
            At Francisco’s Roofing Inc., we believe every home and business
            deserves top-tier protection. That’s why we use premium materials
            and advanced techniques to build weather-resistant, long-lasting
            roofs for both residential and commercial projects.
          </p>
          <div>
            <ul className="list-none flex flex-col gap-y-4">
              <li className="flex flex-row gap-x-2 items-center font-roboto text-black text-base font-bold">
                <CircleCheck className="text-highlight w-5 h-5" />
                Premium Materials – Strength and longevity you can trust.
              </li>
              <li className="flex flex-row gap-x-2 items-center font-roboto text-black text-base font-bold">
                <CircleCheck className="text-highlight w-5 h-5" />
                Reliable Service – Trusted by homeowners and businesses.
              </li>
              <li className="flex flex-row gap-x-2 items-center font-roboto text-black text-base font-bold">
                <CircleCheck className="text-highlight w-5 h-5" />
                Weather-Resistant Roofing – Built for any season, any storm.
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center lg:justify-start mt-4">
            <Link href="/about">
              <Button
                variant={"gradient"}
                className="font-roboto font-bold w-auto mt-8"
              >
                Read More <ChevronRight />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Testimonials Section */}
      <section className="lg:flex lg:flex-row justify-center px-4 py-6  lg:py-14 overflow-hidden bg-black lg:px-28">
        <motion.div
          className="flex flex-col justify-center mb-8 w-full mx-auto "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col text-white">
            <h1 className="uppercase  font-extrabold font-manrope text-4xl tracking-tighter text-center  md:text-start md:text-balance ">
              Hear it from <br /> Homeowners & Businesses <br />
              Not just us!
            </h1>
            <p className="font-roboto text-lg font-medium text-center md:text-start lg:text-base  my-4">
              Discover what our clients have to say about their experience with
              our services.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <Link href="https://www.google.com/search?q=google+reviews+fransicos+roofing+inc&oq=google+reviews+fransicos+roofing+inc+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIOTE3NmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0xa4814b9241b56cc5:0xbd7592d0537d880d,1,,,,">
              <Button
                variant={"gradient"}
                className="font-roboto font-bold w-auto my-4 lg:mt-8"
              >
                More Reviews <ChevronRight />
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full mx-auto flex justify-center items-center"
        >
          <ReviewCarousel />
        </motion.div>
      </section>
      {/* Guarantees Section */}
      <section className="w-full text-black px-4 py-6 lg:py-18 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 font-roboto">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {guarantees.map((guarantee, i) => (
              <motion.div
                key={guarantee.id}
                className="mx-auto flex max-w-md flex-col gap-y-3 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              >
                <dt className="text-sm font-normal  text-balance ">
                  {guarantee.description}
                </dt>
                <dd className="order-first flex flex-row items-center justify-center space-x-2">
                  <div>{guarantee.icon}</div>
                  <div className="font-roboto text-black text-xl md:text-2xl text-center font-semibold leading-none">
                    {guarantee.title}
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
      {/* Projects Section */}
      <section className="relative w-full h-screen ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/ProjectsIMG.png"
            alt="Projects Image"
            fill
            className="object-cover "
            priority
          ></Image>
        </motion.div>

        <div className="absolute top-0 left-0 w-full min-h-full bg-gradient-to-b from-[#12121200] to-[#121212] to-100%"></div>

        <div>
          <div></div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="w-full mx-auto min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 py-6 sm:px-6 md:px-10 lg:px-14 py-20"
      >
        <motion.h1
          className="capitalize font-extrabold font-manrope text-4xl text-center lg:text-7xl tracking-tighter text-white mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          Our Services
        </motion.h1>

        <div className="w-full max-w-5xl flex flex-col gap-y-10 lg:flex-row lg:gap-x-6 lg:gap-y-0 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ServiceCard
              title="Residential"
              imgSrc="/residential.jpg"
              services={[
                "Roof Installation",
                "Roof Repair",
                "Gutter Installation",
                "Roof Maintenance",
                "Flat & Low-Slope Roofing",
                "Roof Coating & Water Proofing",
              ]}
              href="/services"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ServiceCard
              title="Commercial"
              imgSrc="/commercial.jpg"
              services={[
                "Roof Installation",
                "Roof Repair",
                "Gutter Installation",
                "Roof Maintenance",
                "Flat & Low-Slope Roofing",
                "Roof Coating & Water Proofing",
              ]}
              href="/services"
            />
          </motion.div>
        </div>
      </section>
      {/* Material Section */}
      <section className="w-full mx-auto flex justify-center items-center px-4 py-6 lg:px-14 lg:py-14 ">
        <LogoCloud />
      </section>
      {/* CTA Section */}
      <section className="w-full  lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}
