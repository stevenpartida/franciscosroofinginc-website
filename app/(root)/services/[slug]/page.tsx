import React from "react";
import Image from "next/image";
import Link from "next/link";
import { main } from "framer-motion/client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CTA from "@/components/CTA";
import ContactInfo from "@/components/ContactInfo";

function page() {
  return (
    <main className="bg-white relative flex justify-center flex-col items-center w-full px-28 pt-24">
      <section className="max-w-full w-full m-auto ">
        <div className="flex flex-row items-center justify-between w-full m-auto  py-12">
          <div>
            <h1 className="text-black font-extrabold text-4xl font-manrope">
              Service Title
            </h1>
            <p className="text-gray-500 font-medium text-lg font-roboto py-4">
              Service Description
            </p>
          </div>
          <Link href="/contact">
            <Button variant="gradient" className="font-semibold font-roboto">
              Free Estimate
            </Button>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[600px] overflow-hidden rounded-2xl ">
          <Image
            src="/residential.jpg"
            alt="Service Image"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 flex flex-row gap-6">
        <div className="basis-2/3 ">
          <div>
            <h1 className="text-4xl font-bold font-manrope">
              About the service
            </h1>
            <p className="text-gray-500 text-lg font-roboto py-6 w-3xl">
              At risus viverra adipiscing at in tellus integer feugiat. Nisl
              pretium fusce id velit ut tortor. Sagittis orci a scelerisque
              purus semper eget. At lectus urna duis convallis. Porta nibh
              venenatis cras sed felis eget. Neque laoreet
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold font-manrope">
              What is included?
            </h1>
            <p className="text-gray-500 text-lg font-roboto py-6 w-3xl">
              Nisi quis eleifend quam adipiscing vitae. Aliquet bibendum enim
              facilisis gravida neque. Velit euismod in pellentesque massa
              placerat.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 px-10 text-gray-500 text-lg font-roboto">
              <li>Fast and reliable service tailored to your needs</li>
              <li>Experienced professionals using quality materials</li>
              <li>Affordable solutions with long-lasting results</li>
            </ul>
            <p className="text-gray-500 text-lg font-roboto py-6 w-3xl">
              Nisi quis eleifend quam adipiscing vitae. Aliquet bibendum enim
              facilisis gravida neque. Velit euismod in pellentesque massa
              placerat.
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <ContactInfo />
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center pb-12">
        <CTA></CTA>
      </section>
    </main>
  );
}

export default page;
