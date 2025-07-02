"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
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

  // ✅ NEW: delete logic
  const handleDelete = async (project: Project) => {
    const confirmed = confirm(`Delete "${project.title}"?`);
    if (!confirmed) return;

    const res = await fetch(`/api/projects/${project.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.id !== project.id));
    } else {
      const error = await res.json();
      alert(`Delete failed: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 ">
        {projects.map((project) => (
          <div key={project.id} className="relative group ">
            <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
              <button
                onClick={() => console.log("Edit", project)}
                className="bg-yellow-400 text-black text-sm px-2 py-1 rounded shadow hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project)}
                className="bg-red-500 text-white text-sm px-2 py-1 rounded shadow hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            <ProjectCard project={project} />
          </div>
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
