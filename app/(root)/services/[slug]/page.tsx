import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import ContactInfo from "@/components/ContactInfo";
import { servicesData } from "@/app/data/services";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.companyServices.services.find(
    (s) => s.slug === params.slug
  );

  if (!service) return notFound();

  return (
    <main className="bg-white relative flex justify-center flex-col items-center w-full px-6 lg:px-28 pt-24">
      {/* Header */}
      <section className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6">
          <div>
            <h1 className="text-black font-extrabold text-5xl font-manrope">
              {service.name}
            </h1>
            <p className="text-gray-600  text-lg font-roboto py-4  w-4xl">
              {service.extendedDescription}
            </p>
          </div>
          <Link href="/contact">
            <Button
              variant="gradient"
              className="font-semibold font-roboto mt-4 md:mt-0"
            >
              Free Estimate
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[600px] overflow-hidden rounded-2xl max-w-screen-xl">
          <Image
            src={service.image || "/noPhoto.png"}
            alt={service.name}
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* About & Included */}
      <section className="py-16 flex flex-col lg:flex-row gap-10 max-w-screen-xl w-full">
        <div className="lg:basis-2/3">
          {/* About */}
          <div>
            <h2 className="text-5xl font-bold font-manrope">
              About the service
            </h2>
            <p className="text-gray-600 text-lg font-roboto py-6 w-3xl">
              {service.about}
            </p>
          </div>

          {/* Included */}
          <div className="">
            <h3 className="text-3xl font-bold font-manrope">
              What is included?
            </h3>
            <p className="text-gray-600 text-lg font-roboto py-6 w-3xl">
              Here’s what’s included with this service to ensure quality,
              durability, and a smooth installation process. Each feature is
              designed to add value and meet the specific needs of your
              property.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 px-6 text-lg font-roboto">
              {service.whatsIncluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-lg font-roboto  py-6 w-3xl">
              Francisco’s Roofing Inc. is a licensed and insured contractor
              delivering high-quality roofing services in full compliance with
              local and state regulations.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:basis-1/3">
          <ContactInfo />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex flex-col items-center justify-center pb-12">
        <CTA />
      </section>
    </main>
  );
}
