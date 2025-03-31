import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-grey-custom/20 rounded-[40px] flex flex-col items-center justify-center gap-4 p-8 md:p-12 lg:p-16 xl:p-20">
      <Image
        src="/logoBlack.png"
        alt="Fransicos Roofing Inc Logo"
        width={240}
        height={240}
      ></Image>
      <h1 className="font-manrope text-5xl font-bold md:tracking-tighter leading-8 md:leading-13 md:text-6xl text-black mt-[-50px]">
        Get in Touch
      </h1>
      <p className="font-roboto text-base md:text-lg text-black">
        We’re here to help! Contact us today for expert advice and a free
        roofing estimate.
      </p>
      <Link href="/">
        <Button variant="gradient">Contact Us</Button>
      </Link>
    </div>
  );
};

export default CTA;
