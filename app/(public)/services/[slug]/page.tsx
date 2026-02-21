"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import ContactInfo from "@/components/ContactInfo";
import { servicesData } from "@/app/_data/services";
import LogoCloud from "@/components/LogoCloud";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = useMemo(() => {
    return servicesData.companyServices.services.find((s) => s.slug === slug);
  }, [slug]);

  if (!service)
    return <div className="text-center py-20">Service not found.</div>;

  return (
    <main className="bg-white relative flex justify-center flex-col items-center w-full px-4 sm:px-6 lg:px-28 pt-24">
      {/* Header */}
      <motion.section
        className="w-full max-w-screen-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 gap-6">
          <div className="flex-1">
            <h1 className="text-black font-extrabold text-3xl sm:text-5xl font-manrope leading-tight">
              {service.name}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg font-roboto py-4 max-w-4xl">
              {service.extendedDescription}
            </p>
          </div>
          <Link href="/contact">
            <Button
              variant="gradient"
              className="font-semibold font-roboto mt-2 md:mt-0"
            >
              Free Estimate
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.section
        className="w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-full h-[300px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl max-w-screen-xl">
          <Image
            src={service.image || "/noPhoto.png"}
            alt={service.name}
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </motion.section>

      {/* About & Included */}
      <section className="py-12 px-4 sm:px-6 flex flex-col lg:flex-row gap-10 max-w-screen-xl w-full">
        <motion.div
          className="lg:basis-2/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* About */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold font-manrope">
              About the service
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-roboto py-4 max-w-prose">
              {service.about}
            </p>
          </div>

          {/* Included */}
          <div className="pt-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-manrope">
              What is included?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg font-roboto py-4 max-w-prose">
              Here’s what’s included with this service to ensure quality,
              durability, and a smooth installation process. Each feature is
              designed to add value and meet the specific needs of your
              property.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 px-4 text-base sm:text-lg font-roboto">
              {service.whatsIncluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-base sm:text-lg font-roboto py-4 max-w-prose">
              Francisco’s Roofing Inc. is a fully licensed and insured roofing
              contractor committed to safety, transparency, and compliance. We
              take pride in adhering to all local and state construction
              regulations while maintaining comprehensive coverage for every
              project. License No. #1086198.
            </p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="lg:basis-1/3 w-full">
          <ContactInfo />
        </div>
      </section>

      <section className="w-full mx-auto flex justify-center items-center px-4 py-6 lg:px-14 lg:py-14 ">
        <LogoCloud />
      </section>

      {/* CTA */}
      <section className="w-full flex flex-col items-center justify-center pb-12">
        <CTA />
      </section>
    </main>
  );
}
