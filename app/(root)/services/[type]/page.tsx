import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/services";

type Props = {
  params: { type: string };
};

type ServiceType = keyof typeof servicesData;

export default async function ServicePage({ params }: Props) {
  const { type } = params;

  // Type assertion to ensure `type` is a valid key of servicesData
  if (!Object.keys(servicesData).includes(type)) {
    return notFound();
  }

  const data = servicesData[type as ServiceType];

  console.log("type:", type);
  console.log("data:", data);
  console.log("data.title:", data.title);

  return (
    <main className="relative w-full bg-white">
      <section className="flex flex-col w-full min-h-screen px-4 md:px-6 lg:px-14">
        <div className="w-full max-w-screen-xl mx-auto text-center items-center justify-center mt-32 bg-gray-100">
          <h1 className="font-manrope text-black capitalize font-extrabold md:tracking-tighter leading-8 md:leading-13 text-4xl md:text-5xl">
            Our <span className="text-blue-600 capitalize">{type}</span>{" "}
            Services
          </h1>
          <p className="mt-8 text-black font-roboto font-medium text-center text-pretty w-[80%] m-auto">
            {data.subtitle}
          </p>
        </div>
        <div className=""> </div>
      </section>
    </main>
  );
}
