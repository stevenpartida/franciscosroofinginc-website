import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Star, CircleCheck, ChevronRight } from "lucide-react";

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

export default function Home() {
  return (
    <main className="relative w-full bg-white">
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
            <h1 className="font-manrope text-white uppercase font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-6xl">
              TRUSTED ROOFING <br />
              SOLUTIONS FOR <br />
              HOMES & <br />
              BUSINESSES
            </h1>
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
      <section className="w-full flex flex-row justify-center gap-x-8  px-14 py-24">
        {/* Left Images */}
        <div className="flex flex-row gap-x-8 font-roboto">
          {/* Image 1 with Black Box */}
          <div className="relative lg:flex flex-col lg:gap-x-8 lg:gap-y-4 mt-8">
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
        <div className="relative flex flex-col mt-8">
          <h1 className="uppercase text-base font-bold font-roboto">
            Our Mission
          </h1>
          <h1 className="uppercase font-extrabold font-manrope text-5xl tracking-tighter text-black">
            strong roofs, <br />
            <span className="text-highlight">stronger foundations</span>
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
                Premium Materials for Lasting Protection
              </li>
              <li className="flex flex-row gap-x-2 items-center font-roboto text-black text-base font-bold">
                <CircleCheck className="text-highlight w-5 h-5" />
                Reliable Service for Home & Businesses
              </li>
              <li className="flex flex-row gap-x-2 items-center font-roboto text-black text-base font-bold">
                <CircleCheck className="text-highlight w-5 h-5" />
                High-Performance Roofing for Any Weather Condition
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
    </main>
  );
}
