import React from "react";
import ProjectGrid from "@/components/ProjectGrid";
import CTA from "@/components/CTA";

export default function page() {
  return (
    <main className="relative flex justify-center flex-col items-center w-full  bg-white text-black">
      <section className="px-4 lg:px-14">
        <h1 className="font-black font-manrope text-5xl capitalize tracking-tight text-center lg:mt-16">
          projects
        </h1>
      </section>
      <section className="w-full px-4 py-8">
        <ProjectGrid />
      </section>
      <section className="w-full lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}
