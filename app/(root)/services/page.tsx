import { servicesData } from "@/app/data/services";
import { ServiceGridCard } from "@/components/ServiceGridCard";
import CTA from "@/components/CTA";

export default function ServicesPage() {
  // We’ll just use the residential group since you said you're unifying the service list
  const { subtitle, services } = servicesData.companyServices;

  return (
    <main className="relative flex justify-center flex-col items-center w-full bg-white">
      {/* Header Section */}
      <section className="flex flex-col w-full px-4 md:px-6 lg:px-14">
        <div className="w-full max-w-screen-xl mx-auto text-center items-center justify-center mt-42">
          <h1 className="font-manrope text-black capitalize font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-5xl">
            Services
          </h1>
          <p className="mt-8 text-black text-lg font-roboto font-medium text-center text-pretty w-[60%] m-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-7xl px-4 md:px-6 lg:px-32 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl mx-auto">
          {services.map((service, i) => (
            <ServiceGridCard
              key={i}
              title={service.name}
              description={service.description}
              image={service.image || "/noPhoto.png"}
              link={service.link || "#"}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-14 pb-14">
        <CTA />
      </section>
    </main>
  );
}
