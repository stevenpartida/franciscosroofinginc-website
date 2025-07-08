import React from "react";
import ProjectGrid from "@/components/ProjectGrid";
import CTA from "@/components/CTA";

export default function page() {
  return (
    <main className="bg-white text-black">
      <section className="px-4 lg:px-14">
        <h1 className="font-black font-manrope text-4xl capitalize tracking-tight text-center">
          projects
        </h1>
      </section>
      <section>
        <ProjectGrid />
      </section>
      <section className="w-full lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}
