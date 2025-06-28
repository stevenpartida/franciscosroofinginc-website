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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        `/api/projects?page=${currentPage}&limit=${pageSize}`
      );
      const data = await res.json();
      setProjects(data.projects);
      setTotalPages(data.totalPages);
    };

    fetchProjects();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.image_url} project={project} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:cursor-pointer"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-3 py-1 border rounded hover:cursor-pointer ${
              currentPage === num ? "bg-black text-white" : ""
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
