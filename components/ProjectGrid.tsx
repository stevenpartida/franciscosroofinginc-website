"use client";

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

  const slides = Math.ceil(projects.length / 6);

  if (loading)
    return <p className="text-center text-gray-500">Loading projects...</p>;

  return (
    <Carousel
      opts={{
        align: "start", // change from "start" to "center" for perfect symmetry
      }}
      className="pt-10  max-w-7xl justify-center items-center mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: slides }).map((_, index) => (
          <CarouselItem key={index}>
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
  );
}
