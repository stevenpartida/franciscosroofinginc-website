"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  image_url: string;
  title: string;
  category: string;
  year: number;
}

export default function AdminProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.image_url} project={project} />
      ))}
    </div>
  );
}
