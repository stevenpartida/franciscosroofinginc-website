"use client";
import LoadingDots from "@/components/LoadingDots"; // Adjust path as needed

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  image_url: string;
  title: string;
  category: string;
  year: number;
}

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects/all");
      const data = await res.json();
      setProjects(data.projects || []);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const slides = Math.ceil(projects.length / 8);

  if (loading)
    return (
      <div className="flex justify-center text-center text-gray-500 item-center min-h-screen ">
        <LoadingDots />
      </div>
    );

  return (
    <main className="min-h-screen ">
      <motion.section
        className="hidden md:block"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className=" p-10 max-w-7xl justify-center items-center mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: slides }).map((_, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12  max-w-full mx-auto">
                  {projects.slice(index * 8, index * 8 + 8).map((project) => (
                    <div key={project.id} className="w-full">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:cursor-pointer" variant="ghost" />
          <CarouselNext className="hover:cursor-pointer" variant="ghost" />
        </Carousel>
      </motion.section>
      <section className="md:hidden flex flex-col justify-center items-center mt-10 mb-[-200px] space-y-4 p-11 max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full justify-center items-center"
        >
          {/* Content */}
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="w-full">
                <div className="flex justify-center w-full">
                  <div className="w-full max-w-[400px]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <p className="text-sm text-gray-500 mt-2 animate-pulse flex items-center gap-1">
          Swipe <ArrowRight className="w-4 h-4" />
        </p>
      </section>
    </main>
  );
}
