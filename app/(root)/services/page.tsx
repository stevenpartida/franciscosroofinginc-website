"use client";
import { servicesData } from "@/app/data/services";
import { ServiceGridCard } from "@/components/ServiceGridCard";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";

export default function ServicesPage() {
  // We’ll just use the residential group since you said you're unifying the service list
  const { subtitle, services } = servicesData.companyServices;

  return (
    <main className="relative flex justify-center flex-col items-center w-full bg-white">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col w-full px-4 mb-8 lg:mb-0 md:px-6 lg:px-14 "
      >
        <div className="w-full max-w-screen-xl mx-auto text-center items-center justify-center mt-30 lg:mt-42">
          <h1 className="font-manrope text-black capitalize font-extrabold md:tracking-tighter leading-8 md:leading-13 text-5xl">
            Services
          </h1>
          <p className="mt-8 text-gray-600 text-sm lg:text-lg font-roboto font-medium text-center text-pretty lg:w-[60%] m-auto ">
            {subtitle}
          </p>
        </div>
      </motion.section>

      {/* Grid Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-32  lg:w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl  mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="flex justify-center h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            >
              <ServiceGridCard
                key={i}
                title={service.name}
                description={service.description}
                image={service.image || "/noPhoto.png"}
                link={`/services/${service.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-8 lg:mt-0 lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}
