import React from "react";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function page() {
  return (
    <main className="">
      <section className="px-4 lg:px-14">
        <h1 className="font-black font-manrope text-3xl capitalize tracking-tight text-center">
          projects
        </h1>
      </section>
      <section>
        <ProjectGrid />
      </section>
    </main>
  );
}
