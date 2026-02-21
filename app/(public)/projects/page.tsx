"use client";
import CTA from "@/components/CTA";
import { motion, useTransform, useScroll } from "framer-motion";
import { getProjects, getProjectsByYear } from "@/lib/supabase/database/client";
import ProjectCard from "@/components/ProjectCard";

import { useRef, useEffect, useState } from "react";

export default function page() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjectsByYear().then(setProjects);
  }, []);
  return (
    <main className="bg-white text-black">
      {/* Desktop / laptop */}
      <div className="hidden md:block">
        <HorizontalScrollCarousel projects={projects} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden px-4 py-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
          {projects.map((p) => (
            <div key={p.id} className="min-w-[80%] snap-center">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <section className="w-full lg:px-14 lg:pb-14">
        <CTA />
      </section>
    </main>
  );
}

const HorizontalScrollCarousel = ({ projects }: { projects: any[] }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-58%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="grid auto-cols-[360px] grid-rows-2 auto-rows-[360px] 2xl:auto-cols-[480px] 2xl:auto-rows-[480px] grid-flow-col gap-4"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="w-[360px] h-[360px] 2xl:w-[480px] 2xl:h-[480px]"
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
