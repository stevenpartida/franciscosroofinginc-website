"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

type NavBarProps = {
  theme?: "light" | "dark";
};

function Navbar({ theme = "light" }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 font-roboto w-full ${
        isLight ? "text-white" : "text-black"
      }`}
    >
      <nav className="flex items-center justify-between p-6 lg:px-14">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={isLight ? "/logoWhite.png" : "/logoBlack.png"}
              alt="Francisco's Roofing Inc Logo"
              width={64}
              height={64}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-14">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-base font-medium after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${
                isLight
                  ? "after:bg-white text-white hover:text-white"
                  : "after:bg-black text-black hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Free Estimate Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/">
            <Button variant="gradient" className="font-semibold font-roboto">
              Free Estimate <ChevronRight />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image src="/logoBlack.png" alt="logo" width={64} height={64} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold hover:bg-gray-50"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
