import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/HeroVideo.mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#12121200] to-[#121212] to-98%"></div>

      <section className="absolute sm:bottom-0 sm:left-0 w-full px-14 py-8">
        <div className="flex justify-center sm:justify-between items-center ">
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
            <div className="flex space-x-4 flex-row">
              <Link href="/">
                <Button variant="gradient">Get Free Estimate</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
