import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Star } from "lucide-react";

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
    icon: <Star className="text-highlight fill-highlight w-8 h-8" />,
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
        <div className="relative h-full w-full z-10 flex flex-col justify-end">
          <div className="relative flex flex-row justify-between items-end px-14 py-14">
            <h1 className="font-manrope text-white uppercase font-extrabold tracking-tighter leading-13 sm:text-6xl">
              TRUSTED ROOFING <br />
              SOLUTIONS FOR <br />
              HOMES & <br />
              BUSINESSES
            </h1>
            <div className="font-roboto text-white flex flex-col space-y-8">
              <p className="text-sm sm:text-base font-bold leading-5">
                We use top-quality materials and expert <br />
                techniques to deliver long-lasting <br />
                roofing solutions.
              </p>
              <div className="flex space-x-4">
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
    </main>
  );
}
