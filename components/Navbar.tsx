import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 z-50 font-roboto w-full ">
      <nav className=" text-white flex w-auto justify-between items-center text-center px-14 py-4">
        <Link href="/">
          <Image src="/logoWhite.png" alt="logo" width={64} height={64}></Image>
        </Link>
        <div className="flex space-x-8 font-roboto font-base font-medium">
          <Link href="/">
            <span>Services</span>
          </Link>
          <Link href="/">
            <span>Projects</span>
          </Link>
          <Link href="/">
            <span>About</span>
          </Link>
          <Link href="/">
            <span>Contact</span>
          </Link>
        </div>
        <Link href="/">
          <Button variant="gradient" className="font-semibold font-roboto">
            Free Estimate <ChevronRight />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
