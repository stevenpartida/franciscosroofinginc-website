import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/services";
import { ServiceGridCard } from "@/components/ServiceGridCard";
import CTA from "@/components/CTA";

type Props = {
  params: { type: string };
};

type ServiceType = keyof typeof servicesData;

export default async function ServicePage({ params }: Props) {
  const type = params.type;

  if (!(type in servicesData)) {
    return notFound();
  }

  const data = servicesData[type as ServiceType];

  return (
    <main className="relative w-full bg-white">
      <section className="flex flex-col w-full px-4 md:px-6 lg:px-14">
        <div className="w-full max-w-screen-xl mx-auto text-center items-center justify-center mt-48">
          <h1 className="font-manrope text-black capitalize font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-5xl">
            Our <span className="text-blue-600 capitalize">{type}</span>{" "}
            Services
          </h1>
          <p className="mt-8 text-black font-roboto font-medium text-center text-pretty w-[80%] m-auto">
            {data.subtitle}
          </p>
        </div>
      </section>
      <section className="w-full px-4 md:px-6 lg:px-14 py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <ServiceGridCard
              key={i}
              title="Roof Installation & Replacement"
              description="This is a test description for the residential service. It highlights the quality and care we provide to homeowners."
              image="/noPhoto.png"
              link="#"
            />
          ))}
        </div>
      </section>
      <section className="w-full px-14 pb-14">
        <CTA />
      </section>
    </main>
  );
}
