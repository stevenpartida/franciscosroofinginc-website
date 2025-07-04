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
import { title } from "process";
import { Description } from "@headlessui/react";
import { div } from "framer-motion/client";
import LogoCloud from "@/components/LogoCloud";
import CTA from "@/components/CTA";

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
    value: 4.8,
    icon: <Star className="text-highlight fill-highlight w-6 h-6" />,
  },
];

const guarantees = [
  {
    id: 1,
    icon: <Gift className="text-highlight w-12 h-12" />,
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
    icon: <Award className="text-highlight w-12 h-12" />,
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
    icon: <ShieldCheck className="text-highlight w-12 h-12" />,
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

        {/* Content */}
        <div className=" relative h-full w-full z-10 flex flex-col justify-center text-center md:text-start md:justify-end">
          <div className=" w-full relative md:flex md:flex-row md:justify-between md:items-end md:px-14 md:py-14">
            <div>
              <h1 className="font-manrope text-white uppercase font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-6xl">
                FRANCISCO'S <br />
                ROOFING INC <br />
              </h1>
              <p className="font-roboto text-white capitalize font-semibold text-base mt-2">
                High Quality Roofing & Repair Service
              </p>
            </div>
            <div className="font-roboto text-white flex flex-col space-y-8 m-8 lg:m-0">
              <p className="text-sm sm:text-base font-bold leading-5">
                We use top-quality materials and expert <br />
                techniques to deliver long-lasting <br />
                roofing solutions.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="/">
                  <Button variant="gradient">Get Free Estimate</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements Sections */}
      <section className="w-full bg-black text-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 font-roboto">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-2"
              >
                <dt className="text-base font-light">{stat.title}</dt>
                <dd className="order-first flex items-center justify-center text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                  {stat.icon}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      {/* Our Mission Section */}
      <section className="w-full flex flex-row justify-center gap-x-4  px-14 py-24">
        {/* Left Images */}
        <div className="flex flex-row gap-x-8 font-roboto relative mt-8 w-full mx-auto">
          {/* Image 1 with Black Box */}
          <div className="relative lg:flex flex-col lg:gap-x-8 lg:gap-y-4">
            <div className="relative lg:w-64 lg:h-72 overflow-hidden rounded-lg rounded-tl-[80]">
              <Image
                src="/worker1.jpg"
                alt="worker1"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="bg-black text-white flex flex-col justify-center text-center py-2 relative lg:w-64 lg:h-32 rounded-lg">
              <h1 className="font-extrabold text-3xl">35 +</h1>
              <p className="text-sm font-light">Years of Experience</p>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative lg:w-64 overflow-hidden lg:h-108 rounded-lg rounded-br-[80]">
            <Image
              src="/worker2.jpg"
              alt="worker2"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
        {/* Right Text Section */}
        <div className="relative flex flex-col mt-8 pl-12 w-full mx-auto">
          <h1 className="capitalize text-base font-bold font-roboto">
            Our Mission
          </h1>
          <h1 className="uppercase font-extrabold font-manrope text-5xl tracking-tighter text-black">
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
          <div className="flex justify-start">
            <Button
              variant={"gradient"}
              className="font-roboto font-bold w-auto mt-8"
            >
              Read More <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="flex flex-row justify-center px-14 overflow-hidden bg-white">
        <div className="flex flex-col w-full mx-auto mt-18 ">
          <div className="flex flex-col">
            <h1 className="uppercase  font-extrabold font-manrope text-4xl tracking-tighter text-balance text-black">
              Hear it from <br /> Homeowners & Businesses <br />
              Not just us!
            </h1>
            <p className="font-roboto text-base font-medium text-black my-4">
              Discover what our clients have to say about their experience with
              our services.
            </p>
          </div>

          <div className="flex justify-start">
            <Button
              variant={"gradient"}
              className="font-roboto font-bold w-auto mt-8"
            >
              More Reviews <ChevronRight />
            </Button>
          </div>
        </div>
        <ReviewCarousel />
      </section>
      {/* Guarantees Section */}
      <section className="w-full text-black py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 font-roboto">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.id}
                className="mx-auto flex max-w-md flex-col gap-y-3 "
              >
                <dt className="text-sm font-normal text-balance">
                  {guarantee.description}
                </dt>
                <dd className="order-first flex flex-row items-center justify-center space-x-2">
                  <div>{guarantee.icon}</div>
                  <div className="font-roboto text-black text-2xl text-center font-semibold leading-none">
                    {guarantee.title}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="w-full mx-auto min-h-screen bg-black text-white flex flex-col justify-center items-center px-14 py-24"
      >
        <h1 className="capitalize font-extrabold font-manrope text-7xl tracking-tighter text-white mb-10 ">
          Our Services
        </h1>
        <div className=" w-full flex flex-row justify-center gap-x-6">
          <ServiceCard
            title="Residential"
            imgSrc="/roof1.jpg"
            services={[
              "Roof Installation",
              "Roof Repair",
              "Gutter Installation",
              "Roof Maintenance",
              "Flat & Low-Slope Roofing",
              "Roof Coating & Water Proofing",
            ]}
            href="/services"
          ></ServiceCard>
          <ServiceCard
            title="Commercial"
            imgSrc="/roof3.jpg"
            services={[
              "Roof Installation",
              "Roof Repair",
              "Gutter Installation",
              "Roof Maintenance",
              "Flat & Low-Slope Roofing",
              "Roof Coating & Water Proofing",
            ]}
            href="/services"
          ></ServiceCard>
        </div>
      </section>
      {/* Material Section */}
      <section className="w-full mx-auto items-center px-14 py-14 ">
        <LogoCloud />
      </section>
      {/* CTA Section */}
      <section className="w-full px-14 pb-14">
        <CTA />
      </section>
    </main>
  );
}
