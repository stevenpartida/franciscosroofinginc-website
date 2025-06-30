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

  const fetchProjects = async () => {
    const res = await fetch(
      `/api/projects?page=${currentPage}&limit=${pageSize}`
    );
    const data = await res.json();
    setProjects(data.projects);
    setTotalPages(data.totalPages);

    // Optional: adjust current page if necessary
    if (data.totalPages < currentPage) {
      setCurrentPage(data.totalPages);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = async (project: Project) => {
    const confirmed = confirm(`Delete "${project.title}"?`);
    if (!confirmed) return;

    const res = await fetch(`/api/projects/${project.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchProjects(); // 🔁 Refresh page to refill gap
    } else {
      const error = await res.json();
      alert(`Delete failed: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
